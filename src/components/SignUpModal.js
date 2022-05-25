import React, { useContext, useRef, useState } from 'react';
import { UserContext } from '../context/userContext';

export default function SignUpModal() {

    const { modalState, toggleModals } = useContext(UserContext);
    const [validation, setValidation] = useState("")

    const inputs = useRef([])
    const addInputs = el => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el)
        }
    }
    const handleForm = e => {
        e.preventDefault()

        if((inputs.current[1].value.length || inputs.current[2].value.length) < 6){
            setValidation("6 characters min")
            return;
        }
        else if((inputs.current[1].value !== inputs.current[2].value))
        {
            setValidation("Passwords do not match")
        }

       
    }

    return (
        <>
            {modalState.signUpModal && (

                <div className="position-fixed top-0 vw-100 vh-100">
                    <div
                        onClick={() => toggleModals("close")}
                        className="w-100 h-100 bg-dark bg-opacity-75"
                    >
                    </div>
                    <div className="position-absolute top-50 start-50 translate-middle" style={{ minWidth: "400px" }}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Sign Up</h5>
                                    <button 
                                    onClick={() => toggleModals("close")}
                                    className="btn-close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <form 
                                    onSubmit={handleForm}
                                    className="sign-up-form" >
                                        <div className="mb-3">
                                            <label htmlFor="signUpEmail" className='form-label'> Email adress</label>
                                            <input
                                                ref={addInputs}
                                                type="email"
                                                name='email'
                                                id='signUpEmail'
                                                required
                                                className='form-control'
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="signUpPwd" className='form-label'> Password</label>
                                            <input
                                                ref={addInputs}
                                                type="password"
                                                name='pwd' id='signUpPwd'
                                                required
                                                className='form-control'
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="repeatPwd" className='form-label'> Repeat assword</label>
                                            <input
                                                ref={addInputs}
                                                type="password"
                                                name='pwd'
                                                id='repeatPwd'
                                                required
                                                className='form-control'
                                            />
                                            <p className="text-danger mt-1" >{validation}</p>
                                        </div>
                                        <button
                                            className="btn btn-primary"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
