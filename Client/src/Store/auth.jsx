import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user,setUser] = useState("");
    const [isLoading,setIsLoading] = useState(true);
    const [services,setService] = useState([]);
    const authorizationToken = `Bearer ${token}` ; 

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    };
    // login value true / false to toggle the login, register and logout
    let isLoggedIn = !!token;

    // tackling the logout functionality
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    };

    // jwt authentication - to get the currentky loggedIN user data
    
    const userAuthentication = async ()=>{
        try{
            setIsLoading(true);
            const response = await fetch(`http://localhost:5000/api/Auth/user`,{
                method: "GET",
                headers: {
                    Authorization: authorizationToken ,
                },
            });
            if(response.ok){
                const data = await response.json();
                console.log( "userDATA" , data.userData);
                setUser(data.userData);
                setIsLoading(false);
            }else{
                console.log("error fetching user data");
                setIsLoading(false);
            }
        }catch(error){
            console.log("error fetching user data");
        }
    };

    // to fetch the services data from the database
      const getServices = async ()=>{
        try{
            const response = await fetch(`http://localhost:5000/api/data/service`,
            {
                method:"GET",
            });
            if(response.ok){
                const data = await response.json();
                console.log(data.msg);
                setService(data.msg);
            }
        }catch(error){
            console.log("services-frontend",error);
        }
      };
    useEffect(()=>{
        getServices();
        userAuthentication();
    },[]);

    return (<AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser , user , services , authorizationToken , isLoading}} >
        {children}
    </AuthContext.Provider>
    )};

export const useAuth = () => {
    return useContext(AuthContext)
};