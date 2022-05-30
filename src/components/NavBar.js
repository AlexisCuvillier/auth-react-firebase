import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../context/userContext';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase-config';


export default function NavBar() {

    const { toggleModals } = useContext(UserContext);

    const navigate = useNavigate();

   /**
    * It's a function that logs out the user and navigates to the home page.
    */
    const logOut = async () => {
        try {

            await signOut(auth)
            navigate("/")
            
        } catch {
            
            alert("For some reasons we can't deconnect, plesae chek your internet connexion and retry")
        }
    }

    return (
        <nav className="navbar navbar-light bg-light px-4">
            <Link to="/" className='navbar-brand'>
                AuthJs
            </Link>
            <div>
                <button
                    onClick={() => toggleModals("signUp")}
                    className="btn btn-primary"
                >
                    Sign Up
                </button>
                <button
                    onClick={() => toggleModals("signIn")}
                    className="btn btn-primary ms-2"
                >
                    Sign In
                </button>
                <button
                onClick={logOut}

                    className="btn btn-danger ms-2"
                >
                    Log Out
                </button>
            </div>
        </nav>
    )
}
