import { useState } from "react"

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const handleInput = (event) => {
        const { name, value } = event.target
        setForm({...form, [name]: value})
    }

    const cleanInputs = () => {
        setForm(initialState)
    }

    return { form, handleInput, cleanInputs }
}

export default useForm