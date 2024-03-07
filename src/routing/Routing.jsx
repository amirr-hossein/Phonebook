import { Navigate, Route, Routes } from "react-router-dom";
import Contacts from "../components/Contact/contact";
import EditContact from "../components/EditContact/EditContacts";
const Routing = () => {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<Navigate to="/contacts" />} />
          <Route path="/contacts" element={<Contacts />} />
          {/* <Route path="/contacts/edit/:contactId" element={<EditContact />} /> */}
        </Routes>
      </div>
    </>
  );
};
export default Routing;
