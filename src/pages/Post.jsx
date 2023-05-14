
import { LoremIpsum } from "lorem-ipsum";
import Image from "../assets/bulb_4.jpg";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import { Audio } from  'react-loader-spinner'


export default function Post(){
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });
  const [title, setTitle]= useState("Full Stack Developer");
  const [location, setLocation]= useState('London , United Kingdom')
  const [date, setDate]= useState('10.12.1998');
  const [company, setCompany]= useState("Encrylatex")
  const [checker, setChecker]= useState(false);
  const [isLoading, setIsLoading]= useState(false);
  const [description, setDescription]= useState(lorem.generateParagraphs(4))
  let { id } = useParams();
  const navigate = useNavigate();
  let api= "https://backend.ultimatejobs.co"

  function apply (){
    setIsLoading(true)
    axios.post(
      api+"/api/apply",{
        user_id: localStorage.getItem("userId"),
        post_id: id
      },{  headers: {
        'Authorization': `Token ${localStorage.getItem("token")}`
    }}
    ).then(res=>{
      if (res.status==200 || res.status==201){
        
  
        alert("applied to "+title+ " at "+ company)
        
        navigate("/search")
      }else if (res.status= 400 || res.status==401){
        alert("you need to login first")
      }
      setIsLoading(false)
    })
  }

  useEffect(()=>{
   if (checker== false)
   {
    setIsLoading(true)
    axios.get(
      api+"/api/posts/"+id,
    {  headers: {
        'Authorization': `Token ${localStorage.getItem("token")}`
    }}
    ).then(res=>{
      setTitle(res.data["post"]["title"])
      setLocation(res.data["post"]["location"])
      setDate(res.data["post"]["date"])
      setDescription(res.data["post"]["description"])
      setCompany(res.data["post"]["company"])
      setIsLoading(false)
    })

  setChecker(true)
  }
  })
    return (
        <div class="container">
          {
            isLoading==false?
            <><img className="img" src={Image}/>
            <hr />
            <h2>Job title: <a>{title}</a></h2>
            <h5>Company: {company}</h5>
            <h5>Location: {location}</h5>
            <h6>Date: {date}</h6>
       <p>
        {description}
       </p>
       <button class="button button-black" onClick={apply}>APPLY</button></>
            :
            <Audio
    height = "200"
    width = "200"
    radius = "9"
    color = "#ceba52"
    ariaLabel = 'three-dots-loading'     
    wrapperStyle
    wrapperClass
  />
          }
            
        </div>
    )
}