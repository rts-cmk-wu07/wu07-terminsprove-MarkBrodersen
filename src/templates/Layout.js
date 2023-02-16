import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import tokenContext from "../context/tokenContext";
import { useState } from "react";
import useCookie from "react-use-cookie";
import openContext from "../context/openContext";
export default function Layout() {
  const [token, setToken] = useCookie("");
  const [open, setOpen] = useState(false);
  // const ToWelcome = () => {
  //   useEffect(() => {
  //     Navigate("/welcome");
  //   }, []);
  // };
  return (
    <tokenContext.Provider value={{ token, setToken }}>
      <openContext.Provider value={{ open, setOpen }}>
        <div className="w-11/12 m-auto">
          <Navigation />
          <div>
            <Outlet />
          </div>
        </div>
      </openContext.Provider>
    </tokenContext.Provider>
  );
}
