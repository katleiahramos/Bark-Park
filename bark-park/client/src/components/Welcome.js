import React from 'react';
import { Parallax, Button } from 'react-materialize';

const Welcome = () => {


    return (
        <div className="Welcome z-depth-5 center-align">
            <h2 className="teal-text">Bark Park</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu dictum magna. Sed pulvinar justo nisi, sit amet sodales nunc semper sed. Ut egestas libero vitae urna rhoncus pulvinar.</p><br/>
            <Button>Sign Up</Button> <Button node="a" href="/login">Log In</Button>
        </div>
    )
}

export default Welcome