import PopularClass from "./components/PopularClass";
import useAxios from "./hooks/useAxios";
import ClassesList from "./components/ClassesList";
import Navigation from "./templates/Navigation";

function App() {
  const { data } = useAxios("http://localhost:4000/api/v1/classes");
  console.log(data);
  return (
    <>
      
      <main className="App">
        <PopularClass data={data} />
        <div>
          <h2 className="mb-8 text-[28px]">Classes for you</h2>
          <div className="flex overflow-hidden">
            {data &&
              data.map((item) => {
                return <ClassesList key={item.id} item={item} />;
              })}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
