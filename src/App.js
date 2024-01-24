/*App.js*/

import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

function App() {
    const responseMessage = (response) => {
        console.log(response);
        if (response.credential){ 
          fetch('http://localhost:8000/auth?token='+ response.credential,{ 
            credentials: 'include', 
            // To cause browsers to send a request with credentials included on both same-origin and cross-origin calls,  
            // add credentials: 'include' to the init object you pass to the fetch() method. 
           }) 
          .then((response) => { 
            return response.json(); 
          }) 
          .then((myJson) => { 
            alert(myJson) 
          }); 
        }
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    return (
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
    )
}
export default App;