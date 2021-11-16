import axios from "axios";
import { useState, useEffect } from "react";

const useRequestData = (url, initialState) => {
    const [data, setData] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios
        .get(url)
        .then((res) => {
            setData(res.data.trips)
            setIsLoading(false)
        })
        .catch((err) => {
            console.log(err.response.message)
            setIsLoading(false)
        })
    }, [url])

    return [data, isLoading]
}

export default useRequestData