import Image from "../assets/bulb_3.jpg"
import "../App.css"
import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function Signup() {
    const navigate= useNavigate()
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [username, setUsername]= useState('');
    const api="https://backend.ultimatejobs.co"
    function submit(){
        axios.post(
            api+'/api/signup',{
                username: username,
                password: password,
                email:email
            }
        ).then(res=>{
            if (res.status=200 || res.status==201){
                navigate("/login")
            }else{
                alert("internal server error")
            }
        })
    }
    useEffect(()=>{
        if (localStorage.getItem("token")!= undefined){
            navigate('/search')
        }
    })
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    const handleEmail= (e)=>{
        setEmail(e.target.value)
    }
    const handleUsername=(e)=>{
        setUsername(e.target.value)
    }
    return (
        <>
            <div class="container">
                <div class="container">
                    <img src={Image} />
                    <div class="centered content-to-hide" >
                        <h2>You already have an account?</h2>
                        <p>Login and apply to open vacancies</p>
                        <button class="button button-black" >
                            Login
                        </button>
                    </div>  </div>
                <hr />
                <h2>Sign Up</h2>
                <div class="row">
                    <div class="column">
                        <label>Username</label>
                        <input placeholder="Username" onChange={handleUsername} />
                    </div>
                    <div class="column">
                        <label>Email</label>
                        <input placeholder="Email" type="email" onChange={handleEmail} />
                    </div>
                </div>

                <label>Password</label>
                <input placeholder="Password" type="password" onChange={handlePassword}/>
                <button class="button button-black" onClick={submit} >signup</button>
            </div>

        </>
    )
}