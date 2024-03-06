import { Link } from "react-router-dom";
import iconSearch from "../../assets/img/iconSearch.png";
import add from "../../assets/img/add.png";
const Navbar = () => {
  return (
    <>
      <div className="flex justify-center pt-[48px]">
        <div className="relative cursor-pointer mr-[16px]">
          <div className="w-[133px] h-[40px] rounded-[12px] bg-[#984447] addContacts flex justify-end items-center">
            <Link
              className="text-white mx-[8px] text-[14px] font-med"
              to={"/contacts/add"}
            >
              افزودن مخاطب
            </Link>
          </div>
          <img className="absolute top-[10px] left-[8px]" src={add} alt="" />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="اسم مخاطب"
            className="directionInputSearch outline-none border border-[#E6E6E6] border-solid rounded-[12px] w-[402px] h-[40px] bg-white pr-[8px] text-[12px] text-[#AAAAAA] font-med"
          />
          <img
            className="absolute top-[10px] left-[16px]"
            src={iconSearch}
            alt=""
          />
        </div>
      </div>
    </>
  );
};
export default Navbar;
