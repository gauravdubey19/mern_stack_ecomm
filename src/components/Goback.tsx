import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Goback = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => navigate(-1)}
        className="fixed group left-5 top-14 backdrop-blur-md p-2 rounded-full cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden"
      >
        <IoMdArrowRoundBack
          size={25}
          className="group-hover:scale-110 fill-white group-hover:fill-cyan-600 group-active:-translate-x-1 ease-in-out duration-200"
        />
      </div>
    </>
  );
};

export default Goback;
