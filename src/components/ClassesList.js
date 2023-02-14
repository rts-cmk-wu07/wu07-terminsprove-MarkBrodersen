import { Link } from "react-router-dom";

export default function ClassesList({ item }) {
  return (
    <Link to={`/classDetails/${item.id}`} className="w-64">
      <img src={item.asset.url} alt={item.className} />
      <p className="text-ellipsis ">{item.className}</p>
    </Link>
  );
}
