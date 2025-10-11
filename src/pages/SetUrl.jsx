import { useContext, useEffect, useState } from "react";
import "../css/SetUrl.css";
import { MovieContext } from "../contexts/MovieContext";


export default function SetUrl (){
    const {url , setUrl } = useContext(MovieContext)
    const [ani , setAni] = useState("")
    const [oth , setOth] = useState("")
    
    const handleURL = () => {

        if (ani.trim() != "" && oth.trim() != "") {
            setUrl({...url , anime : ani , other : oth})
        }

    }

    return (
        <>

        <label>Enter URL Prefix for Anime : <input type="url" value={ani} onChange={(e) => setAni(e.target.value)} /></label>
        <label>Enter URL Prefix for Other :<input type="url" value={oth} onChange={(e) => setOth(e.target.value)} /></label>
        {url.anime == "" ? <></> : <label>Anime : {url.anime}</label>}
        {url.other == "" ? <></> : <label>Others : {url.other}</label>}
        <button onClick={handleURL} className="set-button">Set URL</button>

        </>
    )
}