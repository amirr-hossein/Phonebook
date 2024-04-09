import add from "../../assets/img/add.png";
import SearchContact from "../SearchContact/SearchContact";
import { useState, useEffect } from "react";
import axios from "axios";

const Navbar = ({ modal }) => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4000/contacts").then((res) => {
      setContacts(res.data);
    });
  }, []);

  const filteredContacts = contacts.filter((contact) =>
  // console.log(contact.info.fullname)
  contact.info.fullname.includes(search)
  );

  return (
    <>
      <div className="flex justify-center pt-[48px] mb-[32px] container mx-auto">
        <div className="relative cursor-pointer mr-[16px]">
          <div className="w-[133px] h-[40px] rounded-[12px] bg-[#984447] addContacts flex justify-end items-center">
            <button
              className="text-white mx-[8px] text-[14px] font-med"
              onClick={modal}
            >
              افزودن مخاطب
            </button>
          </div>
          <img className="absolute top-[10px] left-[8px]" src={add} alt="" />
        </div>
        <SearchContact search={search} setSearch={setSearch} />
      </div>
      {/* نمایش تعداد مخاطبین فیلتر شده */}
      <p>تعداد مخاطبین فیلتر شده: {filteredContacts.length}</p>
    </>
  );
};

export default Navbar;
