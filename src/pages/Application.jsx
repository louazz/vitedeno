
import axios from "axios";
import "../App.css";
import Image from "../assets/bulb_3.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Application() {
    const api = "https://backend.ultimatejobs.co"
    const [data, setData] = useState([])
    const [res, setRes]= useState(data);
    const [checker, setChecker]=useState(false)
    let navigate= useNavigate();
    const handleChange=(e)=>{
        if (e.target.value == "") {
            setRes(data)
        } else {
            setRes(data.filter(item => item.ID.toLowerCase().includes(e.target.value.toLowerCase())))
        }
    }
    useEffect(()=>{
        if (localStorage.getItem("token")== undefined){
            navigate('/search')
        }
        if (checker== false){

        
        axios.get(
            api+ "/api/apply/user/"+ localStorage.getItem("userId"), {
                headers:{
                    "Authorization":  `Token ${localStorage.getItem("token")}`,
                }
            }).then(res=>{
                if (res.status== 201 || res.status== 200){
                    
                    setData(res.data.app)
                    setRes(res.data.app)
                    setChecker(true)
                }else{
                    alert("internal server error")
                }
        })}
    })
    return (
        <div className="container">
            <img className="img" src={Image} />
            <hr />
            <label>Search</label>
            <div className="row">

                <div className="column">
                    <input placeholder="Search" onChange={handleChange}/>
                </div>
                <div className="column" >
                    <button className="button button-black" >Search</button>
                </div>
            </div>
            <hr />
    
            <table>
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> post </th>
                        <th> applicant </th>
                    </tr>
                </thead>
                <tbody>
                    {res.map(item => 
                       <tr>
                            <td>{item._id}</td>
                            <td><a onClick={()=>{navigate('/post/'+item.post_id)}}>{item.post_id}</a></td>
                            <td><a onClick={()=>{navigate('/view/'+item.user_id)}}>{item.user_id}</a></td>
                        </tr>
                    )}

                </tbody>
            </table>

        </div>
    )
}