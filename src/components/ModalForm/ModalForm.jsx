import gallaryAdd from "../../assets/img/gallery-add.png";
import addimage from "../../assets/img/addimage.png";
import trash from "../../assets/img/trash.png";
import user from "../../assets/img/user.png";
import call from "../../assets/img/call.png";
import brush from "../../assets/img/brush.png";
import people from "../../assets/img/people.png";
import { memo } from "react";

const ModalForm = ({
  uploadedImage,
  getFile,
  files,
  handleFileChange,
  deleteImage,
  getContact,
  handleChangeMobile,
  isValidPhoneNumber,
  getGroups,
  send,
  isEditMode = false,
  handleChange,
  filteredContacts,
}) => {
  console.log(filteredContacts.images)
  console.log(uploadedImage)
  // const imageSrc =
  //   isEditMode &&
  //   filteredContacts &&
  //   filteredContacts.length > 0 &&
  //   filteredContacts[0] &&
  //   filteredContacts[0].images &&
  //   filteredContacts[0].images.length > 0
  //     ? filteredContacts[0].images[0].image
  //     : getContact.image;

  return (
    <>
      <div className="flex justify-center modals">
        <div className="w-[358px] h-[632px] rounded-[24px] bg-[#F7F7F7]">
          <h1 className="font-bol text-[32px] mt-[16px] flex justify-center">
            {isEditMode ? "ویرایش مخاطب" : "افزودن مخاطب"}
          </h1>
          <div className="flex justify-center mt-[16px]">
            <div className="w-[120px] h-[120px] rounded-full bg-white flex justify-center items-center overflow-hidden">
              <img
                className="object-cover rounded-full cursor-pointer"
                src={uploadedImage}
                alt=""
              />
            </div>
          </div>
          <form className="flex justify-center flex-row-reverse mt-[8px] flex-col">
            <div className="flex justify-center flex-row-reverse">
              <div
                className="w-[40px] h-[40px] bg-[#EADADA] rounded-[12px] flex justify-center items-center gradImage cursor-pointer"
                onClick={getFile}
              >
                <img src={addimage} alt="" />
              </div>
              <div style={{ height: "0px", width: "0px", overflow: "hidden" }}>
                {/* input file for getting image */}
                <input
                  required
                  ref={files}
                  type="file"
                  onChange={handleFileChange}
                />
              </div>
              <div
                className="w-[40px] h-[40px] bg-[#EADADA] rounded-[12px] flex justify-center items-center gradImage mr-[16px] cursor-pointer"
                onClick={deleteImage}
              >
                <img src={trash} alt="" />
              </div>
            </div>
            <div className="mx-[16px] mt-[8px]">
              <div className="flex flex-col items-end mb-[8px]">
                <h1
                  className="text-end font-reg text-[14px] mb-[4px]"
                  htmlFor=""
                >
                  نام مخاطب
                </h1>
                <div className="relative">
                  <img
                    className="absolute right-[8px] top-[10px]"
                    src={user}
                    alt=""
                  />
                  <input
                    required
                    type="text"
                    className="outline-none rounded-[12px] border border-solid border-[#E6E6E6] w-[326px] h-[40px] bg-white pr-[33px] text-[#aaa] text-[12px] font-reg"
                    dir="rtl"
                    name="fullname"
                    value={
                      isEditMode &&
                      filteredContacts &&
                      filteredContacts.length > 0 &&
                      filteredContacts[0] &&
                      filteredContacts[0].info
                        ? filteredContacts[0].info.fullname
                        : getContact.fullname
                    }
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col items-end mb-[8px]">
                <h1
                  className="text-end font-reg text-[14px] mb-[4px]"
                  htmlFor=""
                >
                  شماره تلفن
                </h1>
                <div className="relative">
                  <img
                    className="absolute right-[8px] top-[10px]"
                    src={call}
                    alt=""
                  />
                  <input
                    required
                    type="text"
                    className="outline-none rounded-[12px] border border-solid border-[#E6E6E6] w-[326px] h-[40px] bg-white pr-[33px] text-[#aaa] text-[12px] font-reg"
                    dir="ltr"
                    name="mobile"
                    value={
                      isEditMode &&
                      filteredContacts &&
                      filteredContacts.length > 0 &&
                      filteredContacts[0] &&
                      filteredContacts[0].info
                        ? filteredContacts[0].info.mobile
                        : getContact.mobile
                    }
                    onChange={handleChangeMobile}
                  />
                  <div className="flex justify-end">
                    {!isValidPhoneNumber && (
                      <p className="text-red-500 text-[12px] font-reg">
                        شماره تلفن معتبر نیست
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end mb-[8px]">
                <h1
                  className="text-end font-reg text-[14px] mb-[4px]"
                  htmlFor=""
                >
                  شغل
                </h1>
                <div className="relative">
                  <img
                    className="absolute right-[8px] top-[10px]"
                    src={brush}
                    alt=""
                  />
                  <input
                    required
                    type="text"
                    className="outline-none rounded-[12px] border border-solid border-[#E6E6E6] w-[326px] h-[40px] bg-white pr-[33px] text-[#aaa] text-[12px] font-reg"
                    dir="rtl"
                    name="job"
                    value={
                      isEditMode &&
                      filteredContacts &&
                      filteredContacts.length > 0 &&
                      filteredContacts[0] &&
                      filteredContacts[0].info
                        ? filteredContacts[0].info.job
                        : getContact.job
                    }
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col items-end mb-[8px]">
                <h1
                  className="text-end font-reg text-[14px] mb-[4px]"
                  htmlFor=""
                >
                  گروه
                </h1>
                <div className="relative">
                  <img
                    className="absolute right-[8px] top-[10px]"
                    src={people}
                    alt=""
                  />
                  <select
                    required
                    className="outline-none rounded-[12px] border border-solid border-[#E6E6E6] w-[326px] h-[40px] bg-white pr-[33px] pl-[16px] text-[#aaa] text-[12px] font-reg"
                    dir="rtl"
                    name="group"
                    value={
                      isEditMode &&
                      filteredContacts &&
                      filteredContacts.length > 0 &&
                      filteredContacts[0] &&
                      filteredContacts[0].info
                        ? filteredContacts[0].info.group
                        : getContact.group
                    }
                    onChange={handleChange}
                  >
                    <option
                      className="text-[#aaa] text-[12px] font-reg"
                      value="choose"
                    >
                      انتخاب
                    </option>
                    {getGroups.length > 0 &&
                      getGroups.map((group) => (
                        <option
                          key={group.id}
                          value={group.name}
                          className="text-[#aaa] text-[12px] font-reg"
                        >
                          {group.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="mt-[16px]">
                <button
                  className="w-[326px] h-[40px] rounded-[12px] bg-[#984447] text-white text-[14px] font-reg"
                  onClick={send}
                >
                  {isEditMode ? "ویرایش مخاطب" : "افزودن مخاطب"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default ModalForm;
