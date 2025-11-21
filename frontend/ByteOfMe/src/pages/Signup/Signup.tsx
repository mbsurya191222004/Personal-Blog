import { useEffect, useState } from "react";
import {SignUp} from "../../API/api";
import { useNavigate } from "react-router-dom";
import styles from './Signup.module.css'


function Signup() {
    const [Username, setUsername] = useState("");  
    const [Password, setPassword] = useState("");  
    const [PageState, setPageState] = useState("signUp");  

    const navigate = useNavigate();



    useEffect(
        () => {
            if(localStorage.getItem("authToken")){
                navigate('/home')
            }
        }
    )

    

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
            if(data.success){
                setPageState("signedIn");
                navigate("/login")
            }else{
                setPageState("signInFailed");
                navigate("");
            }
        } catch (error) {
            setPageState("signInFailed"); 
        }
    };

    const handleLoginClick = () => {
        navigate("/login");
    }

    const handletryagain = () =>{
        setPageState("signUp")
    }


   
    const SignInfailed = (
        <div>
            <h1>Sign In failed!!!</h1>
            <button onClick={handletryagain}>Try again</button>
        </div>
    );

    const SignedIn = (
        <>
            <h1>Signed IN!!</h1>
        </>
    );


    const WhileSignUp = (
        <div className={styles.container}>
            <div id="SignUpDiv">
            <h1>SIGN UP</h1>
            <label htmlFor="">Username</label>
            <br />
            <input type="text" onChange={handleUsernameChange} />
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input type="password" onChange={handlePasswordChange} />
            <br />
            <button onClick={() => handleClick(Username, Password)}>SIGN UP</button>
            </div>

            <div className="LogInDiv">
            <label htmlFor="">already have an account?</label>
            <button id="logInButton" onClick={handleLoginClick}>Log In</button>
            </div>
            <div/>
        </div>
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
