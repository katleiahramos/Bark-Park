class AuthController < ApplicationController 
    #create an auth for sign in 
    def create
        user = User.find_by(username: params["username"])
        if user && user.authenticate(params["password"])
            #Confirms user exists and password matches 
            token = encode_token( user_id: user.id)
            render json: {user: user, jwt: token} 
        else 
            render json: {error: "Username and password combination not found. Please try again or create an account."}
        end
    end



    
end
