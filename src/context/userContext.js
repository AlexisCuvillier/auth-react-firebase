import { createContext, useState, useEffect } from "react";


import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth"
import {auth} from "../firebase-config"

export const UserContext = createContext()

export function UserContextProvider(props) {

    const [currentUser, setCurrentUser] = useState();
    const [loadingData, setLoadingData] = useState(true);


    const signUp = (email, pwd) => createUserWithEmailAndPassword
    (auth, email, pwd)
    // Modals

    const [modalState, setModalState] = useState({
        signUpModal: false,
        signInModal: false
    })

    /* Gestion de l'ouverture et fermeture des différentes modals */ 

    const toggleModals = modal => {
        if (modal === 'signIn') {
            setModalState({
                signUpModal: false,
                signInModal: true
            })
        }
        if (modal === 'signUp') {
            setModalState({
                signUpModal: true,
                signInModal: false
            })
        }
        if (modal === 'close') {
            setModalState({
                signUpModal: false,
                signInModal: false
            })
        }
    }
    return (
        <UserContext.Provider value={{ modalState, toggleModals, signUp  }}>
            {props.children}
        </UserContext.Provider>
    )
}