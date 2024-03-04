import React from "react";

import "./Pagination.css";

const Pagination = () => {
    return (
        <div className="pagination">
            <a href="#">«</a>
            <a href="#">1</a>
            <a href="#" class="active">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
            <a href="#">»</a>
        </div>
    )
}

export default Pagination;