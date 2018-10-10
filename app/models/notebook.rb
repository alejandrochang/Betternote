class Notebook < ApplicationRecord
  validates :title, :user_id, presence: true

  belongs_to :users,
  foreign_key: :user_id,
  class_name: 'User'

  
  has_many :notes,
  foreign_key: :notebook_id,
  class_name: 'Note'
end
