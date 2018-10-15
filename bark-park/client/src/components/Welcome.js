import React from 'react';
import { Parallax, Button } from 'react-materialize';

const Welcome = () => {


    return (
        <div className="Welcome z-depth-5 center-align">
            <h2 className="teal-text">Bark Park</h2>
            <p>Looking for dog parks or more dog friends? See local dog parks and who's currently checked-in! Create an accout below or sign in to an existing account.</p><br/>
            <Button node="a" href="/signup">Sign Up</Button> <Button node="a" href="/login">Log In</Button>
        </div>
    )
}

export default Welcome