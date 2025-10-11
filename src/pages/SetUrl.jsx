import { useEffect, useState } from "react";
import "../css/SetUrl.css";


export default function SetUrl (){
    // const [url , setUrl ] = useState({anime : "" , other : ""}) use context
    useEffect(() => {
        console.log(url)
    } , [url])

    return (
        <>
        <label>Enter URL for Anime : <input type="url" onChange={(e) => setUrl({...url , anime : e.target.value})} /></label>
        <label>Enter URL for Other :<input type="url" onChange={(e) => setUrl({...url , other : e.target.value})} /></label>
        <label>Anime : {url.anime}</label>
         <label>Others : {url.other}</label>
        </>
    )
}