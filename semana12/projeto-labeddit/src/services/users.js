import axios from "axios";
import { baseURL } from "../constants/urls"
import { goToFeed } from "../routes/coordinator"

export const login = (body, clear, history, setRightButtonText) => {
    axios
    .post(`${baseURL}/users/login`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeed(history)
        setRightButtonText("Logout")
    })
    .catch((err) => {
        alert(err.response.data)
    })
}

export const signUp = (body, clear, history, setRightButtonText) => {
    axios
    .post(`${baseURL}/users/signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeed(history)
        setRightButtonText("Logout")
    })
    .catch((err) => {
        alert(err.response.data)
    })
}