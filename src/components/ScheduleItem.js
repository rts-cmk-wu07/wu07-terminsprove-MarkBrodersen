export default function ScheduleItem({ CD, item }) {
  return (
    <div>
      <h2 className="text-[36px]">Schedule</h2>
      <div className="flex justify-between">
        <p className="text-[22px]">{item.classDay}</p>
        <p className="text-[22px]">{item.classTime}</p>
      </div>
    </div>
  );
}
