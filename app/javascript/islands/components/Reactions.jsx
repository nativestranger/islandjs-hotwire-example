import React, { useState, useEffect, useRef } from 'react';
import { useTurboProps } from '../utils/turbo.js';

function Reactions({ containerId }) {
  // Get props from the container using useTurboProps
  const initialProps = useTurboProps(containerId);
  
  const postId = initialProps.postId;
  const currentSessionId = initialProps.currentSessionId;
  const initialReactions = initialProps.initialReactions || [];

  const [reactions, setReactions] = useState(initialReactions);
  const [showPicker, setShowPicker] = useState(false);
  const [loading, setLoading] = useState(false);
  const pickerRef = useRef(null);
  
  // Log for debugging
  console.log('Reactions component mounted with:', { postId, currentSessionId, containerId });

  // Available emojis (similar to Discord)
  const availableEmojis = ['👍', '❤️', '😂', '😮', '😢', '😡', '🚀', '🎉', '🔥', '✨', '🙏', '💯'];
  
  // If postId is missing, show error state
  if (!postId) {
    return (
      <div className="text-sm text-gray-500">
        Unable to load reactions
      </div>
    );
  }

  // Close picker when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setShowPicker(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Group reactions by emoji and track if current user has reacted
  const groupedReactions = reactions.reduce((acc, reaction) => {
    if (!acc[reaction.emoji]) {
      acc[reaction.emoji] = {
        emoji: reaction.emoji,
        count: 0,
        sessionIds: [],
        userHasReacted: false
      };
    }
    acc[reaction.emoji].count++;
    acc[reaction.emoji].sessionIds.push(reaction.session_id);
    
    // Check if current session has reacted with this emoji
    if (reaction.session_id === currentSessionId) {
      acc[reaction.emoji].userHasReacted = true;
    }
    
    return acc;
  }, {});

  const toggleReaction = async (emoji) => {
    if (loading || !postId) {
      console.error('Cannot toggle reaction: postId is missing');
      return;
    }
    setLoading(true);

    try {
      const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
      
      // Check if current user has already reacted with this emoji
      const userReaction = reactions.find(r => r.emoji === emoji && r.session_id === currentSessionId);
      
      if (userReaction) {
        // Remove user's reaction
        const response = await fetch(`/api/v1/posts/${postId}/reactions/${encodeURIComponent(emoji)}`, {
          method: 'DELETE',
          headers: {
            'X-CSRF-Token': csrfToken,
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          // Remove only the current user's reaction
          setReactions(prev => prev.filter(r => !(r.emoji === emoji && r.session_id === currentSessionId)));
        } else {
          console.error('Failed to remove reaction:', response.status, response.statusText);
        }
      } else {
        // Add reaction
        const response = await fetch(`/api/v1/posts/${postId}/reactions`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrfToken,
            'Accept': 'application/json'
          },
          body: JSON.stringify({ reaction: { emoji } })
        });

        if (response.ok) {
          const data = await response.json();
          setReactions(prev => [...prev, data.reaction]);
        } else {
          const errorData = await response.json();
          console.error('Failed to add reaction:', errorData.error || errorData.errors);
        }
      }
    } catch (error) {
      console.error('Error toggling reaction:', error);
    } finally {
      setLoading(false);
      setShowPicker(false);
    }
  };

  const addNewReaction = (emoji) => {
    toggleReaction(emoji);
  };

  return (
    <div className="flex items-center flex-wrap gap-1.5 sm:gap-2">
      {/* Add reaction button - inline on the left */}
      <div className="relative" ref={pickerRef}>
        <button
          onClick={() => setShowPicker(!showPicker)}
          disabled={loading}
          className={`
            inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full transition-all duration-200
            bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200
            hover:from-indigo-100 hover:to-purple-100 hover:border-indigo-300
            ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 hover:shadow-md active:scale-100 cursor-pointer'}
          `}
          title="Add reaction"
        >
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span className="ml-1 font-medium text-indigo-600">Add</span>
        </button>

        {/* Emoji picker - positioned above button */}
        {showPicker && (
          <div className="absolute bottom-full left-0 mb-2 p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-2xl border border-slate-200 z-50 w-[280px] sm:w-[320px]">
            <div className="grid grid-cols-6 gap-1.5 sm:gap-2">
              {availableEmojis.map(emoji => (
                <button
                  key={emoji}
                  onClick={() => addNewReaction(emoji)}
                  disabled={loading}
                  className={`
                    w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl
                    bg-gradient-to-br from-white to-slate-50 border border-slate-200
                    transition-all duration-200 text-xl sm:text-2xl
                    hover:scale-110 sm:hover:scale-125 hover:shadow-lg hover:from-indigo-50 hover:to-purple-50
                    hover:border-indigo-200 cursor-pointer hover:z-10
                  `}
                  title={`React with ${emoji}`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Existing reactions - inline to the right of add button */}
      {Object.entries(groupedReactions).map(([emoji, data]) => (
        <button
          key={emoji}
          onClick={() => toggleReaction(emoji)}
          disabled={loading}
          className={`
            inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full transition-all duration-200
            ${data.userHasReacted 
              ? 'bg-gradient-to-r from-indigo-100 to-purple-100 border-2 border-indigo-400 hover:from-indigo-200 hover:to-purple-200' 
              : 'bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 hover:from-slate-100 hover:to-slate-200 hover:border-slate-300'
            }
            ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 hover:shadow-md active:scale-100 cursor-pointer'}
          `}
          title={data.userHasReacted ? 'Click to remove your reaction' : 'Click to add your reaction'}
        >
          <span className="text-base sm:text-lg mr-1 sm:mr-1.5">{emoji}</span>
          <span className={`font-semibold ${data.userHasReacted ? 'text-indigo-700' : 'text-slate-700'}`}>
            {data.count}
          </span>
        </button>
      ))}
    </div>
  );
}

export default Reactions;