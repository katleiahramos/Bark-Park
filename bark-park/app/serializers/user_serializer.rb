class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :admin
  has_many :parks 
  has_many :checkins 
end
