import add from "../../assets/img/add.png";
import SearchContact from "../SearchContact/SearchContact";
import AllContact from "../AllContact/AllContact"; // اضافه کردن کامپوننت Contact
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../../components/Ui/loader/Loader";

const Navbar = ({
  modal,
  editContact,
  deleteContact,
  loader,
  contacts,
  setContacts,
}) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4000/contacts").then((res) => {
      setContacts(res.data);
    });
  }, []);

  const filteredContacts = contacts.filter((contact) =>
    contact.info?.fullname?.toLowerCase().includes(search.toLowerCase())
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
      {/* نمایش کانتکت‌ها */}
      {loader ? (
        <div className="flex justify-center h-[70%] items-center">
          <Loader />
        </div>
      ) : (
        <AllContact
          contacts={search ? filteredContacts : contacts}
          deleteContact={deleteContact}
          editContact={editContact}
        />
      )}
    </>
  );
};

export default Navbar;
