import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Contacts from "../components/Contact/contact";
import AddContact from "../components/AddContact/AddContacts";
import EditContact from "../components/EditContact/EditContacts";
const Routing = () => {
  const navigate = useNavigate();
  localStorage.setItem("lastVisitedPage", "/contacts");
  useEffect(() => {
    let nav = localStorage.getItem("lastVisitedPage");
    navigate(nav);
  }, []);
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<Navigate to="/contacts" />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/contacts/add" element={<AddContact />} />
          <Route path="/contacts/edit/:contactId" element={<EditContact />} />
        </Routes>
      </div>
    </>
  );
};
export default Routing;
