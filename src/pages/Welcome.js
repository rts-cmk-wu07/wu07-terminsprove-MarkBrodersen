import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../Assets/welcome_background.jpg";
import centerImage from "../Assets/welcome_center.jpg";
export default function Welcome() {
  const navigate = useNavigate();
  sessionStorage.setItem("key", "false");
  function handleClick() {
    sessionStorage.setItem("key", "true");
    navigate(0);
  }

  return (
    <>
      <img
        className="z-10 absolute top-0 left-0 h-screen h-screen overflow-hidden object-cover"
        src={backgroundImage}
        alt=""
      />
      <div className="absolute bottom-12 z-20">
        <div className="w-10/12 m-auto">
          <h1 className="text-white text-[58px] leading-none mb-12">
            Believe yourself
          </h1>
          <div className="flex items-center mb-12">
            <div className="border border-white w-12 -ml-12 mr-4 h-px"></div>
            <p className="text-white text-[22px]">Trian like a pro</p>
          </div>
        </div>
        <img className=" mb-12" src={centerImage} alt="" />
        <div className="flex relative">
          <button
            onClick={handleClick}
            className="absolute bottom-4 right-0 rounded-l-lg bg-white text-[22px] py-4 px-12"
          >
            Start Training
          </button>
        </div>
      </div>
    </>
  );
}
