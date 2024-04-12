import { memo } from "react";
import Contact from "../Contact/Contact";
const AllContact = ({ contacts, deleteContact, editContact }) => {
  return (
    <>
      {contacts.length === 0 ? (
        <p>موجود نیست</p>
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
