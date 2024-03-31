import React from "react";

import "./User.css"

const User = ({name, time}) => {
    const dateTime = new Date(time);

    dateTime.setTime(dateTime.getTime() + dateTime.getTimezoneOffset()*60*1000);

    // Форматируем дату и время в нужный вид
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
        <div className="user">
            <p>{name}</p>
            <p style={{float: "right"}}>{formattedDate} {formattedTime}</p>
        </div>
    )
}

export default User;