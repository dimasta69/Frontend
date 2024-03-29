import React from "react";

import "./Pagination.css";

const Pagination = ({ data, fetchData }) => {
    if (!data || !data.pagination) {
        return <div className="loading"></div>;
    }

    const { current_page, total_pages } = data.pagination;

    const handlePageClick = (page) => {
        fetchData(page);
    };

    const handleNextPageClick = () => {
        if (current_page < total_pages) {
            const nextPage = current_page + 1;
            handlePageClick(nextPage);
        }
    };

    const handlePrevPageClick = () => {
        if (current_page > 1) {
            const prevPage = current_page - 1;
            handlePageClick(prevPage);
        }
    };

    const renderPageNumbers = () => {
        const pages = [];
        let startPage = Math.max(1, current_page - 2);
        let endPage = Math.min(total_pages, startPage + 5);

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <a key={i} href="#" className={i === current_page ? "active" : ""} onClick={() => handlePageClick(i)}>
                    {i}
                </a>
            );
        }
        return pages;
    };

    return (
        <div className="pagination">
            <a href="#" onClick={handlePrevPageClick}>«</a>
            {renderPageNumbers()}
            {current_page < total_pages && <a href="#" onClick={handleNextPageClick}>»</a>}
        </div>
    );
};

export default Pagination;