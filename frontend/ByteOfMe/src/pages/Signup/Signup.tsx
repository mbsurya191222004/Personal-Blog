import { useState } from "react";
import {SignUp} from "../../API/api";

function Signup() {
    const [Username, setUsername] = useState("");  
    const [Password, setPassword] = useState("");  
    const [PageState, setPageState] = useState("signUp");  

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleClick = async (username: string, password: string) => {

        try {
            console.log("trying to sign up");

            const data = await SignUp(username, password);
            data.success ? setPageState("signedIn") : setPageState("signInFailed");
             
        } catch (error) {
            setPageState("signInFailed"); 
        }
    };

   
    const SignInfailed = (
        <>
            <h1>Sign In failed!!!</h1>
        </>
    );

    const SignedIn = (
        <>
            <h1>Signed IN!!</h1>
        </>
    );


    const WhileSignUp = (
        <>
            <h1>SIGN UP</h1>
            <label htmlFor="">Username</label>
            <input type="text" onChange={handleUsernameChange} />
            <label htmlFor="">Password</label>
            <input type="password" onChange={handlePasswordChange} />
            <button onClick={() => handleClick(Username, Password)}>SIGN UP</button>
        </>
    );

    return (
        <>
            {PageState === "signUp" && WhileSignUp}         
            {PageState === "signInFailed" && SignInfailed}   
            {PageState === "signedIn" && SignedIn}           
        </>
    );
}

export default Signup;
