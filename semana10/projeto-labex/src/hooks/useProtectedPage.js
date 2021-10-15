import { useEffect } from "react"
import { useHistory } from "react-router"


const useProtectedPage = () => {

    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (token === null) {
            alert('Você não tem permissão para entrar na área administrativa!')
            history.push('/login')
        }
    })

}

export default useProtectedPage