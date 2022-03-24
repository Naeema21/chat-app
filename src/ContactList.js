import React from "react";

const ContactList = ({ contact, setUserData, Selected }) => {
  return (
    <li
      className={Selected === contact ? "d-flex active" : "d-flex"}
      key={contact.name}
      onClick={() => setUserData(contact)}
    >
      {/* <img src={contact.profilePic} alt="profile"></img> */}
      <span className="profile">{contact.name.substring(0, 1)}</span>
      <div className="about">
        <div className="name">{contact.name}</div>
        <div className="status">
          {" "}
          <i
            className={
              contact.status === "Online"
                ? "fa fa-circle online"
                : "fa fa-circle offline"
            }
          ></i>{" "}
          {contact.status}
        </div>
      </div>
    </li>
  );
};
export default ContactList;
