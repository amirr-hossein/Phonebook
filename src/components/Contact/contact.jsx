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
          {contact.images && contact.images.length > 0 ? (
            <img
              src={contact.images[0].image} // نمایش عکس
              style={{ maxWidth: "200px", maxHeight: "200px", margin: "10px" }}
            />
          ) : null}
          <p>{contact.info ? contact.info.fullname : null}</p>
          <p>{contact.info ? contact.info.mobile : null}</p>
          <p>{contact.info ? contact.info.job : null}</p>
          <p>{contact.info ? contact.info.group : null}</p>
        </div>
      ))}
    </>
  );
};

export default Contact;
