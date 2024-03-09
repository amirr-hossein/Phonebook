import Backdrop from "../Ui/Backdrop/Backdrop";
import gallaryAdd from "../../assets/img/gallery-add.png";
import addimage from "../../assets/img/addimage.png";
const ModalAddContact = ({ modalBack, stateModal }) => {
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
                src={gallaryAdd}
                alt=""
              />
            </div>
          </div>
          <form>
            <div
              className="w-[40px] h-[40px] bg-[#EADADA] rounded-[12px] flex justify-center items-center gradImage"
              onClick={getFile}
            >
              <img src={addimage} alt="" />
              {document.getElementById("upfile")?.files[0]?.name}
            </div>
            <div style={{ height: "0px", width: "0px", overflow: "hidden" }}>
              <input id="upfile" type="file" />
            </div>
            <div>
              <img src={blank} alt="" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default ModalAddContact;
