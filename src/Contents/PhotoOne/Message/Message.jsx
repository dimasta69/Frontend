import React, { useState } from "react";
import axios from "axios";
import './Message.css';

const axiosInstance = axios.create({
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': 'Token ' + localStorage.getItem('token')
    }
  });

const Message = ({id, buttonReply, SetReply, buttonChange, SetChange}) => {
    const [message, setMessage] = useState("");

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const handleChange1 = (event) => {
        setMessage(event.target.value);
    };

    const handleSend = () => {
        const formData = new FormData();
        formData.append('photo_id', id);
        formData.append('text', message);
        if(buttonReply != 0)
        {
            formData.append('reply_id', buttonReply.id)
        }

        axiosInstance.post("/core_api/comments/", formData)
            .then(response => {
                window.location.reload();
            }
            ).catch(error => {
                console.error(error);
            });
    };

    const changeSend = () => {
        const formData = new FormData();
    formData.append('text', document.getElementById('myTextarea').value);        
    const Url = '/core_api/comment/' + buttonChange.id + '/';
            
        axiosInstance.put(Url, formData)
            .then(response => {
                window.location.reload();
            }
            ).catch(error => {
                console.error(error);
            });
    };


if (buttonChange.id == 0)
{
    if(buttonReply.name_reply != 0){
        return (
            <div>
                <div className="reply_1">
                    <p className="reply">Ответ на комментарий {buttonReply.name_reply}</p>
                    <button className="reply_button" onClick={() => SetReply(0,0)}></button>
                </div>
                    <div className="messages">
                        <textarea type='text' name="messages" onChange={handleChange} />
                        <button onClick={handleSend}></button>
                    </div>
                </div>
            
        );
    }
    else if(buttonReply){
        return (
            <div className="messages">
                <textarea type='text' name="messages" onChange={handleChange} />
                <button onClick={handleSend}></button>
            </div>
        );
    }
}
else {
        return (
            <div>
                <div className="reply_1">
                    <p className="reply">Изменение комментария:</p> 
                    <button className="reply_button" onClick={() => SetChange(0,0)}></button>
                </div>
                    <div className="messages">
                        <textarea type='text' name="messages" defaultValue={buttonChange.text} id="myTextarea"/>
                        <button onClick={changeSend}></button>
                    </div>
                </div>
        );
}
}

export default Message;