import { useState } from 'react'
import Form from './Form'

export default function Main() {
    const [formData, setFromData] = useState({
        author: '',
        title: '',
        body: '',
        public: ''
    })

    const [error, setError] = useState({
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

    function errorCatch() {
        const errorDetect = {
            author: '',
            title: '',
            body: '',
            public: ''
        }

        if (formData.author.trim().length < 2) {
            errorDetect.author = "Inserire il nome dell'autore"
        }

        if (formData.title.length < 3) {
            errorDetect.title = "Inserire un titolo valido"
        }

        if (formData.body.length < 3) {
            errorDetect.body = "Inserire una descrizione valida"
        }

        if (formData.public == '') {
            errorDetect.public = "Selezionare la visibilita del post"
        }

        setError(errorDetect)

        return Object.values(errorDetect).every((err) => err === '');
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData);

        console.log(errorCatch());

        const errorFlag = errorCatch();

        if (errorFlag) {
            fetch('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', {
                method: 'POST',
                body: JSON.stringify(formData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                })
                .catch(err => console.error(err))
        } else {
            console.log('errore');
        }

    }
    return (
        <Form handleSubmit={handleSubmit} formData={formData} handleFormData={handleFormData} />
    )
}