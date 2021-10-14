import React from "react";
import { useHistory } from "react-router";

function LoginPage() {

    const history = useHistory()

    const goToAdminPage = () => {
        history.push("/admin/trips/list")
    }

    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            <h1>Login</h1>
            <button onClick={goToAdminPage}>Sign in</button>
            <button onClick={goBack}>Voltar para Home</button>
        </div>
    )
}

export default LoginPage