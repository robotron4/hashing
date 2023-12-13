import { useState } from "react";
import "./App.css";
import hash from 'hash.js';
import CreateHash from "./CreateHash";

function App() {  
  const [count, setCount] = useState(0);
  const test = hash.sha256().update('ewafew').digest('hex');

  return (
    <>
      <CreateHash text='hello' />
    </>
  );
}

export default App;
