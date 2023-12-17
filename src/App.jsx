import { useState } from "react";
import SHA256 from "./Sha256";
import SHA1 from "./Sha1";

function App() {
  const [text, setText] = useState(null);

  return (
    <>
      <body className="bg-background h-screen text-zinc-50 flex flex-col">
        <h1 className="text-3xl mx-auto my-12 tracking-wider">
          Tool for hash functions
        </h1>
        <p className="text-lg mx-auto my-2 tracking-wider w-1/3 ">Input:</p>
        <input
          type="text"
          placeholder="enter some text ... "
          value={text}
          className="text-zinc-50 w-1/3 mx-auto h-24 text-center bg-background-soft rounded-xl"
          onChange={(e) => setText(e.target.value)}
        />
        <SHA256 text={text} />
        <SHA1 text={text} />
      </body>
    </>
  );
}

export default App;
