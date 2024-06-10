import React, {useState} from 'react';
import './CSS/LoginSignup.css'

const LoginSignup = () => {

    const [state, setState] = useState("Login")
    const [formData, setFormData] = useState({
        username:"",
        password:"",
        email:""
    })

    const changeHandler = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const login = async () =>{
        console.log("Login Function Executed", formData)
        let respData;
        await fetch("http://localhost:4000/login",{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData),
        }).then((resp)=>resp.json()).then((data)=>respData=data)

        if(respData.success){
            localStorage.setItem('auth-token',respData.token)
            window.location.replace('/')
        }
        else{
            alert(respData.errors)
        }
    }

    const signup = async () =>{
        console.log("SignUp Function Executed", formData)
        let respData;
        await fetch("http://localhost:4000/signup",{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData),
        }).then((resp)=>resp.json()).then((data)=>respData=data)

        if(respData.success){
            localStorage.setItem('auth-token',respData.token)
            window.location.replace('/')
        }
        else{
            alert(respData.errors)
        }
    }

    return (
        <div className='loginsignup'>
            <div className='loginsignup-container'>
                <h1>{state}</h1>

                <div className="loginsignup-fields">
                    {state === "Sign Up" ? <input type="text" placeholder='Your Name' name="username" value={formData.username} onChange={changeHandler}/> : <></>}
                    <input type="email" placeholder='Your Email' name="email" value={formData.email} onChange={changeHandler}/>
                    <input type="password" placeholder='Your Password' name="password" value={formData.password} onChange={changeHandler}/>
                </div>

                <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
                {state === "Sign Up" ?
                    <p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>
                    :
                    <p className="loginsignup-login">Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>
                }
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id=""/>
                    <p>By continuing, I agree to the terms of use & privacy policies. </p>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;