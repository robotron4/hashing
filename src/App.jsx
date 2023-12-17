import { useState } from "react";
import hash from "hash.js";
import CreateHash from "./CreateHash";

function App() {
  const [text, setText] = useState("");

  const test = hash.sha256().update("ewafew").digest("hex");

  return (
    <>
      <h1>Tool for hash functions</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <CreateHash text={text} />
    </>
  );
}

export default App;
