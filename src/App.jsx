import { useState } from "react";
import hash from "hash.js";
import CreateHash from "./CreateHash";

function App() {
  const [text, setText] = useState("");

  const test = hash.sha256().update("ewafew").digest("hex");

  return (
    <>
      <body className="bg-zinc-700 h-screen text-zinc-50 flex flex-col">
        <h1 className="text-2xl mx-auto my-8 tracking-wider">
          Tool for hash functions
        </h1>
        <input
          type="text"
          value={text}
          className="text-zinc-900 w-1/4 mx-auto"
          onChange={(e) => setText(e.target.value)}
        />
        <CreateHash text={text} />
      </body>
    </>
  );
}

export default App;
