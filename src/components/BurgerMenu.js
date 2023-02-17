import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import tokenContext from "../context/tokenContext";

export default function BurgerMenu() {
  const { token } = useContext(tokenContext);
  return (
    <motion.div
      className="z-40 w-screen h-screen absolute bg-white flex flex-col items-center justify-center text-center"
      initial={{ top: 1000 }}
      animate={{ top: 0 }}
      exit={{ top: 1000 }}
      transition={{
        duration: 0.2,
      }}
    >
      <ul className="text-[28px]">
        <li className="my-4">
          <Link to="/">Home</Link>
        </li>
        {token !== undefined || "" ? (
          <li className="my-4">
            <Link to="/logout">Log Out</Link>
          </li>
        ) : (
          <li>
            <Link to="/logind">Log Ind</Link>
          </li>
        )}
      </ul>
    </motion.div>
  );
}
