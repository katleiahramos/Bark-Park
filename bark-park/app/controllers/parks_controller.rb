require 'pry'


class ParksController < ApplicationController 
    before_action :authorized, only: [:index]

    def index
        @parks = Park.all 
        render json: @parks
    end 

    def create
        @park = Park.create(park_params)
        render json: Park.all
    end

    def destroy
        @park = Park.find(params[:id])
        @park.destroy
    end

    def update
        @park = Park.find(params[:id])
        @park.update(park_params)
    end

    def current_users
        @park = Park.find(params[:id])
        @users =  @park.users.current
        render json: @users
    end 

    private 
    
    def park_params
        params.require(:park).permit(:name, :address, :count, :lat, :long)
    end
end

