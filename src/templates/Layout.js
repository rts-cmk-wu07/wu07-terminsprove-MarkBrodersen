import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
export default function Layout() {
  // const ToWelcome = () => {
  //   useEffect(() => {
  //     Navigate("/welcome");
  //   }, []);
  // };
  return (
    <div className="w-11/12 m-auto">
      <Navigation />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
