class ParkSerializer < ActiveModel::Serializer
    attributes :id, :name, :address, :count 
end