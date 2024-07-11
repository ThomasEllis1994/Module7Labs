import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useUserContext } from "../context/UserContext";

export default function LoginMui() {
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [submitResult, setSubmitResult] = useState("");
    // destructure the context values passed via UserProvider
    const { currentUser, handleUpdateUser } = useUserContext();
    // alternative using the useContext hook directly, either works
    //const {currentUser, handleUpdateUser} = useContext(UserContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (userPassword.length < 5) {
            setSubmitResult("Password must be at least 5 chars long");
        } else if (userPassword === userName) {
            setSubmitResult("Password must not match email address");
        } else {
            setSubmitResult("Successful login.");
            handleUpdateUser({ name: userName }); // context function
        }
    };
    {
        /* if the user is already logged in, show msg instead of form */
    }
    if (currentUser.email)
        return (
            <>
                <p>Welcome {currentUser.userName}!</p>
                <button onClick={() => handleUpdateUser({})}>Log Out</button>
            </>
        );

    return (
        <>
            <form>
                <TextField
                    required
                    focused
                    helperText="Please enter your name"
                    id="Name"
                    label="Name"
                    onChange={(e) => setUserName(e.target.value)}
                />
                <TextField
                    helperText="Please enter a password "
                    id="password"
                    label="Password"
                    onChange={(e) => setUserPassword(e.target.value)}
                />

                <Button onClick={handleSubmit}>Submit</Button>
            </form>
            <h2>{submitResult}</h2>
        </>
    );
}
