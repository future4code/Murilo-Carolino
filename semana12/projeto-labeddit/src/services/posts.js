import axios from "axios";
import { baseURL } from "../constants/urls"

export const createPost = (body, clear, setIsLoading) => {
    const headers = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }
    setIsLoading(true)
    axios
    .post(`${baseURL}/posts`, body, headers)
    .then((res) => {
        setIsLoading(false)
        alert(res.data)
        clear()
    })
    .catch((err) => {
        setIsLoading(false)
        alert(err.response.data.message + JSON.stringify(err.response.data.errors))
    })
}

export const createComment = (body, clear, id, setIsLoading) => {
    const headers = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }

    setIsLoading(true)
    axios
    .post(`${baseURL}/posts/${id}/comments`, body, headers)
    .then((res) => {
        setIsLoading(false)
        alert(res.data)
        clear()
    })
    .catch((err) => {
        setIsLoading(false)
        alert(err.response.data.message + JSON.stringify(err.response.data.errors))
    })
}