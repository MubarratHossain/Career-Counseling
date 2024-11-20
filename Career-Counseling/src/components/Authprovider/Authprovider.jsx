import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

export const authContext = createContext();

const Authprovider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();

    const signUpUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    const signInUser = (email, password) => signInWithEmailAndPassword(auth, email, password);
    const signOutUser = () => signOut(auth);
    const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

    const [user, setUser] = useState(null);

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
    };

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default Authprovider;
