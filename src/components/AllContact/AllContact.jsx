import Contact from "../Contact/Contact";
const AllContact = ({ contacts, deleteContact }) => {
  return (
    <>
      <Contact contacts={contacts} deleteContact={deleteContact} />
    </>
  );
};
export default AllContact;
