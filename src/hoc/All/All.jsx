import AllContact from "../../components/AllContact/AllContact";
import Navbar from "../../components/Navbar/Navbar";
import Loader from "../../components/Ui/loader/Loader";
import { useState } from "react";
const All = ({
  modalClicker,
  loader,
  contacts,
  deleteContact,
  editContact,
  filterContacts,
  filteredContacts, // اضافه کردن این خط
}) => {
  return (
    <>
      <div className="container mx-auto relative h-full">
        <Navbar
          modal={modalClicker}
          filterContacts={filterContacts}
          filteredContacts={filteredContacts}
        />{" "}
        {/* اضافه کردن filteredContacts */}
        {loader ? (
          <div className="flex justify-center h-[70%] items-center">
            <Loader />
          </div>
        ) : (
          <AllContact
            deleteContact={deleteContact}
            contacts={contacts}
            editContact={editContact}
          />
        )}
      </div>
    </>
  );
};

export default All;
