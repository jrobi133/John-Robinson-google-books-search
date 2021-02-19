import React from "react";

function BookSearch({ handleInputChange, i, handleFormSubmit }) {
    return (
        <div className="container">
            <div>
                <h3>Book Search</h3>
            </div>
            <form>
                <div className="form-group">
                    <label htmlFor="searchInput">Books</label>
                    <input type="text" className="form-control" id="searchInput" value={i} name='i' onChange={handleInputChange}/>
                </div>
                <button type="submit" className='btn btn-success' onClick={handleFormSubmit}>Search</button>
            </form>
        </div>
    )
}

export default BookSearch;