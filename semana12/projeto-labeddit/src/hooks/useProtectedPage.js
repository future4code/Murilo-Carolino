import { useLayoutEffect } from "react"
import { useHistory } from "react-router"
import { goToLogin } from "../routes/coordinator"


const useProtectedPage = () => {
    const history = useHistory()

    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            goToLogin(history)
        }
    }, [history])
}

export default useProtectedPage