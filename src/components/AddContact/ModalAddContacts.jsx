import Backdrop from "../Ui/Backdrop/Backdrop";

const ModalAddContact = ({modalBack}) => {
  return (
    <>
      <Backdrop modal={modalBack} />
      <div className="container mx-auto">
        <div className="w-[358px] h-[632px]"></div>
      </div>
    </>
  );
};
export default ModalAddContact;
