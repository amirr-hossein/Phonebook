import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div>
        <input type="text" name="" />
        <Link to={"/contacts/add"}>افزودن مخاطب</Link>
      </div>
    </>
  );
};
export default Navbar;
