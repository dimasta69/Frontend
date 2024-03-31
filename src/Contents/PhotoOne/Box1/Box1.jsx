import React from "react";

import "./Box1.css";


const Box1 = ({data}) => {
    const dateTime = new Date(data.publicated_at);

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
        <div className="box1">
            <p>{data.user.username}</p>
            <p style={{float: "right"}}>{formattedDate} {formattedTime}</p>
        </div>
    )
}

export default Box1;