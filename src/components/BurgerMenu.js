import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function BurgerMenu() {
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
          <Link to="/home">Home</Link>
        </li>
        <li className="my-4">
          <Link to="/search">Search</Link>
        </li>
        <li className="my-4">
          <Link to="/myschedule">My Schedule</Link>
        </li>
        <li className="my-4">
          <Link to="/logind">Log Ind</Link>
        </li>
      </ul>
    </motion.div>
  );
}
