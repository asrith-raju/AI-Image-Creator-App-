import { createContext,useState} from "react";

export const AppContext = createContext()

const AppContextProvider = (props)=>{
    const [user, setuser] = useState(null)
    const [showLogin, setshowLogin] = useState(false)
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [credit, setCredit] = useState(false)
    


    const backendUrl = import.meta.env.VITE_BACKEND_URL
    
    const value={
        user,setuser,showLogin,setshowLogin, backendUrl,token,setToken,credit,setCredit
    }

    return(
        <AppContext.Provider value={value}>
           {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider