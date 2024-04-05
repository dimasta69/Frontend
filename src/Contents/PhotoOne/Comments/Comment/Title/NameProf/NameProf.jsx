import React from "react";

import './NameProf.css';


const NameProf = ({user}) => {
    return (
        <div className="nameprof">
            {user}
        </div>
    )
}

export default NameProf;