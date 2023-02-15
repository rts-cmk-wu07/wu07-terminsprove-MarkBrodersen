import axios from "axios";
import { useParams } from "react-router-dom";
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
    axios
      .get(`http://localhost:4000/api/v1/classes/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
    axios
      .get("http://localhost:4000/api/v1/trainers/1")
      .then((response) => {
        setperson(response.person);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log(data);
  console.log(person);
  return (
    <section>
      {data && (
        <>
          <div></div>
          <ScheduleItem item={data} CD={true} />
          <p>{data.classDescription}</p>
          <div>
            <h3 className="text-[36]">Trainer</h3>
            <div className="flex">
              <img src="" alt="" />
              <p className="text-[22px]">{data.trainer.trainerName}</p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
