import React from "react";
import "./StatusPhoto.css"



const StatusPhoto = () => {
    return (
        <div className="statusPhoto">
            <a href="http://localhost:3000/my_photo/status/Published" >опубликованые</a>
            <a href="http://localhost:3000/my_photo/status/Moderation" >на модерации</a>
            <a href="http://localhost:3000/my_photo/status/Delete" >на удалении</a>
            <a href="http://localhost:3000/my_photo/status/Reject" >отклененные</a>
        </div>
    );
}

export default StatusPhoto;