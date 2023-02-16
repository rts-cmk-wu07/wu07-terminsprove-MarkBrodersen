export default function Input({ text, type, ...props }) {
  return (
    <>
      <input
        className="p-4 bg-gray-200 border border-gray-400 my-4 rounded-2xl"
        placeholder={text}
        type={type}
        {...props}
      />
    </>
  );
}
