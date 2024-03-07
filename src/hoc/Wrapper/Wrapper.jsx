import Navbar from "../../components/Navbar/Navbar";
import Routing from "../../routing/Routing";
const Wrapper = ({modalClicker}) => {
  return (
    <>
      <div className="container mx-auto relative">
        <Navbar modal={modalClicker} />
        <Routing />
      </div>
    </>
  );
};
export default Wrapper;
