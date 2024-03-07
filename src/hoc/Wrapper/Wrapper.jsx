import ModalAddContact from "../../components/AddContact/ModalAddContacts";
import Navbar from "../../components/Navbar/Navbar";
import Routing from "../../routing/Routing";
import { useState } from "react";

const Wrapper = () => {
  const [isModal, setIsModal] = useState(false);
  const modalClicker = () => {
    setIsModal(true);
  };
  const closeModal=()=>{
    setIsModal(false)
  }
  return (
    <>
      <div className="container mx-auto relative">
      <Navbar modal={modalClicker} />
      {isModal ? <ModalAddContact modalBack={closeModal} stateModal={isModal}/> : null}
      <Routing />

      </div>
    </>
  );
};
export default Wrapper;
