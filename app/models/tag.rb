class Tag < ApplicationRecord
  validates :name, presence: true

  has_many :taggings,
  foreign_key: :tag_id,
  class_name: 'Tagging'
end
