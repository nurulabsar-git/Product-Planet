import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase.Config';
import { ThemeContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './LogIn.css';

const LogIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(ThemeContext);
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
        }
   const history = useHistory();
   const location = useLocation();
   const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
     var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
       
        const {displayName, email} = result.user;
        const signInUser = {name: displayName, email}
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        setLoggedInUser(signInUser);
        history.replace(from);
       
        console.log(user);
        console.log(signInUser);
   
  })
  .catch((error) => {
   
    var errorCode = error.code;
    var errorMessage = error.message;
   var email = error.email;
   var credential = error.credential;
   
  });
    }
    return (
        <div className="logIn">
           <div>
            <h4 style={{textShadow:'2px 2px 4px gray'}}>Please Confirm Your Authentication</h4>
           <button onClick={handleGoogleSignIn} style={{width: '50%', borderRadius:'7px', marginTop: '50px'}}><i class="fa fa-google" aria-hidden="true"></i> Sign in with google</button>
           </div>
        </div>
    );
};

export default LogIn;