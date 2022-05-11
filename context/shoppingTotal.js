import React,  { createContext, useState , useContext, useEffect} from "react"
import getCartLength from "../services/getCartLength"

export const ShoppingContext = createContext({})

export const ShoppingContextProvider = ({ children }) => {

    const [totalLength, setTotalLength] = useState(0)

    useEffect(() => {
        setTotalLength(getCartLength())
    }, [])

    return (
        <ShoppingContext.Provider value={[totalLength, setTotalLength]}>
            {children}
        </ShoppingContext.Provider>
    )
}

export function useTotalLengthCart(){
    return useContext(ShoppingContext)
}