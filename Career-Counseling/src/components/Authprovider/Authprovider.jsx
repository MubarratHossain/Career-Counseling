import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';


export const authContext = createContext();


const Authprovider = ({ children }) => {
    const googleProvider= new GoogleAuthProvider();
    const handleSignUp =(email,password) =>{
        createUserWithEmailAndPassword(auth,email,password)
    };
    const handleLogin =(email,password)=>{
        signInWithEmailAndPassword(auth,email,password)
    };
    const handleLogOut =()=>{
        signOut(auth)
    };
    const handleGoogleLogin=()=>{
        signInWithPopup(auth,googleProvider);
    };
    const [user,setUser] = useState(null); 

    const authInfo ={

        user,
        handleGoogleLogin,
        handleLogin,
        handleSignUp,
        handleLogOut,
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{


            return()=>{
                unsubscribe()
            }
        })

    },[])
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default Authprovider;
