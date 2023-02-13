// import useAxios from "./hooks/useAxios";
// import Layout from "./templates/Layout";
import Navigation from "./templates/Navigation";

function App() {
  // const { data } = useAxios("http://localhost:4000/api/v1/trainers");
  // console.log(data);
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
