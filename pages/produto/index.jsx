import { useRouter } from "next/router";
import React, {useEffect} from "react"

const Produto = () => {
    const route = useRouter()

    useEffect(() => {
        route.push("/")
    },[route])

    
    return null
}

export default Produto;