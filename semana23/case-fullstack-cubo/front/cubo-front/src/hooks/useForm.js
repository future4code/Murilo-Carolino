import { useState } from "react"

export const useForm = (initialForm) => {

    const [form, setForm] = useState(initialForm)
    const onChange = (event, mask) => {
        if (mask) {
            setForm({
                ...form,
                [event.target.name]: mask(event.target.value)
            })
        } else {
            setForm({
                ...form,
                [event.target.name]: event.target.value
            })
        }
    }
    const clear = () => {
        setForm(initialForm)
    }

    return [form, onChange, clear]
}