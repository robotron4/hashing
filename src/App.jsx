import { useState } from "react";
import "./App.css";
import SHA256 from "crypto-js/sha256";
import CreateHash from "./CreateHash";
import hash from 'hash.js';
function App() {  
  const [count, setCount] = useState(0);
  const test = hash.sha256().update('ewafew').digest('hex');
  const something = SHA256('something');
  return (
    <>xwfws {test}
    </>
  );
}

export default App;
