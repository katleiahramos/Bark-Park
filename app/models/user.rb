class User < ApplicationRecord
    has_secure_password
    has_many :checkins
    has_many :parks, through: :checkins

    scope :current, -> {joins(:checkins).where('checkins.active =?', true)}
   
end
