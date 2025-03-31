export default function Form({ handleSubmit, formData, handleFormData }) {
    return (
        <div className="container py-5" data-bs-theme={'dark'}>
            <form method="POST" className="form" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Author</label>
                    <input
                        type="text"
                        className="form-control"
                        name="author"
                        id="author"
                        aria-describedby="helpId"
                        placeholder="author"
                        value={formData.author}
                        onChange={handleFormData}
                    />
                    <small id="helpId" className="form-text text-muted">insert Author</small>
                </div>


                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        id="title"
                        aria-describedby="helpId"
                        placeholder="title"
                        value={formData.title}
                        onChange={handleFormData}
                    />
                    <small id="helpId" className="form-text text-muted">Insert Title</small>
                </div>

                <div className="mb-3">
                    <label htmlFor="body" className="form-label">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        name="body"
                        id="body"
                        aria-describedby="helpId"
                        placeholder="body"
                        value={formData.body}
                        onChange={handleFormData}
                    />
                    <small id="helpId" className="form-text text-muted">Insert Description</small>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value={formData.public} id="public" name="public" onChange={handleFormData} />
                    <label class="form-check-label" for=""> Public </label>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}