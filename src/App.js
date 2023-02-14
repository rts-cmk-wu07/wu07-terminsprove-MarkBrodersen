import useAxios from "./hooks/useAxios";
import Navigation from "./templates/Navigation";

function App() {
  const { data } = useAxios("http://localhost:4000/api/v1/classes");
  console.log(data);
  return (
    <>
      <Navigation />
      <div className="App">
        <div></div>
      </div>
    </>
  );
}

export default App;
