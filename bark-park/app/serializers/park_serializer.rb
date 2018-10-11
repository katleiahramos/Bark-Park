class ParkSerializer < ActiveModel::Serializer
    attributes :id, :name, :address, :count, :lat, :long
    has_many :users
    has_many :checkins
end