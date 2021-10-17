import axios from "axios";
import { useState, useEffect } from "react";

const useRequestData = (url, initialState) => {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        
        axios
        .get(url)
        .then((res) => {
            setData(res.data.trips)
        })
        .catch((err) => {
            console.log(err.response.message)
        })
    }, [url])

    return data
}

export default useRequestData