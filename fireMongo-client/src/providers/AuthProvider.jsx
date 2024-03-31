
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from './../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // for create user using email password--------------------------------
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // for add name and photo in create user accound ------------------
    const handleUpdateProfile =(name, photo) => {
        return updateProfile(auth.currentUser,{
            displayName: name, photoURL: photo
        })
    }

    // for login using email password--------------------------------
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // for login using google ----------------------------------------
    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // for logout ----------------------------------------
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, createUser => {
            setUser(createUser);
            setLoading(false)
            console.log("observe current user", createUser);
        });
        return () => {
            unSubscribe()
        }
    }, [])






    const authInfo = {user, loading, createUser, signInUser, signInWithGoogle, logOut,handleUpdateProfile }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;