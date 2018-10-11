class User < ApplicationRecord
    has_secure_password
    has_many :checkins
    has_many :parks, through: :checkins
end
