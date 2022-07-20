import { createContext, useContext, useState } from "react";

const userContext = createContext();
const userToggleContext = createContext();

export function useUserContext(){
    return useContext(userContext);
}
export function useUserToggleContext(){
    return useContext(userToggleContext);
}

export function UserProvider(props) {

    const [user, setUser] = useState(null)

    const cambiaLogin= () =>{
        if (user){
          setUser(null);
        }else{
          setUser({
            name:'Juan',
            email:'juantenaglia81296@gmail.com'
          })
        }
      }

    return (
        <userContext.Provider value={user}>
            <userToggleContext.Provider value={cambiaLogin}>
                {props.children}
            </userToggleContext.Provider>
        </userContext.Provider>
    );
}