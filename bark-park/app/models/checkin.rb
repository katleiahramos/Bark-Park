class Checkin < ApplicationRecord
    belongs_to :user
    belongs_to :park


    scope :active, -> {where(active: true)}
end 
