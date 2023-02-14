import { AnimatePresence } from "framer-motion";
import { Triangle, Menu } from "lucide-react";
import { useState } from "react";
import BurgerMenu from "../components/BurgerMenu";
export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between h-48 w-full">
        <Triangle className="text-primary-200 fill-primary-200 w-8 h-8" />
        <h1 className="text-[28px]">Popular Classes</h1>
        <div
          className="text-primary-200 z-30"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Menu className="w-8 h-8" />
        </div>
      </div>
      <AnimatePresence>{open === true ? <BurgerMenu /> : null}</AnimatePresence>
    </>
  );
}
