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

  // clear error
  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 5000);
  }, [error]);

  // google sign in
  function signInWithGoogle() {
    return signInWithPopup(auth, googleProvider);
  }

  // Email sign in
  function signInWithEmail(e) {
    // e.preventDefault();
    return signInWithEmailAndPassword(auth, email, password);
  }

  function setNameAndImage() {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => { })
      .catch((error) => {
        setError(error.message);
      });
  }

  function emailVerify() {
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


  function logOut() {
    signOut(auth)
      .then((res) => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  function passwordReset(e) {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("password reset email has been sent");
      })
      .catch((err) => {
        setError(err.message);
      });
  }


  function singUp(e) {
    console.log(email, password);
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setNameAndImage();
        emailVerify();
        alert("user has been created");
      })
      .catch((err) => {
        setError(err.message);
      });

  }
  function getName(e) {
    setName(e?.target?.value);
  }

  function getEmail(e) {
    setEmail(e?.target?.value);
  }

  function getPassword(e) {
    setPassword(e?.target?.value);
  }

  function getPhoto(e) {
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
