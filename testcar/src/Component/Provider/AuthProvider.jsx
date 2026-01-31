import React, { useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const AuthProvider = ({children}) => {
    const [user, setUser]=useState([]);
    const login =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo ={
        user,
        login
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;