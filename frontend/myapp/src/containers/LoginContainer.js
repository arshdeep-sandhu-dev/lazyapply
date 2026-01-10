import { useState} from "react";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../firebase/auth";
import { useAuth } from "../context/auth/AuthState";
import { Navigate } from "react-router-dom";
import RegistryBox from "../components/RegistryBox"; 

import {Box} from "@mui/material";




const LoginContainer = () => {
    const { userLoggedIn } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    //TODO change to mainpage
    //////////////////////////////////////////////////////////////////////////////
    const MAINPAGE = "/mainpage";
    //////////////////////////////////////////////////////////////////////////////
    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            await doSignInWithEmailAndPassword(email, password).catch((error) => {
                setErrorMessage("Invalid email or password")
                setIsSigningIn(false)
                });
        }
    }

    const onGoogleSignIn = async () => {
        if (!isSigningIn) {
            setIsSigningIn(true);
            await doSignInWithGoogle().catch((error) => {
                setErrorMessage(error.message)
                setIsSigningIn(false)
                });
        }
    }

    return (
        <Box sx={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '80vh'
            }}>
            {userLoggedIn && (<Navigate to={MAINPAGE} replace={true} />)}
            <RegistryBox
                onSubmit={onSubmit}
                onGoogleSignIn={onGoogleSignIn}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                isDoingAction={isSigningIn}
                errorMessage={errorMessage}
                isRegistering={false}
            />
        </Box>
    );
};

export default LoginContainer;