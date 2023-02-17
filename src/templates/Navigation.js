import { AnimatePresence, motion } from "framer-motion";
import { Triangle, Menu, X } from "lucide-react";
import { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BurgerMenu from "../components/BurgerMenu";
import openContext from "../context/openContext";
export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { open, setOpen } = useContext(openContext);
  function backBtn() {
    navigate("/");
  }
  return (
    <>
      {location.pathname.split("/")[1] !== "classDetails" ? (
        <>
          <div className="flex items-center justify-between h-24 w-full">
            <AnimatePresence>
              {location.pathname !== "/" ? (
                <div className="flex items-center">
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: -90 }}
                    exit={{ rotate: 0 }}
                  >
                    <Triangle
                      onClick={backBtn}
                      className="text-primary-100 fill-primary-100 w-8 h-8"
                    />
                  </motion.div>
                  <motion.p className="text-primary-100 text-[22px]">
                    Back
                  </motion.p>
                </div>
              ) : (
                <Triangle className="text-primary-200 fill-primary-200 w-8 h-8" />
              )}
            </AnimatePresence>
            {location.pathname === "/" ? (
              <h1 className="text-[28px]">Popular Classes</h1>
            ) : null}
            <div
              className="text-primary-200 z-50"
              onClick={() => {
                setOpen(!open);
              }}
            >
              {!open ? <Menu className="w-8 h-8" /> : <X className="w-8 h-8" />}
            </div>
          </div>
          <AnimatePresence>
            {open === true ? <BurgerMenu /> : null}
          </AnimatePresence>
        </>
      ) : (
        <>
          <div className="flex z-20 items-center justify-between h-24 w-11/12 m-auto">
            {
              <Triangle
                onClick={backBtn}
                className="text-primary-200 z-20 fill-primary-200 w-8 h-8"
              />
            }
            {location.pathname === "/" ? (
              <h1 className="text-[28px]">Popular Classes</h1>
            ) : null}
            <div
              className="text-primary-200 z-50"
              onClick={() => {
                setOpen(!open);
              }}
            >
              {!open ? <Menu className="w-8 h-8" /> : <X className="w-8 h-8" />}
            </div>
          </div>
          <AnimatePresence>
            {open === true ? <BurgerMenu /> : null}
          </AnimatePresence>
        </>
      )}
    </>
  );
}
