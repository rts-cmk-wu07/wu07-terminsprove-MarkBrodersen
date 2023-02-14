import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function BurgerMenu() {
  return (
    <motion.div
      className="z-10 w-screen h-screen absolute bg-white flex flex-col items-center justify-center text-center"
      initial={{ top: 1000 }}
      animate={{ top: 0 }}
      exit={{ top: 1000 }}
      transition={{
        duration: 0.2,
      }}
    >
      <ul className="text-[52px]">
        <li>Home</li>
        <li>Search</li>
        <li>My Schedule</li>
        <li>Log Ind</li>
      </ul>
    </motion.div>
  );
}
