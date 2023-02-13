import { AnimatePresence } from "framer-motion";
import { Triangle, Menu } from "lucide-react";
import { useState } from "react";
import BurgerMenu from "../components/BurgerMenu";
export default function Navigation() {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <>
      <div className="flex items-center justify-center h-48 w-screen">
        <Triangle />
        <h1>Popular Classes</h1>
        <div
          className="bg-slate-500 z-30"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Menu />
        </div>
      </div>
      <AnimatePresence>{open === true ? <BurgerMenu /> : null}</AnimatePresence>
    </>
  );
}
