import { Link } from "react-router-dom";
import centerImage from "../Assets/welcome_center.jpg";
export default function Welcome() {
  console.log(window.location.pathname);
  return (
    <div className="">
      <div>Hejsa</div>
      <div>
        <Link to="/home">Link</Link>
      </div>
    </div>
  );
}
