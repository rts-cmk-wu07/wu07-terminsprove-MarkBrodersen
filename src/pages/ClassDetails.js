import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import ScheduleItem from "../components/ScheduleItem.js";
import { useEffect, useState } from "react";

export default function ClassDetails() {
  const id = useParams().id;
  const [person, setperson] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function asyncFunc() {
      const response = await axios.get(
        `http://localhost:4000/api/v1/classes/${id}`
      );
      let personId = "";
      if (response !== null) {
        setData(response.data);
        personId = data.trainerId;
      }
      await axios
        .get(`http://localhost:4000/api/v1/trainers/${personId}`)
        .then((response) => {
          setperson(response.person);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    asyncFunc();
  }, []);

  return (
    <section>
      {data && (
        <>
          <div className="relative -translate-y-[6rem] h-[50vh]">
            <img
              className=" h-[60vh] object-cover z-0"
              src={data.asset.url}
              alt=""
            />
            <div className="bg-gradient-to-t from-[#00000020] to-[#00000040] absolute top-0 z-10  h-[60vh] w-full"></div>
            <p className="text-[58px] z-20 text-white -translate-y-[12rem]">
              {data.className}
            </p>
          </div>
          <div className="w-11/12 m-auto">
            <ScheduleItem item={data} CD={true} />
            <p className="mt-4 text-[28px]">{data.classDescription}</p>
            <div>
              <h3 className="text-[36px]">Trainer</h3>
              <div className="flex">
                <img src="" alt="" />
                <p className="text-[22px]">{data.trainer.trainerName}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
