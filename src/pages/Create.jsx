
import { useState } from 'react'
import Image from '../assets/bulb_4.jpg'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from "react";

export default function Create(){
   const [title, setTitle]= useState('');
   const [date, setDate]= useState('');
   const [location, setLocation]= useState('');
   const [description, setDescription]= useState('');
   const [company, setCompany]= useState('')
 
   let navigate= useNavigate();
   const handleTitle= (e)=>{
    setTitle(e.target.value);
   }
   const handleDate=(e)=>{
    setDate(e.target.value)
   }
   const handleLocation= (e)=>{
    setLocation(e.target.value)
   }
   const handleDesc= (e)=>{
    setDescription(e.target.value)
   }
   const handleCompany= (e)=>{
    setCompany(e.target.value)
   }
   const api= "https://backend.ultimatejobs.co";
   useEffect(()=>{
    if (localStorage.getItem("token")== undefined){
        navigate('/search')
    }
})
   function submit (){
    axios.post(
        api+"/api/posts",{
            title,
            location,
            description,
            date,
            company,
            user_id: localStorage.getItem('userId')
        },{
            headers: {
                'Authorization': `Token ${localStorage.getItem("token")}`,
            }
        }
    ).then(res=>{
        if (res.status==201 || res.status==200){
            alert("job post created")
            navigate('/search')
        }else{
            alert('internal server error')
        }
    })
   }


    return(
        <div className='container'>
        <img src={Image} class="img"/>
        <hr/>
        <h3>New Post</h3>
        <label>Title</label>
        <input placeholder='title' onChange={handleTitle} />
       <div className='row'>
        <div className='column'>
        <label>Date</label>
        <input placeholder='Date' onChange={handleDate}/>
        </div>
        
        <div className='column'>
        <label>Location</label>
        <input placeholder='location' onChange={handleLocation}/>
        </div>
       </div>
       <label>Company</label>
        <input placeholder='Company Name' onChange={handleCompany}/>
        <label>Description</label>
        <textarea className='textarea' placeholder='description'  rows="100" onChange={handleDesc}/>
        <button className='button button-black' onClick={submit} >SUBMIT</button>
        </div>
    )
}