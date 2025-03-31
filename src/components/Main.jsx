import { useState } from 'react'
import Form from './Form'

export default function Main() {
    const [formData, setFromData] = useState({
        author: '',
        title: '',
        body: '',
        public: ''
    })

    function handleFormData(e) {
        const type = e.target.type;
        const value = type == 'checkbox' ? e.target.checked : e.target.value;
        const key = e.target.name;

        setFromData((formData) => ({
            ...formData,
            [key]: value
        }))

    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData);

        fetch('', {
            method: 'POST',
            body: JSON.stringify(formData)
        })


    }
    return (
        <Form handleSubmit={handleSubmit} formData={formData} handleFormData={handleFormData} />
    )
}