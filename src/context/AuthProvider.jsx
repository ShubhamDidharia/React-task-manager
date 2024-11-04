import React, { createContext, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'
export const AuthContext=createContext()
import { useEffect } from 'react'

const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState(null)

    



    useEffect(() => {
        setLocalStorage()
        const {employees,admin}=getLocalStorage()
        setUserData({employees,admin})
    
        // console.log(userData)
    }, [])
    

    

  return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}

        </AuthContext.Provider>
   
    </div>
  )
}

export default AuthProvider