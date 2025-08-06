class Reaction < ApplicationRecord
  belongs_to :post
  
  validates :emoji, presence: true
  validates :session_id, presence: true
  # Ensure one reaction per emoji per session for a post
  validates :emoji, uniqueness: { scope: [:post_id, :session_id] }
  
  after_create_commit -> { broadcast_update_post }
  after_destroy_commit -> { broadcast_update_post }
  
  private
  
  def broadcast_update_post
    broadcast_replace_to "posts",
      target: "post_#{post.id}",
      partial: "posts/post",
      locals: { post: post }
  end
end