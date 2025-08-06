class Api::V1::ReactionsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_post
  before_action :set_session_id
  
  def create
    # Check if user already has this reaction
    existing = @post.reactions.find_by(emoji: reaction_params[:emoji], session_id: @session_id)
    
    if existing
      render json: { error: 'You have already reacted with this emoji' }, status: :unprocessable_entity
      return
    end
    
    @reaction = @post.reactions.build(reaction_params.merge(session_id: @session_id))
    
    if @reaction.save
      render json: { 
        reaction: {
          id: @reaction.id,
          emoji: @reaction.emoji,
          session_id: @session_id,
          post_id: @reaction.post_id
        }
      }, status: :created
    else
      render json: { errors: @reaction.errors.full_messages }, status: :unprocessable_entity
    end
  end
  
  def destroy
    emoji = params[:emoji]
    @reaction = @post.reactions.find_by(emoji: emoji, session_id: @session_id)
    
    if @reaction&.destroy
      head :no_content
    else
      render json: { error: 'Reaction not found' }, status: :not_found
    end
  end
  
  private
  
  def set_post
    @post = Post.find(params[:post_id])
  end
  
  def set_session_id
    @session_id = session.id.to_s
  end
  
  def reaction_params
    params.require(:reaction).permit(:emoji)
  end
end