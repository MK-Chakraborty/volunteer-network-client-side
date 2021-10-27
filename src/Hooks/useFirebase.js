import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useState } from 'react';
import initializeAuthentication from '../firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            console.log(result.user);
        })
        .catch((error) => {
            console.log(error.message);
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
            }
        })
    },[])

    return {user, signInWithGoogle};

}

export default useFirebase;