
import Image from "../assets/bulb_3.jpg";
import '../App.css'
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Profile() {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState();
    const [checker, setChecker]= useState(false)
    const [hasProfile, setHasProfile]= useState(false)
    const [Pid, setPId]= useState(null)
    const api = "http://64.226.102.153:8000"
    let { id } = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
            if (localStorage.getItem("token")== undefined){
                navigate('/search')
            }
        
        if (checker == false){
            axios.get(
                api+"/api/profile/"+id, {
                    headers: {
                        'Authorization': `Token ${localStorage.getItem("token")}`,
                    }
                }
            ).then(res=>{
                if (res.status= 200){
                    setPId(res.data["profile"]['_id']);
                    setFullname(res.data["profile"]['fullname']);
                    setDescription(res.data["profile"]["description"]);
                    setEmail(res.data["profile"]["email"])
                    setHasProfile(true)
                setChecker(true)
                }else{
                    setHasProfile(false)
                }
            })
        }
    })

    //handle submit function to update the profile or create it depending on hasProfile variable
    function submit (){
        if (hasProfile==true){
            console.log(Pid)
           // console.log(localStorage.getItem('userId'))
            axios.patch(
                api+"/api/profile/"+Pid,{
                    fullname: fullname,
                    description: description,
                    email: email,
                    user_id: localStorage.getItem('userId')
                }, {
                    headers:{
                        "Authorization":  `Token ${localStorage.getItem("token")}`,
                    }
                }
            ).then(res=>{
                if (res.status==200){
                    alert("profile updated successfully")
                }else{
                    alert("internal server error")
                }
            })
        }else{
            axios.post(
                api+"/api/profile",{
                    fullname: fullname,
                    description: description,
                    email: email,
                    user_id: localStorage.getItem('userId')
                }, {
                    headers:{
                        "Authorization":  `Token ${localStorage.getItem("token")}`,
                    }
                }
            ).then(res=>{
                if (res.status==201){
                    alert("profile created successfully")
                }else{
                    alert("internal server error")
                }
            })
        }
    }


    const handleUpload = (e) => {
        setFile(e.target.files[0]);
        const formData = new FormData();
        formData.append('key', file);
        if (file != undefined){
        axios.post(
            api + '/upload/' + localStorage.getItem("userId"), formData, {
            responseType: "arraybuffer",
            headers: {
                'Authorization': `Token ${localStorage.getItem("token")}`,
                "Content-Type": "multipart/form-data"
               
            }
        }
        ).then(res => {
            if (res.status == 200) {
                alert("uploaded file")
            }
        })            
        .catch(function () {
            alert("check your file")
        })}else{
            handleUpload(e)
        }
    }
   const handleName=(e)=>{
    setFullname(e.target.value)
   }
   const handleEmail=(e)=>{
    setEmail(e.target.value)
   }
   const handleDesc= (e)=>{
    setDescription(e.target.value)
   }
    return (
        <div className="container">
            <img className="img" src={Image} />
            <center>
                <hr />
                <h4>Name: {fullname}</h4>
                <p>Email: {email} </p>
                <hr />
            </center>

            <label>Full Name</label>
            <input placeholder="Full Name" value={fullname} onChange={handleName} />
            <label>Email</label>
            <input placeholder="Email" value={email} onChange={handleEmail} />
            <label>Resume</label>
            <input type="file" id="key" name="key" accept="application/pdf" onChange={handleUpload} />
            <label>Description</label>
            <textarea placeholder="Describe your professional experience" value={description} onChange={handleDesc}/>

            <br />
            <div class="row">
                <div className="column">
                    <button className="button button-black" onClick={submit} >Save</button>
                </div>
                <div class="column">
                    <input type="checkbox" id="confirmField" />
                    <label class="label-inline" for="confirmField">Agree to <a>terms and conditions</a></label>
                </div>

            </div>

        </div>
    )
}