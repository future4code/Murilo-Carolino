import { useRequestData } from "../../hooks/useRequestData"
import { GlobalContext } from "./GobalContext"

const GlobalState = ({children}) => {
    const [users, requestUsers] = useRequestData([], "https://case-cubo-maryam.herokuapp.com/user/all")

    const states = { users }
    const requests = { requestUsers }

    return (
        <GlobalContext.Provider value={{ states, requests }}>
            {children}
        </GlobalContext.Provider>
    )

}

export default GlobalState