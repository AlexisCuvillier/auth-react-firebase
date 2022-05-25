import { createContext, useState, useEffect } from "react";

export const UserContext = createContext()

export function UserContextProvider(props) {

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
        <UserContext.Provider value={{ modalState, toggleModals  }}>
            {props.children}
        </UserContext.Provider>
    )
}