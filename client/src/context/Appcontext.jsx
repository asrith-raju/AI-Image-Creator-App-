import axios from "axios";
import { createContext,useEffect,useState} from "react";
import {toast} from 'react-toastify'
import axios from "axios";

export const AppContext = createContext()

const AppContextProvider = (props)=>{
    const [user, setuser] = useState(null)
    const [showLogin, setshowLogin] = useState(false)
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [credit, setCredit] = useState(false)
    


    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const loadCreditdata = async()=>{
        try {
            const {data}= await axios.get(backendUrl+'/api/user/credits',{
                headers:{ token}
            })
            if(data.success){
                setCredit(data.credits)
                setuser(data.user)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if(token){
            loadCreditdata()
        }
    })
    
    const value={
        user,setuser,showLogin,setshowLogin, backendUrl,token,setToken,credit,setCredit,loadCreditdata
    }

    return(
        <AppContext.Provider value={value}>
           {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider