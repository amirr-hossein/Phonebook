import iconSearch from "../../assets/img/iconSearch.png";

const SearchContact = ({ search, setSearch }) => {
  return (
    <>
      <div className="relative">
        <input
          type="text"
          placeholder="اسم مخاطب"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="directionInputSearch outline-none border border-[#E6E6E6] border-solid rounded-[12px] w-[402px] h-[40px] bg-white pr-[8px] text-[12px] text-[#AAAAAA] font-med"
        />
        <img
          className="absolute top-[10px] left-[16px]"
          src={iconSearch}
          alt=""
        />
      </div>
    </>
  );
};

export default SearchContact;
