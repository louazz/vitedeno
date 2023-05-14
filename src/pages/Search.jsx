import Image from "../assets/bulb_3.jpg"
import { useEffect, useState } from "react"
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Search() {
    const [data, setData] = useState([
    ])
    const [checker, setChecker]= useState(false);
    const [res, setRes]= useState(data);
    const api="https://backend.ultimatejobs.co";
    const navigate= useNavigate();
    const handleChange=(e)=>{
        if (e.target.value == "") {
            setRes(data)
        } else {
            setRes(data.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase())))
        }
    }
    useEffect(()=>{
        if(checker==false){
            axios.get (
                api+"/api/posts"
            ).then(res=>{
                if (res.status==201){
                    setData(res.data['posts'])
                    setRes(res.data["posts"])
                    setChecker(true)
                }else{
                    alert("internal server error")
                }
          
            })
        }
    })
    function apply(id){
        navigate("/post/"+id)
    }
    return (
        <>
            <div class="container">
                <div class="container">
                    <img src={Image} className="img" />
                    <div class="centered content-to-hide">
                        <h2>Browse current vacancies and apply <br/> through our awesome platform</h2>

                    </div>
                </div>
                <hr />
                <center>  <div class="row">
                    <div class="column column-50 column-offset-25 " >
                        <input placeholder="Search for Job By title" onChange={handleChange}/>
                    </div>
                    <div class="column" >
                        <button class="button button-black" >Search</button>
                    </div> </div>
                <hr />
              <h4>Search Results...</h4>
               <hr/>
                {res.map(item =>
                    <><div class="row">
                       
                       
                        <div class="column " >
                            <a> <h5> {item.title}</h5></a>
                        </div><div class="column ">
                            <p>{item.date}</p>
                        </div>
                    </div>
                        <div class="row">
                            <div class="column ">
                                <h6>{item.company}</h6>
                                <h6>{item.location}</h6>
                            </div>
                            <div class="column ">
                                <button class="button button-black button-outline " onClick={()=>{apply(item._id)}}>Apply</button>
                            </div>
                        </div>
                        <hr />
                    </>

                )}</center>
            </div>
        </>
    )
}