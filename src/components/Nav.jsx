import { Outlet, Link } from "react-router-dom";
import {AiTwotoneBulb} from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Nav(){
    const navigate= useNavigate();
    const [isLogged, setIsLogged]= useState(false)
    useEffect(()=>{
        if (localStorage.getItem("token")!= undefined){
            setIsLogged(true)
        }else {
            setIsLogged(false)
        }
    })
    const logout=()=>{
        localStorage.clear();
        setIsLogged(false)
    }
    return(
        <div>
        <br />
       
        <div class='container'>
        <br />
        <div class="row">
        <div class="column"><h4><a href="/">Ultimate <AiTwotoneBulb class="yellow"/>Jobs</a></h4></div>
        <div class="column"><a href="/">home</a>   &nbsp;
                                    &nbsp;<a href="/search">browse</a>   
                                    {isLogged==true? <>&nbsp;
                                    &nbsp;<a href="/create">add post</a>
                                    &nbsp;&nbsp;<a href="/applications">applications</a></>: <></>}
                                    
                                    </div>
        
        <div class="column">{isLogged==true?<><a onClick={()=>{navigate('/profile/'+ localStorage.getItem("profileId"))}}>Welcome again: {localStorage.getItem("username")}</a><button className="button button-black float-right" onClick={logout}>LOGOUT</button></>:<><button class="button-black float-right" onClick={()=>{navigate('/signup')}}  >SignUp</button>  
                                    &nbsp; <button class="button-black button-clear float-right" onClick={()=>{navigate('/login')}}>SignIn</button></>}</div>
  </div>
      </div>
      <Outlet />
            <div className="container">
                <blockquote>
                    <p><em>@CopyRights Louai Zaiter 2023</em></p>
                </blockquote>
            </div>
      </div>
    )
}