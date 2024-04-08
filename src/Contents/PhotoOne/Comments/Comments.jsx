import React, { useState, useEffect } from "react"; 
import axios from 'axios'; 
import { useParams } from 'react-router-dom'; 

import './Comments.css';
import Comment from "./Comment/Comment";

const Comments = ({id, SetReply, SetChange, dataFromBackend, setDataFromBackend, page}) => {
    let Url = 'http://127.0.0.1:8000/core_api/comments/?photo_id=' + id + '&page=' + page; 
    useEffect(() => {
        axios.get(Url)
            .then(response => {
                setDataFromBackend(response.data)
            }).catch(error => {
                console.error(error);
            });
    }, [Url]);

    if (!dataFromBackend) {
        return <div className="loading"></div>;
    }

    let arr = [];

    for (let com of dataFromBackend.results) {
        if (arr.includes(com)) {
            for (let scom of dataFromBackend.results) {
                if (scom.reply_id == com.id) {
                    arr.push(scom);
                }
            }
            continue;
        }
        else {
            arr.push(com);

            for (let scom of dataFromBackend.results) {
                if (scom.reply_id == com.id) {
                    arr.push(scom);
                }
            }
        }
    }
        
    return (
        <div className="comments">
             {arr.map((item) => {
                let rl = 'http://localhost:3000/photo/' + item.id;
                if (item.reply_id == null) {
                return (
                    
                    <div  style={{ textDecoration: 'none', 'margin-top': '20px' }} href={rl}>
                        <Comment data={item}  user_id={localStorage.getItem('user_id')} reply = {1} SetReply={SetReply} SetChange={SetChange}/>
                    </div>
                );
                }
                else {
                    return (
                    
                        <div  style={{ textDecoration: 'none', 'padding-left': '25px', 'margin-top': '20px'}} href={rl}>
                            <Comment data={item} user_id={localStorage.getItem('user_id')} SetChange={SetChange}/> 
                        </div>
                        
                    );
                }
            })}
        </div>
    )
}

export default Comments;