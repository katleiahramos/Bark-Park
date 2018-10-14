class CheckinSerializer < ActiveModel::Serializer
    attributes :checkin_date, :active 
    belongs_to :user
    belongs_to :park
end 