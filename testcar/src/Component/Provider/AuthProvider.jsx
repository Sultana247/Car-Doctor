import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import axios from 'axios';

const AuthProvider = ({children}) => {
    const [loading, setLoading]=useState(true);
    const [user, setUser]=useState([]);
    const signUp =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = ()=>{
        setLoading(true);
        return signOut(auth)
    }
    const authInfo ={
        user,
        signUp,
        login,
        loading,
        logout
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            // console.log(currentUser)
            setUser(currentUser);
            setLoading(false)
            const loggedUser = {email: currentUser?.email || user.email}

            if(currentUser){
                axios.post('http://localhost:5000/jwt', loggedUser, {withCredentials: true})
                .then(res=>{
                    console.log(res.data)
                })
            }
            else{
                axios.post('http://localhost:5000/logout', loggedUser, {withCredentials: true})
                .then(res=>{
                    console.log(res.data)
                })
            }

        });
        return ()=>{
            unsubscribe();
        }
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;