import PopularClass from "./components/PopularClass";
import useAxios from "./hooks/useAxios";
import ClassesList from "./components/ClassesList";
import Navigation from "./templates/Navigation";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

function App() {
  const { data } = useAxios("http://localhost:4000/api/v1/classes");
  const [width, setWidth] = useState(0);
  const slider = useRef();

  useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  }, []);

  return (
    <>
      <main className="App">
        <PopularClass data={data} />
        <div>
          <h2 className="mb-8 text-[28px]">Classes for you</h2>
          <motion.div className="flex overflow-hidden">
            <motion.div
              ref={slider}
              className="flex gap-4"
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
            >
              {data &&
                data.map((item) => {
                  return <ClassesList key={item.id} item={item} />;
                })}
            </motion.div>
          </motion.div>
        </div>
      </main>
    </>
  );
}

export default App;
