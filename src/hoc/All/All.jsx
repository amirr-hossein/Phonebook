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
  setContacts,
  setLoader,
}) => {
  return (
    <>
      <div className="container mx-auto relative h-full">
        <Navbar
          modal={modalClicker}
          filterContacts={filterContacts}
          filteredContacts={filteredContacts}
          editContact={editContact}
          deleteContact={deleteContact}
          contacts={contacts}
          loader={loader}
          setContacts={setContacts}
          setLoader={setLoader}
        />{" "}
      </div>
    </>
  );
};

export default All;
