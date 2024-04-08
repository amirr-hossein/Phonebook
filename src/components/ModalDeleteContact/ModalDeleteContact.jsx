import Backdrop from "../Ui/Backdrop/Backdrop";
const ModalDeleteContact = ({ stateModal, modalBack, deleteContact }) => {
  return (
    <>
      <Backdrop close={modalBack} modal={stateModal} />
      <div className="flex justify-center modals">
        <div className="w-[358px] h-[184px] bg-[#F7F7F7] rounded-[24px]">
          <h3 className="text-[32px] font-bol text-center mt-[16px]">
            حذف مخاطب
          </h3>
          <p className="text-[14px] font-reg text-[#2B2B2B] text-end mt-[16px] mr-[16px]">
            آیا از حذف کردن این مخاطب مطمئن هستید؟
          </p>
          <div className="flex flex-row-reverse mr-[16px] mt-[16px]">
            <div
              onClick={deleteContact}
              className="cursor-pointer ml-[16px] text-[14px] font-reg text-[#984447] flex justify-center items-center w-[51px] h-[40px] rounded-[12px] bg-[#EADADA] shEdit"
            >
              حذف
            </div>
            <div
              onClick={modalBack}
              className="cursor-pointer text-white text-[14px] font-reg w-[62px] h-[40px] rounded-[12px] bg-[#984447] shEdit flex justify-center items-center"
            >
              انصراف
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDeleteContact;
