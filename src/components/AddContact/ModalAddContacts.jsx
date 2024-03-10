import Backdrop from "../Ui/Backdrop/Backdrop";
import gallaryAdd from "../../assets/img/gallery-add.png";
import addimage from "../../assets/img/addimage.png";
import trash from "../../assets/img/trash.png";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

const ModalAddContact = ({ modalBack, stateModal }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedImage, setUploadedImage] = useState("");
  const files = useRef();
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();

    reader.onloadend = () => {
      setUploadedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  // const handleUpload = () => {
  //   const a = {
  //     images: [
  //       {
  //         image: uploadedImage,
  //       },
  //     ],
  //   };
  //   axios
  //     .post("http://localhost:4000/contacts", a)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((er) => console.log(er));
  // };
  const getFile = () => {
    files.current.click();
  };
  useEffect(() => {
    if (uploadedImage) {
      const a = {
        image: uploadedImage,
      };
      axios
        .post("http://localhost:4000/contacts", a)
        .then((res) => {
          console.log(res);
        })
        .catch((er) => console.log(er));
    }
  }, [uploadedImage]);
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
          <form className="flex justify-center flex-row-reverse mt-[8px]">
            <div
              className="w-[40px] h-[40px] bg-[#EADADA] rounded-[12px] flex justify-center items-center gradImage cursor-pointer"
              onClick={getFile}
            >
              <img src={addimage} alt="" />
            </div>
            <div style={{ height: "0px", width: "0px", overflow: "hidden" }}>
              <input ref={files} type="file" onChange={handleFileChange} />
            </div>
            <div className="w-[40px] h-[40px] bg-[#EADADA] rounded-[12px] flex justify-center items-center gradImage mr-[16px] cursor-pointer">
              <img src={trash} alt="" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalAddContact;
