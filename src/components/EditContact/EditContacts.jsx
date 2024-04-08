import ModalAddContact from "../AddContact/ModalAddContacts";
import Backdrop from "../Ui/Backdrop/Backdrop";

const EditContact = ({ editContact, stateModal }) => {
  return (
    <>
      <Backdrop close={editContact} modal={stateModal} />

      <ModalAddContact />
    </>
  );
};
export default EditContact;
