import { AnimatePresence } from "framer-motion";
import { Triangle, Menu, X } from "lucide-react";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import BurgerMenu from "../components/BurgerMenu";
import openContext from "../context/openContext";
export default function Navigation() {
  const navigate = useNavigate();
  const { open, setOpen } = useContext(openContext);
  function backBtn() {
    navigate("/home");
  }
  return (
    <>
      <div className="flex items-center justify-between h-24 w-full">
        <Triangle
          onClick={backBtn}
          className="text-primary-200 fill-primary-200 w-8 h-8"
        />
        <h1 className="text-[28px]">Popular Classes</h1>
        <div
          className="text-primary-200 z-50"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {!open ? <Menu className="w-8 h-8" /> : <X className="w-8 h-8" />}
        </div>
      </div>
      <AnimatePresence>{open === true ? <BurgerMenu /> : null}</AnimatePresence>
    </>
  );
}
