import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { contactListData, messagesList } from "./Data";
import { useState } from "react";
import ContactList from "./ContactList";
import Chat from "./Chat";
import ChatHeader from "./ChatHeader";

export default function App() {
  const [search, setSearch] = useState("");
  const [Selected, setSelectedData] = useState({});

  const filteredData = contactListData.filter((el) => {
    if (search === "") {
      return el;
    } else {
      return (
        el.name.toLowerCase().includes(search.toLowerCase()) ||
        el.status.toLowerCase().includes(search.toLowerCase())
      );
    }
  });

  return (
    <div className="c-app">
      <div className="chat-app d-flex h-100">
        <div id="plist" className="people-list bg-light p-4">
          <div className="input-group">
            {/* searchbar for conyact */}
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {/* contact list */}
          <ul className="list-unstyled chat-list mt-2 mb-0">
            {filteredData.map((contact) => {
              return (
                <ContactList
                  contact={contact}
                  key={contact.id}
                  setUserData={setSelectedData}
                  Selected={Selected}
                />
              );
            })}
          </ul>
        </div>
        <div className="w-100 chat position-realtive">
          {Selected.name !== undefined ? (
            <>
              {/* chat header */}
              <ChatHeader Selected={Selected} />
              <Chat messageList={messagesList} />
              <div className="chat-message d-flex p-4 ">
                <div className="input-group mb-0">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter text here..."
                  />
                  <div className="input-group-prepend">
                    <button className="input-group-text btn-lg send">
                      <i className="fa fa-send"></i>
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
