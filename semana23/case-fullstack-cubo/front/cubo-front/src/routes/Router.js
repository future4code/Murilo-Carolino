import { BrowserRouter, Route, Routes } from "react-router-dom"
import ErrorPage from "../pages/Error/ErrorPage"
import Home from "../pages/Home/Home"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router