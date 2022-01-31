import { useState } from "react"

export const useForm = (initialForm) => {

    const [form, setForm] = useState(initialForm)
    const onChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    const clear = () => {
        setForm(initialForm)
    }

    return [form, onChange, clear]
}