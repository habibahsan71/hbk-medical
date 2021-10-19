import { useEffect, useState } from "react";
import {
  sendEmailVerification,
  updateProfile,
  createUserWithEmailAndPassword,
  signOut,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import firebaseInitialization from "./../firebase/firebase.init.js";


firebaseInitialization();

// Providers
const googleProvider = new GoogleAuthProvider();;

const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 5000);
  }, [error]);


  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  }


  const signInWithEmail = () => {
    // e.preventDefault();
    return signInWithEmailAndPassword(auth, email, password);
  }

  const setNameAndImage = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => { })
      .catch((error) => {
        setError(error.message);
      });
  }

  const emailVerify = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      alert(`An Verification mail has been set to ${email}`);
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (signedInUser) => {
      if (signedInUser) {
        setUser(signedInUser);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);


  const logOut = () => {
    signOut(auth)
      .then((res) => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  const passwordReset = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("password reset email has been sent");
      })
      .catch((err) => {
        setError(err.message);
      });
  }


  const singUp = (e) => {
    e.preventDefault();
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setNameAndImage();
        emailVerify();
        alert("user has been created");
      })
      .catch((err) => {
        setError(err.message);
      });

  }
  const getName = (e) => {
    setName(e?.target?.value);
  }

  const getEmail = (e) => {
    setEmail(e?.target?.value);
  }

  const getPassword = (e) => {
    setPassword(e?.target?.value);
  }

  const getPhoto = (e) => {
    setPhoto(e?.target?.value);
  }

  return {
    signInWithEmail,
    logOut,
    signInWithGoogle,
    user,
    setUser,
    error,
    setError,
    getPassword,
    getEmail,
    singUp,
    getPhoto,
    getName,
    passwordReset,
    loading
  };
};

export default useFirebase;
