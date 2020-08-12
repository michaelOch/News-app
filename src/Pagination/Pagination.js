import React from 'react';

import './Pagination.css';

const Pagination = ({ page, pageCount, handlePage }) => {
    const handlePrev = () => {
        if(page > 1) {
            handlePage(page - 1);
        }
    }

    const handleNext = () => {
        if(page < pageCount) {
            handlePage(page + 1);
        }
    }

    return (
        <div className="pagination-container">
            <button type="button" className="btn prev-btn" onClick={() => handlePrev()} disabled={page === 1 ? true : false}>Prev</button>
            <button type="button" className="btn next-btn" onClick={() => handleNext()} disabled={page === pageCount ? true : false}>Next</button>
        </div>
    )
}

export default Pagination;
