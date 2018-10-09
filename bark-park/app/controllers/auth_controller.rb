class AuthController < ApplicationController 
    #create an auth for sign in 
    def create
        user = User.find_by(username: params["username"])
        if user && user.authenticate(params["password"])
            #Confirms user exists and password matches 
            token = encode_token( user_id: user.id)
            render json: {user: user, jwt: token} 
        end
    end

    def me 

        #now that we have user ID, we can find that user
        # this is our current user now 
        
        # could use this for finding show page of parks for a single user 
        # render json: {user: user, books: user.books}
    end

    
end
