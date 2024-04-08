import brush from "../../assets/img/brush.png";
import people from "../../assets/img/people.png";
import trash from "../../assets/img/trash.png";
import edit from "../../assets/img/edit-2.png";
const Contact = ({contacts,deleteContact,editContact}) => {

  return (
    <>
      <div className="flex flex-wrap gap-[24px] justify-center">
        {contacts.map((contact) => (
          <div
            className="w-[288px] h-[340px] rounded-[16px] bg-[#FFF] contact"
            key={contact.id}
          >
            {contact.images && contact.images.length > 0 ? (
              <div className="flex justify-center">
                <img
                  src={contact.images[0].image}
                  className="size-[120px] rounded-[112px] object-cover mt-[16px]"
                />
              </div>
            ) : null}
            <div className="flex flex-row-reverse justify-center mt-[16px]">
              <div className="min-w-[min-content] h-[28px] rounded-[24px] bg-[#F0EAE1] flex flex-row-reverse items-center justify-center">
                <img className="mr-[6px]" src={brush} alt="" />
                <p className="ml-[8px] text-[12px] font-reg text-[#B2966A] mr-[4px]">
                  {contact.info ? contact.info.job : null}
                </p>
              </div>

              <div className="flex flex-row-reverse items-center bg-[#EADADA] rounded-[24px] w-[27%] mr-[8px]">
                <img className="mr-[6px]" src={people} alt="" />
                <p className="text-[12px] font-reg text-[#984447] mr-[4px] ml-[8px]">
                  {contact.info ? contact.info.group : null}
                </p>
              </div>
            </div>
            <p className="text-[18px] font-bol text-center mt-[16px]">
              {contact.info ? contact.info.fullname : null}
            </p>
            <p className="text-center text-[16px] font-reg mt-[10px]">
              {contact.info ? contact.info.mobile : null}
            </p>
            <div className="flex flex-row-reverse justify-center mt-[16px]">
              <button onClick={editContact} className="flex flex-row-reverse bg-[#984447] shEdit items-center w-[93px] h-[40px] rounded-[12px] justify-center ml-[16px]">
                <p className="text-white text-[14px] font-reg ml-[8px]">
                  ویرایش
                </p>
                <img src={edit} alt="" />
              </button>
              <button className="bg-[#F2CFCF] shDelete flex flex-row-reverse items-center w-[79px] h-[40px] rounded-[12px] justify-center" onClick={() => deleteContact(contact.id)}>
                <p className="text-[#BF0F0F] text-[14px] font-reg ml-[8px] mt-[4px]">
                  حذف
                </p>{" "}
                <img src={trash} alt="" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Contact;
