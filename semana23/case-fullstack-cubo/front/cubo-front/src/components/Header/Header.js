import axios from "axios"
import { useContext } from "react"
import { useForm } from "../../hooks/useForm"
import { Button, FormContainer, HeaderContainer, Input } from "./styled"
import {GlobalContext} from "../../contexts/global/GobalContext"

const Header = () => {

    const { requests } = useContext(GlobalContext)

    const initialForm = {
        name: "",
        lastName: "",
        participation: ""
    }

    const sendForm = (event) => {
        event.preventDefault()

        const {name, lastName, participation} = form
        const body = {
            name: name,
            lastName: lastName,
            participation: Number(participation)
        }

        axios
        .post("https://case-cubo-maryam.herokuapp.com/user/create", body)
        .then((res) => {
            clear()
            requests.requestUsers()
            alert(res.data.message)
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    const [form, onChange, clear] = useForm(initialForm)

    return (
        <HeaderContainer>
            <FormContainer onSubmit={sendForm}>
                <Input name="name" 
                    placeholder="Name"
                    value={form.name}
                    onChange={onChange}/>
                <Input name="lastName" 
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={onChange}/>
                <Input name="participation" 
                    placeholder="Participation"
                    value={form.participation}
                    onChange={onChange}/>
                <Button type="submit">
                    SEND
                </Button>
            </FormContainer>
        </HeaderContainer>
    )
}

export default Header