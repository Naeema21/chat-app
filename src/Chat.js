import React from "react";

const Chat = ({ messageList }) => {
  return (
    <div className="chat-history">
      <ul className="mb-0">
        {messageList.map((msg) => {
          return (
            <li
              className={
                msg.senderID === 1
                  ? `d-flex justify-content-start`
                  : `d-flex justify-content-end`
              }
            >
              <div
                className={
                  msg.senderID === 1
                    ? `message other-message`
                    : `message my-message`
                }
              >
                {msg.text}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Chat;
