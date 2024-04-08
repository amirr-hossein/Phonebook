import ModalForm from "../ModalForm/ModalForm";
import Backdrop from "../Ui/Backdrop/Backdrop";
import axios from "axios";

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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
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
      info: getContact,
    };
    // ارسال تغییرات به سرور
    axios
      .put(`http://localhost:4000/contacts/${contact}`, datas)
      .then((res) => {
        setContact(getContact);
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
        getContact={getContact}
        handleChange={handleChange}
        isEditMode={true} // تنظیم حالت ویرایش
        send={handleSubmit}
        handleChangeMobile={handleChangeMobile}
        isValidPhoneNumber={isValidPhoneNumber}
      />
    </>
  );
};

export default EditContact;
