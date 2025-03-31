import { useState } from 'react'
import Form from './Form'

export default function Main() {
    const [formData, setFromData] = useState({
        author: '',
        title: '',
        body: '',
        public: false
    })

    const [error, setError] = useState({
        author: '',
        title: '',
        body: '',
        public: false
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

        const numbRegex = /\d/; //regex
        console.log(numbRegex.test(2));


        if (formData.author.trim().length < 2 || numbRegex.test(formData.author)) {
            errorDetect.author = "Inserire il nome dell'autore"
        }

        if (formData.title.length < 3) {
            errorDetect.title = "Inserire un titolo valido"
        }

        if (formData.body.length < 3) {
            errorDetect.body = "Inserire una descrizione valida"
        }

        setError(errorDetect)

        return Object.values(errorDetect).every((err) => err === '');
    }

    function handleSubmit(e) {
        console.log(typeof formData.author);

        e.preventDefault()
        console.log(formData);

        console.log(errorCatch());

        const errorFlag = errorCatch();

        if (errorFlag) {
            console.log('invio dei dati');

            fetch('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
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
        <Form error={error} handleSubmit={handleSubmit} formData={formData} handleFormData={handleFormData} />
    )
}