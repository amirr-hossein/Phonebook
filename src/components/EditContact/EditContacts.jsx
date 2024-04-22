import ModalForm from "../ModalForm/ModalForm";
import Backdrop from "../Ui/Backdrop/Backdrop";
import axios from "axios";
import { memo, useEffect, useState } from "react";

const EditContact = ({
  stateModal,
  contact,
  setContact,
  closeModal,
  editContact,
  getGroups,
  uploadedImage,
  getFile,
  files,
  handleFileChange,
  deleteImage,
  handleChangeMobile,
  isValidPhoneNumber,
  getContact,
}) => {
  const [contactEdit, setContactEdit] = useState([]);
  const [selectContact, setSelectContact] = useState();
  const [editedContact, setEditedContact] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:4000/contacts")
      .then((res) => {
        setContactEdit(res.data);
      })
      .catch((error) => {
        console.error("Error fetching contacts:", error);
      });
  }, []);

  let filteredContacts = contactEdit.find((c) => c.id === contact);

  useEffect(() => {
    if (filteredContacts && filteredContacts.info) {
      setEditedContact(filteredContacts.info);
    }
  }, [filteredContacts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const datas = {
      images: [
        {
          image: uploadedImage,
        },
      ],
      info: editedContact,
    };
    axios
      .put(`http://localhost:4000/contacts/${contact}`, datas)
      .then((res) => {
        setContact(editedContact);
        console.log(res);
        console.log(
          `Contact with ID ${contact.id} updated successfully: ${res}`
        );
        closeModal();
      })
      .catch((er) => {
        console.error(
          "Error updating contact:",
          er.response ? er.response.data : er.message
        );
      });
  };

  return (
    <>
      <Backdrop close={editContact} modal={stateModal} />
      <ModalForm
        handleFileChange={handleFileChange}
        deleteImage={deleteImage}
        uploadedImage={uploadedImage}
        getFile={getFile}
        files={files}
        getGroups={getGroups}
        getContact={editedContact}
        handleChange={handleChange}
        isEditMode={true}
        send={handleSubmit}
        handleChangeMobile={handleChangeMobile}
        isValidPhoneNumber={isValidPhoneNumber}
        filteredContacts={filteredContacts}
      />
    </>
  );
};

export default memo(EditContact);
