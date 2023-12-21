export default function InputVal({ text }) {
  return (
    <>
      <p className="text-lg mx-auto my-2 tracking-wider w-1/3 ">Input:</p>
      <input
        type="text"
        placeholder="enter some text ... "
        value={text}
        className="text-zinc-50 w-1/3 mx-auto h-24 text-center bg-background-soft rounded-xl"
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}
