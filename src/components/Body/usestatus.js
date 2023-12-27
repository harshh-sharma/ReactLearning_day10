import { useEffect, useState } from "react"

const useOnline = () => {
    const [onlineStatus,setOnlineStatus] = useState(true);
    const status = () => {
        window.addEventListener('offline',()=>{
            setOnlineStatus(false);
        })

        window.addEventListener('online',()=>{
            setOnlineStatus(true);
        })
        
    }
    useEffect(()=>{
       status();
    },[]);
    return onlineStatus;
}

export default useOnline ;