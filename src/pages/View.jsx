import axios from 'axios';
import Doc from "../components/Doc.tsx";
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";

export default function View (){
    const [fileUrl, setFileUrl]= useState(null);
    const [checker, setChecker]= useState(false);
    const api = "http://64.226.102.153:8000"
    const [seed, setSeed]= useState(1)
    let { id } = useParams();
    useEffect(()=>{
        if (checker == false){
        axios.get(
            api+'/api/resume/'+id, {
                responseType: "arraybuffer",
                headers:{
                    "Content-Type":  "multipart/form-data",
                "Authorization":  `Token ${localStorage.getItem("token")}`,
                }
            }
        ).then(res=>{
           let file= new Blob([res.data])
            var fileUrl = URL.createObjectURL(file);
            setFileUrl(fileUrl)
            setSeed(Math.random())
            setChecker(true)
        })
    }
    })
    return(
        <div class="container">

 {fileUrl!=null? <Doc fileUrl={fileUrl} key={seed} />: <></>}
        </div>
    )
}