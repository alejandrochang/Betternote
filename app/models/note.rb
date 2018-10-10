class Note < ApplicationRecord
  validates :title, :user_id, :notebook_id, presence: true

  belongs_to :user,
  foreign_key: :user_id,
  class_name: 'User'
  
  belongs_to :notebook,
  foreign_key: :notebook_id,
  class_name: 'Notebook'

  has_many :taggings,
  foreign_key: :tag_id,
  class_name: 'Tagging'
end
