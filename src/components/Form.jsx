export default function Form() {
    return (
        <div className="container">
            <div className="form">
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="author"
                        id="author"
                        aria-describedby="helpId"
                        placeholder="author"
                    />
                    <small id="helpId" className="form-text text-muted">Help text</small>
                </div>

            </div>
        </div>
    )
}