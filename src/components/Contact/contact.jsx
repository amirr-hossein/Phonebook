import { useState, useEffect } from "react";
import axios from "axios";
import brush from "../../assets/img/brush.png";
import people from "../../assets/img/people.png";
import trash from "../../assets/img/trash.png";
import edit from "../../assets/img/edit-2.png";
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
      <div className="flex">
        {contacts.map((contact) => (
          <div
            className="w-[264px] h-[324px] rounded-[16px] bg-[#FFF] contact"
            key={contact.id}
          >
            {contact.images && contact.images.length > 0 ? (
              <div className="flex justify-center">
                <img
                  src={contact.images[0].image}
                  className="size-[120px] rounded-[112px] object-cover mt-[16px]"
                />
              </div>
            ) : null}
            <div>
              <img src={brush} alt="" />
              <p>{contact.info ? contact.info.job : null}</p>
            </div>
            <div>
              <img src={people} alt="" />
              <p>{contact.info ? contact.info.group : null}</p>
            </div>
            <p className="text-[18px] font-bol text-center">{contact.info ? contact.info.fullname : null}</p>
            <p>{contact.info ? contact.info.mobile : null}</p>
            <div className="flex flex-row-reverse justify-center">
              <button className="flex flex-row-reverse bg-[#984447] shEdit items-center w-[93px] h-[40px] rounded-[12px] justify-center ml-[16px]">
                <p className="text-white text-[14px] font-reg ml-[8px]">
                  ویرایش
                </p>
                <img src={edit} alt="" />
              </button>
              <button className="bg-[#F2CFCF] shDelete flex flex-row-reverse items-center w-[79px] h-[40px] rounded-[12px] justify-center">
                <p className="text-[#BF0F0F] text-[14px] font-reg ml-[8px] mt-[4px]">
                  حذف
                </p>{" "}
                <img src={trash} alt="" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Contact;
