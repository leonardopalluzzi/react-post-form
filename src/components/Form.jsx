export default function Form({ handleSubmit, formData, handleFormData, error, errDisplay }) {
    return (
        <div className="container py-5" data-bs-theme={'dark'}>
            <form method="POST" className="form" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Author</label>
                    <input
                        type="text"
                        className={`form-control ${error.author ? 'error' : ''}`}
                        name="author"
                        id="author"
                        aria-describedby="helpId"
                        placeholder="author"
                        value={formData.author}
                        onChange={handleFormData}
                    />
                    <small id="helpId" className={`form-text  ${error.author ? 'text-warning' : 'text-muted'}`}>{error.author ? error.author : 'Insert Author'}</small>
                </div>


                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className={`form-control ${error.title ? 'error' : ''}`}
                        name="title"
                        id="title"
                        aria-describedby="helpId"
                        placeholder="title"
                        value={formData.title}
                        onChange={handleFormData}
                    />
                    <small id="helpId" className={`form-text  ${error.title ? 'text-warning' : 'text-muted'}`}>{error.title ? error.title : 'Insert Title'}</small>
                </div>

                <div className="mb-3">
                    <label htmlFor="body" className="form-label">Description</label>
                    <textarea
                        type="text"
                        className={`form-control ${error.body ? 'error' : ''}`}
                        name="body"
                        id="body"
                        aria-describedby="helpId"
                        placeholder="body"
                        value={formData.body}
                        onChange={handleFormData}
                    />
                    <small id="helpId" className={`form-text  ${error.body ? 'text-warning' : 'text-muted'}`}>{error.body ? error.body : 'Insert Description'}</small>
                </div>

                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value={formData.public} id="public" name="public" onChange={handleFormData} />
                    <label className="form-check-label" htmlFor="public"> Public </label>
                </div>

                <button type="submit" className="btn btn-primary my-5">Submit</button>
                <span className={`${errDisplay.flag ? 'text-danger' : 'text-success'} d-block`}>{errDisplay.message}</span>
            </form>
        </div>
    )
}