import React from "react";

const ChatHeader = ({ Selected }) => {
  return (
    <div className="chat-header d-flex">
      <div className="d-flex">
        <span className="profile">{Selected.name.substring(0, 1)}</span>
        <div className="chat-about">
          <h6 className="mb-0">{Selected.name}</h6>
          <small>
            {" "}
            <i
              className={
                Selected.status === "Online"
                  ? "fa fa-circle online"
                  : "fa fa-circle offline"
              }
            ></i>{" "}
            {Selected.status}
          </small>
        </div>
      </div>
    </div>
  );
};
export default ChatHeader;
