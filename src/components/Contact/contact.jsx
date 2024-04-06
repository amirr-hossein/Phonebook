import { useState, useEffect } from "react";
import axios from "axios";

const Contact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Fetch contacts from the server
    axios.get("http://localhost:4000/contacts").then((response) => {
      setContacts(response.data);
    });
  }, []);

  return (
    <>
      {contacts.map((contact) => (
        <div key={contact.id}>
          <img
            src={contact.images[0].image} // نمایش عکس
            style={{ maxWidth: "200px", maxHeight: "200px", margin: "10px" }}
          />
          <p>{contact.info.fullname}</p>
          <p>{contact.info.mobile}</p>
          <p>{contact.info.job}</p>
          <p>{contact.info.group}</p>
        </div>
      ))}
    </>
  );
};

export default Contact;
