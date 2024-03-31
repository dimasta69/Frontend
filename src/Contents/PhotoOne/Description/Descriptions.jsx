import React from "react";

import './Descriptions.css';

const Descriptions = ({data}) => {
    return (
        <div className="descriptions">
            {data.description}
        </div>
    )
}

export default Descriptions;