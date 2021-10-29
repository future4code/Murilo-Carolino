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
            alert("Algo deu errado, atualize a página!")
        })
    }, [url])

    return data
}

export default useRequestData