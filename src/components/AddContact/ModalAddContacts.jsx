import Backdrop from "../Ui/Backdrop/Backdrop";
import gallaryAdd from "../../assets/img/gallery-add.png"
const ModalAddContact = ({ modalBack, stateModal }) => {
  return (
    <>
      <Backdrop close={modalBack} modal={stateModal} />
      <div className="flex justify-center modals">
        <div className="w-[358px] h-[632px] rounded-[24px] bg-[#F7F7F7]">
          <h1 className="font-bol text-[32px] mt-[16px] flex justify-center">افزودن مخاطب</h1>
          <div className="w-[120px] h-[120px] rounded-full bg-white relative">
            <img className="absolute" src={gallaryAdd} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default ModalAddContact;
