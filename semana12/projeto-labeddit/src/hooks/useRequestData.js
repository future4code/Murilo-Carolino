import axios from "axios"
import { useEffect, useState } from "react"



const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)
    const headers = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }

    useEffect(() => {
        axios
        .get(url, headers)
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            alert("Você não tem permissão para acessar essa seção!")
            console.log(err.response)
        })
    }, [url, data])

    return data
}

export default useRequestData