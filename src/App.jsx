import Wrapper from "./hoc/Wrapper/Wrapper";
import { useState } from "react";
import ModalAddContact from "./components/AddContact/ModalAddContacts";
function App() {
  const [isModal, setIsModal] = useState(false);
  const modalShow = () => {
    setIsModal(true);
  };
  const closeModal = () => {
    setIsModal(false);
  };
  return (
    <>
      {isModal ? (
        <ModalAddContact modalBack={closeModal} stateModal={isModal} />
      ) : null}
      <div
        className="bg-[#F7F7F7] h-[100vh]"
        style={{ filter: isModal ? "blur(24px)" : null }}
      >
        <Wrapper modalClicker={modalShow} />
      </div>
    </>
  );
}

export default App;
