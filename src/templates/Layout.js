import { Outlet, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import tokenContext from "../context/tokenContext";
import { useState } from "react";
import useCookie from "react-use-cookie";
import openContext from "../context/openContext";
export default function Layout() {
  const [token, setToken] = useCookie("");
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <tokenContext.Provider value={{ token, setToken }}>
      <openContext.Provider value={{ open, setOpen }}>
        {location.pathname.split("/")[1] !== "classDetails" ? (
          <div className="w-11/12 m-auto">
            <Navigation />
            <div>
              <Outlet />
            </div>
          </div>
        ) : (
          <div className="w-full m-auto">
            <Navigation />
            <div>
              <Outlet />
            </div>
          </div>
        )}
      </openContext.Provider>
    </tokenContext.Provider>
  );
}
