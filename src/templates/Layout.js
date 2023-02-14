import { Outlet } from "react-router-dom";
export default function Layout() {
  // const ToWelcome = () => {
  //   useEffect(() => {
  //     Navigate("/welcome");
  //   }, []);
  // };
  return (
    <div className="w-11/12 m-auto">
      <div>
        <Outlet />
      </div>
    </div>
  );
}
