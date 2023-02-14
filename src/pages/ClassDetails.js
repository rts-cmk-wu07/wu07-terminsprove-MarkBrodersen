import { useParams } from "react-router-dom";

export default function ClassDetails() {
  const id = useParams().id;
  console.log(id);
  return (
    <div>
      <div></div>
    </div>
  );
}
