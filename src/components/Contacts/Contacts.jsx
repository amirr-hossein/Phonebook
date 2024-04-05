import Contact from "../Contact/contact";
import Loader from "../Ui/loader/Loader";
import { useState, useEffect } from "react";
import axios from "axios";
const Contacts = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    // Fetch images from the server
    axios.get("http://localhost:4000/contacts").then((response) => {
      setImages(response.data);
      // console.log(response.data)
    });
  }, []);
  console.log(images);
  return (
    <>
      contacts
      <Contact />
      <Loader />
      {images.map((contact) => (
        <div key={contact.id}>
          <img
            src={contact.info.photo}
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
export default Contacts;
