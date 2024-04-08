import React from "react";

import './Title.css';

import Time from "./Time/Time";
import NameProf from "./NameProf/NameProf";

const Title = ({data, handleDeleteComment, reply, SetReply, SetChange}) => {
  if (reply == 1)
  {
    if (handleDeleteComment) {
      if (data.count_reply > 0)
      {
      return(
          <div className="title1">
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>
        <NameProf user={data.user.username} />
      </div>
      <div className="rep">
        <Time time={data.publicated_at} />
        <button className="b2" onClick={() => SetReply(data.user.username, data.id)}></button>
        <button className="b3" onClick={() => SetChange(data.text, data.id)}></button>
      </div>
    </div>
  </div>
      )
      }
      else {
        return(
          <div className="title1">
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>
        <NameProf user={data.user.username} />
      </div>
      <div className="rep">
        <Time time={data.publicated_at} />
        <button className="b2" onClick={() => SetReply(data.user.username, data.id)}></button>
        <button className="b3" onClick={() => SetChange(data.text, data.id)}></button>
        <button className="b1" onClick={handleDeleteComment}></button>
      </div>
    </div>
  </div>)
      }
  }
  else {
    if (localStorage.getItem('token')) {
  return (
    <div className="title1">
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>
        <NameProf user={data.user.username} />
      </div>
      <div className="rep">
        <Time time={data.publicated_at} />
        <button className="b2" onClick={() => SetReply(data.user.username, data.id)}></button>
      </div>
    </div>
  </div>
  )
    }
    else {
      return (
        <div className="title1">
            <Time time={data.publicated_at}/>
            <NameProf user={data.user.username}/>
        </div>
    )
    }
    }
  }
  else {
    if (handleDeleteComment) {
        return(
            <div className="title1">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <NameProf user={data.user.username} />
        </div>
        <div className="rep">
          <Time time={data.publicated_at} />
          <button className="b3" onClick={() => SetChange(data.text, data.id)}></button>
          <button className="b1" onClick={handleDeleteComment}></button>
        </div>
      </div>
    </div>
        )
    }
    else {
    return (
        <div className="title1">
            <Time time={data.publicated_at}/>
            <NameProf user={data.user.username}/>
        </div>
    )
    }
  }
}

export default Title;