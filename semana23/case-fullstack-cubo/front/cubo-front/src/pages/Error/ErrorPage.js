import { useNavigate } from "react-router-dom"
import { goToHome } from "../../routes/coordinator"
import { ErrorPageContainer } from "./styled"

const ErrorPage = () => {

    const navigate = useNavigate()

    return (
        <ErrorPageContainer>
            <h1>Page not found.</h1>
            <button onClick={() => goToHome(navigate)}>Home</button>
        </ErrorPageContainer>
    )
}

export default ErrorPage