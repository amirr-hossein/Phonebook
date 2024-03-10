import Contact from "../Contact/contact";
import Loader from "../Ui/loader/Loader";
import { useState, useEffect } from "react";
import axios from "axios";
// import as from "../../assets/img/trash.png"
const Contacts = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from the server
    axios.get("http://localhost:4000/contacts").then((response) => {
      setImages(response.data);
    });
  }, []);
  return (
    <>
      contacts
      <Contact />
      <Loader />
      {images.map((contact) => (
        <div key={contact.id}>
          {contact.images.map((image, index) => (
            <img
              key={index}
              src={image.image}
              alt={`Image ${index}`}
              style={{ maxWidth: "200px", maxHeight: "200px", margin: "10px" }}
            />
          ))}
        </div>
      ))}
    </>
  );
};
export default Contacts;
