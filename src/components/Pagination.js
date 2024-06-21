    import React from "react";

    const Pagination = ({
    page,
    setPage,
    totalPages,
    perPage,
    totalResults,
    navigate,
    getSortByFromURL,
    getSearchTermFromURL,
    }) => {
    const generatePageNumbers = () => {
        const currentPage = page;
        let startPage = currentPage - 1;
        if (startPage < 1) startPage = 1;
        let endPage = startPage + 2;
        if (endPage > totalPages) endPage = totalPages;
        const pages = [];
        for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
        }
        return pages;
    };

    

    return (
        <div className="d-flex justify-content-center my-3">
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
            <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                <button
                className="page-link"
                onClick={() => {
                    if (page > 1) {
                    navigate(
                        `?page=${page - 1}&sortBy=${getSortByFromURL(
                        window.location.search
                        )}&q=${getSearchTermFromURL(window.location.search)}`
                    );
                    }
                }}
                disabled={page === 1}
                >
                Previous
                </button>
            </li>
            {generatePageNumbers().map((pageNumber) => (
                <li
                key={pageNumber}
                className={`page-item ${pageNumber === page ? "active" : ""}`}
                >
                <button
                    className="page-link"
                    onClick={() => {
                    setPage(pageNumber);
                    navigate(
                        `?page=${pageNumber}&sortBy=${getSortByFromURL(
                        window.location.search
                        )}&q=${getSearchTermFromURL(window.location.search)}`
                    );
                    }}
                >
                    {pageNumber}
                </button>
                </li>
            ))}
            <li
                className={`page-item ${
                page * perPage >= totalResults ? "disabled" : ""
                }`}
            >
                <button
                className="page-link"
                onClick={() => {
                    if (page * perPage < totalResults) {
                    navigate(
                        `?page=${page + 1}&sortBy=${getSortByFromURL(
                        window.location.search
                        )}&q=${getSearchTermFromURL(window.location.search)}`
                    );
                    }
                }}
                disabled={page * perPage >= totalResults}
                >
                Next
                </button>
            </li>
            </ul>
        </nav>
        </div>
    );
    };

    export default Pagination;
