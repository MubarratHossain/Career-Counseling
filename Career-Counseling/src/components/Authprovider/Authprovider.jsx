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
    const [loading, setLoading] = useState(true);

   
    const updateUserProfile = async (displayName, photoURL) => {
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName, photoURL });
        setUser({ ...auth.currentUser, displayName, photoURL });
      }
    };
    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
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
    if (loading) {
        return <span className="loading loading-ring loading-lg"></span>;  // You can show a spinner or loading state here
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default Authprovider;