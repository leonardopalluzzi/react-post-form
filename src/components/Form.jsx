export default function Form() {
    return (
        <div className="container" data-bs-theme={'dark'}>
            <div className="form">
                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Author</label>
                    <input
                        type="text"
                        className="form-control"
                        name="author"
                        id="author"
                        aria-describedby="helpId"
                        placeholder="author"
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
                    />
                    <small id="helpId" className="form-text text-muted">Insert Description</small>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="radio" name="public" id="public" />
                    <label class="form-check-label" htmlFor=""> Public </label>
                </div>
                <div class="form-check">
                    <input
                        class="form-check-input"
                        type="radio"
                        name="public"
                        id="public"
                    />
                    <label class="form-check-label" htmlFor="public">
                        Draft
                    </label>
                </div>
            </div>
        </div>
    )
}