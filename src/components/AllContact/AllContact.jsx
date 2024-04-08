import Contact from "../Contact/Contact";
const AllContact = ({ contacts, deleteContact, editContact }) => {
  return (
    <>
      <Contact
        contacts={contacts}
        deleteContact={deleteContact}
        editContact={editContact}
      />
    </>
  );
};
export default AllContact;
