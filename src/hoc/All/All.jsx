
import Navbar from "../../components/Navbar/Navbar";
import { memo } from "react";
const All = ({
  modalClicker,
  loader,
  contacts,
  deleteContact,
  editContact,
  filterContacts,
  filteredContacts,
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

export default memo(All);
