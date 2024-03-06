import ModalAddContact from "../../components/AddContact/ModalAddContacts";
import Navbar from "../../components/Navbar/Navbar";
import Routing from "../../routing/Routing";
import { useState } from "react";

const Wrapper = () => {
  const [isModal, setIsModal] = useState(false);
  const modalClicker=()=>{
    setIsModal(!isModal)
}
  return (
    <>
      <Navbar modal={modalClicker} modalBack={isModal} />
      {isModal ?<ModalAddContact/>:null}
      {/* <ModalAddContact /> */}
      <Routing />
    </>
  );
};
export default Wrapper;
