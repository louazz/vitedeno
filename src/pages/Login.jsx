import { useEffect, useState } from 'react'
import Image from '../assets/bulb_4.jpg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Login (){
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");
    const navigate= useNavigate('/');
    const api="https://backend.ultimatejobs.co"
    function submit(){
        axios.post(
            api+"/api/signin",{
                username:username,
                password:password
            }
        ).then(res=>{
            if (res.status=200){
                localStorage.setItem("token", res.data['token'])
                localStorage.setItem("userId", res.data['userId'])
                localStorage.setItem("username", res.data['username'])
                localStorage.setItem("profileId", res.data['profileId'])
                navigate("/search");
            }else{
                alert("verify your credentials");
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
    const handleUsername=(e)=>{
        setUsername(e.target.value)
    }
return (
    <>

    <div className="container">
    <img  src={Image} className='img1' />
    <div className="centered  content-to-hide" >
        <h2>Don't have an account?</h2>
        <p>Sign up now and have the chance to apply to current vacancies</p>
        <button class="button button-black">sign up</button>
    </div>
    </div>
    <div className='container color4'>
    <hr />
    <h2>Login</h2>
    <label >Username</label>
    <input placeholder='username' onChange={handleUsername}/>
    <label> Password </label>
    <input placeholder='password' type="password" onChange={handlePassword} />
    <button className="button button-black" onClick={submit}>Login</button>
    </div>
    
    </>
)
}