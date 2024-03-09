import Backdrop from "../Ui/Backdrop/Backdrop";
import gallaryAdd from "../../assets/img/gallery-add.png";
import addimage from "../../assets/img/addimage.png";
import trash from "../../assets/img/trash.png";
import { useState,useEffect } from "react";
// import { all } from "../../axios/axios";
import axios from "axios";

const ModalAddContact = ({ modalBack, stateModal }) => {
  const [selectedFile, setSelectedFile] = useState("");
  const [images, setImages] = useState([]);
  const [uploadedImage, setUploadedImage] = useState("");


  useEffect(() => {
    // Fetch images from the server
    axios.get("http://localhost:4000/contacts").then((response) => {
      setImages(response.data);
    });
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setUploadedImage(URL.createObjectURL(event.target.files[0])); // اضافه کردن تصویر به state

  };
 
  const handleUpload = () => {
    const a={
      images: [
        {
          image: `${selectedFile.name}`
        },
      ]
    }
    axios.post("http://localhost:4000/contacts", a).then((res) => {
      console.log(res);
    }).catch((er)=>console.log(er))
  };
  const getFile = () => {
    document.getElementById("upfile").click();
  };

  return (
    <>
      <Backdrop close={modalBack} modal={stateModal} />
      <div className="flex justify-center modals">
        <div className="w-[358px] h-[632px] rounded-[24px] bg-[#F7F7F7]">
          <h1 className="font-bol text-[32px] mt-[16px] flex justify-center">
            افزودن مخاطب
          </h1>
          <div className="flex justify-center mt-[16px]">
            <div className="w-[120px] h-[120px] rounded-full bg-white relative">
              <img
                className="absolute top-[31px] left-[31px]"
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
              <input id="upfile" type="file" onChange={handleFileChange} />
            </div>
            <div
              className="w-[40px] h-[40px] bg-[#EADADA] rounded-[12px] flex justify-center items-center gradImage mr-[16px] cursor-pointer"
              onClick={handleUpload}
            >
              <img src={trash} alt="" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalAddContact;
