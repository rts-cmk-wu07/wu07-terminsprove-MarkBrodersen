import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/sub-components/Input.js";
import tokenContext from "../context/tokenContext.js";
export default function LogInOut() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { token, setToken } = useContext(tokenContext);
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:4000/auth/token", {
        username: username,
        password: password,
      })
      .then(function (response) {
        setToken(response.data.token, {
          days: 10,
        });
        navigate("/home");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  console.log(token);
  function handleLogOut() {
    setToken("");
    navigate("/home");
  }
  return (
    <div>
      {token ? (
        <div className="flex w-full h-screen overflow-hidden justify-center items-center inset-0">
          <button
            onClick={handleLogOut}
            className=" bg-slate-200 border border-gray-400 py-4 px-12 rounded-2xl"
          >
            Log out
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col">
          <Input
            type="text"
            text="Username"
            onChange={(event) => setUsername(event.target.value)}
          />
          <Input
            type="password"
            text="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            className="border border-gray-400 my-4 bg-gray-200 rounded-2xl p-4"
            type="submit"
          >
            Log ind
          </button>
        </form>
      )}
    </div>
  );
}
