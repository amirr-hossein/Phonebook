import { useState, useRef, useEffect, memo } from "react";
import axios from "axios";
import ModalAddContact from "../../components/AddContact/ModalAddContacts";
import ModalDeleteContact from "../../components/ModalDeleteContact/ModalDeleteContact";
import EditContact from "../../components/EditContact/EditContacts";
import All from "../All/All";

function Wrapper() {
  const [selectedContact, setSelectedContact] = useState(null);
  const [isModal, setIsModal] = useState(false);
  const [isModalEditContact, setIsModalEditContact] = useState(false);
  const [isModalDelete, setIsModalDelete] = useState(false);
  const [loader, setLoader] = useState(true);
  const [uploadedImage, setUploadedImage] = useState("");
  const [data, setData] = useState("");
  const files = useRef();
  const [getGroups, setGroups] = useState([]);
  const [update, setUpdate] = useState(false);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [contacts, setContacts] = useState([]);
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [getContact, setContact] = useState({
    id: Date.now().toString(),
    fullname: "",
    mobile: "",
    job: "",
    group: "",
  });
  const setContactInfo = (event) => {
    setContact({
      ...getContact,
      [event.target.name]: event.target.value,
    });
  };
  const modalShow = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const formatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/\D/g, "");
    return phoneNumber.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3");
  };

  const handleChangeMobile = (e) => {
    let value = e.target.value;

    // فیلتر کردن ورودی به اعداد
    value = value.replace(/\D/g, "");

    var regex = new RegExp(/^09[0-9]{9}$/);
    let testValue = regex.test(value);
    console.log(testValue);

    if (value.trim() === "") {
      setIsValidPhoneNumber(true);
    } else if (testValue) {
      setIsValidPhoneNumber(true);
    } else {
      setIsValidPhoneNumber(false);
    }

    const formattedValue = formatPhoneNumber(value)

    setContact({
      ...getContact,
      [e.target.name]: value.trim() === "" ? value : formattedValue,
    });
  };

  const send = () => {
    if (
      getContact.fullname &&
      getContact.mobile &&
      getContact.job &&
      getContact.group &&
      uploadedImage
    ) {
      setUpdate(true);
    } else {
      console.error("Please fill all the fields.");
    }
  };

  useEffect(() => {
    axios.get("http://localhost:4000/groups").then((res) => {
      setGroups(res.data);
    });
  }, []);

  const deleteImage = () => {
    if (!data) {
      console.error("Contact ID is not available.");
      return;
    }
    axios
      .delete(`http://localhost:4000/contacts/${data}`)
      .then((res) => {
        console.log(res);
        setUploadedImage("");
      })
      .catch((er) => {
        console.error(
          "Error deleting image:",
          er.response ? er.response.data : er.message
        );
      });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUploadedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const getFile = () => {
    files.current.click();
  };

  useEffect(() => {
    if (uploadedImage) {
      const datas = {
        image: uploadedImage,
      };
      axios
        .post("http://localhost:4000/contacts", datas)
        .then((res) => {
          setData(res.data.id);
          console.log(res);
        })
        .catch((er) => console.log(er));
    }
  }, [uploadedImage]);

  useEffect(() => {
    if (update) {
      const datas = {
        images: [
          {
            image: uploadedImage,
          },
        ],
        info: getContact,
      };
      axios
        .post("http://localhost:4000/contacts", datas)
        .then((res) => {
          console.log(res);
          setLoader(false);
        })
        .catch((er) => console.log(er));
    }
  }, [update]);

  useEffect(() => {
    setTimeout(() => {
      axios
        .delete(`http://localhost:4000/contacts/${data}`)
        .then((res) => {
          console.log(`delete with timeout ${res}`);
        })
        .catch((er) => {
          console.error(
            "Error deleting image:",
            er.response ? er.response.data : er.message
          );
        });
    }, 6000);
  }, [data, update]);

  const deleteContactModal = (contactId) => {
    axios
      .delete(`http://localhost:4000/contacts/${contactId}`)
      .then((res) => {
        console.log(
          `Contact with ID ${contactId} deleted successfully: ${res}`
        );
        setContacts((prevContacts) =>
          prevContacts.filter((c) => c.id !== contactId)
        );
        setIsModalDelete(false);
      })
      .catch((er) => {
        console.error(
          "Error deleting contact:",
          er.response ? er.response.data : er.message
        );
      });
  };
  useEffect(() => {
    // Fetch contacts from the server
    axios.get("http://localhost:4000/contacts").then((response) => {
      setContacts(response.data);
      setLoader(false);
    });
  }, []);
  const deleteContact = (contactId) => {
    setSelectedContactId(contactId);
    setIsModalDelete(true);
  };

  const closeModalDelete = () => {
    setIsModalDelete(false);
  };
  const editContact = (contact) => {
    setSelectedContact(contact);
    setIsModalEditContact(true);
  };

  const closeModalEdit = () => {
    setIsModalEditContact(false);
  };
  return (
    <>
      {isModal ? (
        <ModalAddContact
          modalBack={closeModal}
          stateModal={isModal}
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
          setContactInfo={setContactInfo}
        />
      ) : null}
      {isModalDelete ? (
        <ModalDeleteContact
          stateModal={isModalDelete}
          modalBack={closeModalDelete}
          deleteContact={() => deleteContactModal(selectedContactId)}
        />
      ) : null}
      {isModalEditContact ? (
        <EditContact
          handleFileChange={handleFileChange}
          deleteImage={deleteImage}
          uploadedImage={uploadedImage}
          getFile={getFile}
          files={files}
          getGroups={getGroups}
          stateModal={isModalEditContact}
          contact={selectedContact}
          setContact={setContact}
          closeModal={closeModalEdit}
          editContact={closeModalEdit}
          handleChangeMobile={handleChangeMobile}
          isValidPhoneNumber={isValidPhoneNumber}
          getContact={getContact}
        />
      ) : null}
      <div
        className="bg-[#F7F7F7] h-[100vh]"
        style={{ filter: isModal ? "blur(24px)" : null }}
      >
        <All
          loader={loader}
          editContact={editContact}
          deleteContact={deleteContact}
          contacts={contacts}
          modalClicker={modalShow}
          setContacts={setContacts}
          setLoader={setLoader}
        />
      </div>
    </>
  );
}

export default memo(Wrapper);
