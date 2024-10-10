import { createContext, useState, useContext } from "react"

const stateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {}
})


// eslint-disable-next-line react/prop-types
const ContextProvider = ({children}) => {
    const [user, setUser] = useState({})
    // const [token, _setToken] = useState(234234)
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'))

    const setToken = (token) =>{
        _setToken(token)
        if(token){
            localStorage.setItem('ACCESS_TOKEN',token)
        }else{
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }
  return (
    <stateContext.Provider value={{user,setUser,token,setToken}}>
        {children}
    </stateContext.Provider>
  )
}

export default ContextProvider

export const useStateContext = () => useContext(stateContext)