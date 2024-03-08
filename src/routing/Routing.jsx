import { Navigate, Route, Routes } from "react-router-dom";
import Contacts from "../components/Contacts/Contacts";
const Routing = () => {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<Navigate to="/contacts" />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </>
  );
};
export default Routing;
