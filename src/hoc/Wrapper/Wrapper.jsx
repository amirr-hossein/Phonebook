import Contacts from "../../components/Contacts/Contacts";
import Navbar from "../../components/Navbar/Navbar";
import Loader from "../../components/Ui/loader/Loader";
import { useState } from "react";
const Wrapper = ({ modalClicker }) => {
  const [loader, setLoader] = useState(true);
  return (
    <>
      <div className="container mx-auto relative h-full">
        <Navbar modal={modalClicker} />
        {loader ? <Contacts /> : <div className="flex justify-center h-[70%] items-center"><Loader /></div>}
      </div>
    </>
  );
};
export default Wrapper;
