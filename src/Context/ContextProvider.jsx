import { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

export const DataProvider = createContext(null);

const ContextProvider = ({ children }) => {
   const auth = getAuth(app);
   //loading state
   const [loading, setLoading] = useState(false);
   // Up-to-date user 
   const [user, setUser] = useState(null);

   // Create user with eamil and password
   const userRegistration = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password);
   };
   //login user with google
   const loginWithGoogle = () => {
      setLoading(true)
      if (user) {
         toast.error("Already Logged In")
         return;
      }
      const googleProvider = new GoogleAuthProvider();
      signInWithPopup(auth, googleProvider)
         .then(res => {
            updateProfile(res.user, {
               displayName: res.user.displayName,
               photoURL: res.user.photoURL
            })
            console.log(res.user)
            setUser(res.user)
         })
         .catch(error => {
            console.error(error)
            toast.error(error.message)
            setLoading(false)
         })
   }

   // Login user
   const userLogin = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password);
   };

   //ovserve user
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         if (user) {
            setUser(currentUser);
         }
         setLoading(false);
      });
      return () => {
         unsubscribe();
      };
   }, [auth, user]);


   // reset password
   const resetPassword = (email) => {
      setLoading(true);
      return sendPasswordResetEmail(auth, email)
   }

   // signout user
   const userLogout = () => {
      setLoading(true)
      signOut(auth)
         .then(() => {
            toast.success("Signout successful")
            setUser(null)
         })
         .catch((error) => {
            toast.error(error.code)
            setLoading(false)
         });
   }
   const ProvidedData = { user, setUser, userRegistration, userLogin, loginWithGoogle, userLogout, loading, resetPassword };

   return (
      <DataProvider.Provider value={ProvidedData}>
         {children}
      </DataProvider.Provider>
   );
};

// Props validation
ContextProvider.propTypes = {
   children: PropTypes.node.isRequired,
};

export default ContextProvider;
