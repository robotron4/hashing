import hash from "hash.js";
import InputVal from "./components/InputVal";
import { useState } from "react";

export default function Sha1() {
  const [text, setText] = useState(null);

  return (
    <>
      <h2 className="text-2xl font-semibold mx-auto my-2 tracking-wider w-1/3 underline underline-offset-8 mt-6">
        SHA1 Algorithm
      </h2>
      <p className="text-base mx-auto my-2 w-1/3 ">
        SHA-1 or Secure Hash Algorithm 1 is a cryptographic algorithm which
        takes an input and produces a 160-bit (20-byte) hash value. This hash
        value is known as a message digest. This message digest is usually then
        rendered as a hexadecimal number which is 40 digits long. It is a U.S.
        Federal Information Processing Standard and was designed by the United
        States National Security Agency. SHA-1 is now considered insecure since
        2005. Major tech giants browsers like Microsoft, Google, Apple and
        Mozilla have stopped accepting SHA-1 SSL certificates by 2017. To
        calculate cryptographic hashing value in Java, MessageDigest Class is
        used, under the package java.security.
      </p>

      <p className="text-lg mx-auto my-2 tracking-wider w-1/3 ">Input:</p>
      <input
        type="text"
        placeholder="enter some text ... "
        value={text}
        className="text-zinc-50 w-1/3 mx-auto h-24 text-center bg-background-soft rounded-xl"
        onChange={(e) => setText(e.target.value)}
      />
      <p className="text-lg mx-auto my-2 tracking-wider w-1/3">Output:</p>

      <div className="mx-auto w-1/3 text-center border-4 p-5 rounded-xl border-background-soft mb-8">
        {text != null && <h3>{hash.sha1().update(text).digest("hex")}</h3>}
      </div>
    </>
  );
}
