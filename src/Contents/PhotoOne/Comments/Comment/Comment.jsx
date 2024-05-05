import React from "react";

import './Comment.css';
import axios from 'axios'; 

import Text from "./Text/Text";
import Title from "./Title/Title";


const axiosInstance = axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + localStorage.getItem('token')
    }
  });

const Comment = ({data, user_id, reply, SetReply, SetChange, dataFromBackend}) => {
    const handleDeleteComment = () => {
        axiosInstance.delete('/core_api/comment/' + data.id)
          .then(response => {
            window.location.reload()
          })
          .catch(error => {
            console.error("Error deleting comment:", error);
          });
      };


    if (data.user.id == user_id)
    {
        return (
            <div className="comment">
                <Title data={data} handleDeleteComment={handleDeleteComment} reply={reply} SetReply={SetReply} SetChange={SetChange}/>
                <Text text={data.text}/>  
            </div>
        )
    }
    else {
        return (
            <div className="comment">
                <Title data={data} reply={reply} SetReply={SetReply} SetChange={SetChange}/>
                <Text text={data.text}/> 
            </div>
        )
    }
}

export default Comment;