import React from "react";

const Pagination = ({currentPage, totalPages, onPageChange}) => (

    <div className="flex justify-center my-4">
        <button
        onClick={() => 
        onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-gray-300 text-black p-2 rounded-l-lg disabled:opacity-50"
        >
            Previous
        </button>

        <span className="px-4 py-2">
            {currentPage} / {totalPages}
        </span>

        <button
        onClick={() => 
        onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-gray-300 text-black p-2 rounded-r-lg disabled:opacity-50"
        >
            Next
        </button>
    </div>
);


export default Pagination
