import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import sha256 from "crypto-js/sha256";
import SHA256 from "crypto-js/sha256";

function App() {
  const [count, setCount] = useState(0);
  console.log("hello = " + SHA256("hello"));
  return (
    <>
      <div>cwegbverfve</div>{" "}
    </>
  );
}

export default App;
