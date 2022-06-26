import React, {useState} from 'react'
import defaultUser from "../data";

// create the context
const UserContext = React.createContext()

// create a provider component
function UserProvider({ children }) {
    // the value prop of the provider will be our context data
    // this value will be available to child components of this provider
    const [user, setUser] = useState(null)
    
    function handleLogin() {
      if (user) {
        setUser(null);
      } else {
        setUser(defaultUser);
      }
    }

  return (
    <UserContext.Provider value={{ user, setUser, handleLogin }}>
      {children}
    </UserContext.Provider>
  )
}

  export { UserContext, UserProvider }
