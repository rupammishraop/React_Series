import { useContext } from "react";
import { createContext } from "react";


export const UserContext = createContext({
    user : "",
    setUser : ()=>{}
});

export const UserContextProvider = UserContext.Provider ;

export default function useUserContext(){
    return useContext(UserContext);
}