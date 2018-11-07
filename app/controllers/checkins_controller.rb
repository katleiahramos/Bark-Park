require 'pry'

class CheckinsController < ApplicationController 

    def create 
        user = User.find_by(username: params["username"])
        park = Park.find_by(name: params["parkname"])
        checkin = Checkin.new(checkin_date: Time.now) 
        checkin.user = user 
        checkin.park = park 
        checkin.save 
        render json: checkin
    end 

    def checkout
        checkin = Checkin.find(params[:id])
        checkin.update(active: false)
        checkin.save
        render json: checkin
    end
end 