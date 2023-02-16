import { Link } from "react-router-dom";
import useAxios from "../hooks/useAxios";

export default function PopularClass() {
  const { data } = useAxios("http://localhost:4000/api/v1/classes/2");
  return (
    <>
      {data && (
        <>
          <Link
            to={`/classDetails/${data.id}`}
            className="z-10 rounded-2xl relative overflow-hidden"
          >
            <div className="max-h-[400px] overflow-hidden">
              <img
                className="rounded-2xl object-cover min-h-[400px]"
                src={data.asset.url}
                alt={data.className}
              />
              <div className="bg-gradient-to-t from-[#00000020] to-[#00000040] absolute inset-0 rounded-2xl"></div>
              <p className="z-20 text-white text-[50px] -translate-y-36 translate-x-4">
                {data.className}
              </p>
            </div>
          </Link>
        </>
      )}
    </>
  );
}
