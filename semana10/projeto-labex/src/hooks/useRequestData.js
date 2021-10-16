import axios from "axios";
import { useState, useEffect } from "react";

const useRequestData = (url, initialState) => {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        
        axios
        .get(url)
        .then((res) => {
            console.log(res.data.trips)
            setData(res.data.trips)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }, [url])

    return data
}

export default useRequestData