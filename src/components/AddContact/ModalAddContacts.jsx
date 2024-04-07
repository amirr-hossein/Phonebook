import Backdrop from "../Ui/Backdrop/Backdrop";
import gallaryAdd from "../../assets/img/gallery-add.png";
import addimage from "../../assets/img/addimage.png";
import trash from "../../assets/img/trash.png";
import user from "../../assets/img/user.png";
import call from "../../assets/img/call.png";
import brush from "../../assets/img/brush.png";
import people from "../../assets/img/people.png";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

const ModalAddContact = ({ modalBack, stateModal }) => {
  const [uploadedImage, setUploadedImage] = useState("");
  const [data, setData] = useState("");
  const files = useRef();
  const [getGroups, setGroups] = useState([]);
  const [update, setUpdate] = useState(false);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [getContact, setContact] = useState({
    fullname: "",
    mobile: "",
    job: "",
    group: "",
  });

  const formatPhoneNumber = (value) => {
    if (!value) return value;

    // Remove all non-numeric characters from the string
    const phoneNumber = value.replace(/\D/g, "");

    // Format the phone number with spaces
    return phoneNumber.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3");
  };

  const handleChangeMobile = (e) => {
    const value = e.target.value;
    const formattedValue = formatPhoneNumber(value);

    if (value.trim() === "" || formattedValue === value) {
      setIsValidPhoneNumber(true);
    } else {
      setIsValidPhoneNumber(false);
    }

    setContact({
      ...getContact,
      [e.target.name]: formattedValue,
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
    }, 2000);
  }, [data, update]);

  useEffect(() => {
    if (getContact.mobile) {
      setContact({
        ...getContact,
        mobile: formatPhoneNumber(getContact.mobile),
      });
    }
  }, [getContact.mobile]);

  return (
    <>
      <Backdrop close={modalBack} modal={stateModal} />
      <div className="flex justify-center modals">
        <div className="w-[358px] h-[632px] rounded-[24px] bg-[#F7F7F7]">
          <h1 className="font-bol text-[32px] mt-[16px] flex justify-center">
            افزودن مخاطب
          </h1>
          <div className="flex justify-center mt-[16px]">
            <div className="w-[120px] h-[120px] rounded-full bg-white flex justify-center items-center overflow-hidden">
              <img
                className="object-cover rounded-full cursor-pointer"
                src={uploadedImage || gallaryAdd}
                alt=""
              />
            </div>
          </div>
          <form className="flex justify-center flex-row-reverse mt-[8px] flex-col">
            <div className="flex justify-center flex-row-reverse">
              <div
                className="w-[40px] h-[40px] bg-[#EADADA] rounded-[12px] flex justify-center items-center gradImage cursor-pointer"
                onClick={getFile}
              >
                <img src={addimage} alt="" />
              </div>
              <div style={{ height: "0px", width: "0px", overflow: "hidden" }}>
                {/* input file for getting image */}
                <input
                  required
                  ref={files}
                  type="file"
                  onChange={handleFileChange}
                />
              </div>
              <div
                className="w-[40px] h-[40px] bg-[#EADADA] rounded-[12px] flex justify-center items-center gradImage mr-[16px] cursor-pointer"
                onClick={deleteImage}
              >
                <img src={trash} alt="" />
              </div>
            </div>
            <div className="mx-[16px] mt-[8px]">
              <div className="flex flex-col items-end mb-[8px]">
                <h1
                  className="text-end font-reg text-[14px] mb-[4px]"
                  htmlFor=""
                >
                  نام مخاطب
                </h1>
                <div className="relative">
                  <img
                    className="absolute right-[8px] top-[10px]"
                    src={user}
                    alt=""
                  />
                  <input
                    required
                    type="text"
                    className="outline-none rounded-[12px] border border-solid border-[#E6E6E6] w-[326px] h-[40px] bg-white pr-[33px] text-[#aaa] text-[12px] font-reg"
                    dir="rtl"
                    name="fullname"
                    value={getContact.fullname}
                    onChange={(e) =>
                      setContact({ ...getContact, fullname: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col items-end mb-[8px]">
                <h1
                  className="text-end font-reg text-[14px] mb-[4px]"
                  htmlFor=""
                >
                  شماره تلفن
                </h1>
                <div className="relative">
                  <img
                    className="absolute right-[8px] top-[10px]"
                    src={call}
                    alt=""
                  />
                  <input
                    required
                    type="text"
                    className="outline-none rounded-[12px] border border-solid border-[#E6E6E6] w-[326px] h-[40px] bg-white pr-[33px] text-[#aaa] text-[12px] font-reg"
                    dir="ltr"
                    name="mobile"
                    value={getContact.mobile}
                    onChange={handleChangeMobile}
                  />
                  <div className="flex justify-end">
                    {!isValidPhoneNumber && (
                      <p className="text-red-500 text-[12px] font-reg">
                        شماره تلفن معتبر نیست
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end mb-[8px]">
                <h1
                  className="text-end font-reg text-[14px] mb-[4px]"
                  htmlFor=""
                >
                  شغل
                </h1>
                <div className="relative">
                  <img
                    className="absolute right-[8px] top-[10px]"
                    src={brush}
                    alt=""
                  />
                  <input
                    required
                    type="text"
                    className="outline-none rounded-[12px] border border-solid border-[#E6E6E6] w-[326px] h-[40px] bg-white pr-[33px] text-[#aaa] text-[12px] font-reg"
                    dir="rtl"
                    name="job"
                    value={getContact.job}
                    onChange={(e) =>
                      setContact({ ...getContact, job: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col items-end mb-[8px]">
                <h1
                  className="text-end font-reg text-[14px] mb-[4px]"
                  htmlFor=""
                >
                  گروه
                </h1>
                <div className="relative">
                  <img
                    className="absolute right-[8px] top-[10px]"
                    src={people}
                    alt=""
                  />
                  <select
                    required
                    className="outline-none rounded-[12px] border border-solid border-[#E6E6E6] w-[326px] h-[40px] bg-white pr-[33px] pl-[16px] text-[#aaa] text-[12px] font-reg"
                    dir="rtl"
                    name="group"
                    value={getContact.group}
                    onChange={(e) =>
                      setContact({ ...getContact, group: e.target.value })
                    }
                  >
                    <option
                      className="text-[#aaa] text-[12px] font-reg"
                      value="choose"
                    >
                      انتخاب
                    </option>
                    {getGroups.length > 0 &&
                      getGroups.map((group) => (
                        <option
                          key={group.id}
                          value={group.name}
                          className="text-[#aaa] text-[12px] font-reg"
                        >
                          {group.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="mt-[16px]">
                <button
                  className="w-[326px] h-[40px] rounded-[12px] bg-[#984447] text-white text-[14px] font-reg"
                  onClick={send}
                >
                  افزودن مخاطب
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalAddContact;
