import React from "react";

import './Time.css';


const Time = ({time}) => {
    const dateTime = new Date(time);

    dateTime.setTime(dateTime.getTime() + dateTime.getTimezoneOffset()*60*1000);

    const formattedDate = dateTime.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    const formattedTime = dateTime.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false 
    });
    return (
        <div className="time">
            {formattedDate} {formattedTime}
        </div>
    )
}

export default Time;