import Backdrop from "../Ui/Backdrop/Backdrop";

const ModalAddContact = ({modalBack,stateModal}) => {
  return (
    <>
      <Backdrop close={modalBack} modal={stateModal} />
      <div className="flex justify-center modals"> 
        <div className="w-[358px] h-[632px] rounded-[24px] bg-[#F7F7F7]">
          add contacts
        </div>
      </div>
    </>
  );
};
export default ModalAddContact;
