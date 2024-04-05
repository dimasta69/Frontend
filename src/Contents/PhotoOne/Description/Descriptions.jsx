import React from "react";
import './Descriptions.css';

const Descriptions = ({ data, avt }) => {


    if (data.user.id == localStorage.getItem('user_id'))
    {
        return (
            <div className="descriptions">
                <textarea className="res" defaultValue={data.description}  id='changeDesc'></textarea>
            </div>
        );
    }
    else {
        return (
            <div className="descriptions">
                {data.description}
            </div>
        );
    }
};

export default Descriptions;