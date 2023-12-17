import hash from "hash.js";

export default function CreateHash({ text }) {
  const test = hash.sha256().update(text).digest("hex");

  return (
    <div className="mx-auto my-9">
      <h3>{test}</h3>
    </div>
  );
}
