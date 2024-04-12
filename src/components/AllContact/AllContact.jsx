import { memo } from "react";
import Contact from "../Contact/Contact";
import nothing from "../../assets/img/requitments, cv, candidte, question, questions, stickers, sticker 1.png";
import add from "../../assets/img/add.png";

const AllContact = ({ contacts, deleteContact, editContact, modal }) => {
  return (
    <>
      {contacts.length === 0 ? (
        <div className="container mx-auto">
          <div className="flex mt-[125px] justify-center flex-col items-center">
            <img className="" src={nothing} alt="" />
            <div className="mt-[16px] flex flex-col items-center justify-center">
              <p className="font-bol text-[24px] text-[#2B2B2B]">:(مخاطبی وجود ندارد</p>
              <h3 className="text-[18px] text-[#2B2B2B] font-reg">!اولین مخاطب را ایجاد کنید</h3>
            </div>
            <div className="relative cursor-pointer mt-[8px]">
              <div className="w-[133px] h-[40px] rounded-[12px] bg-[#984447] addContacts flex justify-end items-center">
                <button
                  className="text-white mx-[8px] text-[14px] font-med"
                  onClick={modal}
                >
                  افزودن مخاطب
                </button>
              </div>
              <img
                className="absolute top-[10px] left-[8px]"
                src={add}
                alt=""
              />
            </div>
          </div>
        </div>
      ) : (
        <Contact
          contacts={contacts}
          deleteContact={deleteContact}
          editContact={editContact}
        />
      )}
    </>
  );
};

export default memo(AllContact);
