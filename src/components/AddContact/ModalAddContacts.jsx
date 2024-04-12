import Backdrop from "../Ui/Backdrop/Backdrop";
import ModalForm from "../ModalForm/ModalForm";
import { memo } from "react";
const ModalAddContact = ({
  modalBack,
  stateModal,
  uploadedImage,
  getFile,
  files,
  handleFileChange,
  deleteImage,
  getContact,
  handleChangeMobile,
  isValidPhoneNumber,
  getGroups,
  send,
  setContact,
  setContactInfo,
}) => {
  return (
    <>
      <Backdrop close={modalBack} modal={stateModal} />
      <ModalForm
        uploadedImage={uploadedImage}
        getFile={getFile}
        files={files}
        handleFileChange={handleFileChange}
        deleteImage={deleteImage}
        getContact={getContact}
        handleChangeMobile={handleChangeMobile}
        isValidPhoneNumber={isValidPhoneNumber}
        getGroups={getGroups}
        send={send}
        setContact={setContact}
        handleChange={setContactInfo}
      />
    </>
  );
};

export default memo(ModalAddContact);
