import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

export const authContext = createContext();

const Authprovider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();

    const signUpUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    const signInUser = (email, password) => signInWithEmailAndPassword(auth, email, password);
    const signOutUser = () => signOut(auth);
    const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

    const [user, setUser] = useState(null);

   
    const updateUserProfile = async (displayName, photoURL) => {
        try {
            
            const updatedUser = { ...user, displayName, photoURL };
            
            
            setUser(updatedUser); 
        } catch (error) {
            throw new Error("Profile update failed");
        }
    };
    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe(); 
    }, []);

    const authInfo = {
        user,
        signUpUser,
        signInUser,
        signOutUser,
        signInWithGoogle,
        updateUserProfile,  
    };

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default Authprovider;
