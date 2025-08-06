class CreateReactions < ActiveRecord::Migration[8.0]
  def change
    create_table :reactions do |t|
      t.references :post, null: false, foreign_key: true
      t.string :emoji, null: false
      t.string :session_id
      
      t.timestamps
    end
    
    add_index :reactions, [:post_id, :emoji]
    add_index :reactions, :session_id
  end
end
