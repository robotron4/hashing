import hash from "hash.js";

export default function CreateHash({ text }) {
  const test = hash.sha256().update(text).digest("hex");

  return <h3>{test}</h3>;
}
