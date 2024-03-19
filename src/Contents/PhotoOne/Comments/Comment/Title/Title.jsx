import React from "react";

import './Title.css';

import Time from "./Time/Time";
import NameProf from "./NameProf/NameProf";

const Title = () => {
    return (
        <div className="title1">
            <Time />
            <NameProf />
        </div>
    )
}

export default Title;