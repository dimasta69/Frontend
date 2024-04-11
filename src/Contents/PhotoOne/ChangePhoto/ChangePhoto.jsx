import React, { useState } from "react";
import "./ChangePhoto.css";

const ChangePhoto = ({ onFileChange, data, setPhoto }) => {
    const [fileName, setFileName] = useState(""); 

    const handleFileChange = (event) => {
        const fileInput = document.getElementById('fileInput');
        const fileNameElement = document.getElementById('fileName');
        if (!fileNameElement){
            return(<div></div>)
        }  
        fileNameElement.textContent = fileInput.files[0].name;
        
        const file = event.target.files[0];
        setPhoto(file);
        setFileName(file.name);
    };

    return (
        <div>
            <div className="change_photo">
            <input type="file" id="fileInput" onChange={handleFileChange} accept=".jpg, .jpeg, .png" />

            </div>
            <div className="title2">
                Изменить название:
                <input id='changeTitle' type="text" style={{ 'backgroundColor': '#161615', 'border': 'solid #272726', 'margin-left': '3px', 'color': 'white' }} defaultValue={data.title} >
                </input>
            </div>
        </div>
    );
};

export default ChangePhoto;