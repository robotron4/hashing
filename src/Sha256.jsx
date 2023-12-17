import hash from "hash.js";

export default function CreateHash({ text }) {
  return (
    <>
      <h2 className="text-2xl font-semibold mx-auto my-2 tracking-wider w-1/3 underline underline-offset-8 mt-6">
        SHA 256 Algorithm
      </h2>
      <p className="text-base mx-auto my-2 w-1/3 ">
        SHA-256, which stands for secure hash algorithm 256, is a cryptographic
        hashing algorithm (or function) that’s used for message, file, and data
        integrity verification. It’s part of the SHA-2 family of hash functions
        and uses a 256-bit key to take a piece of data and convert it into a
        new, unrecognizable data string of a fixed length. This string of random
        characters and numbers, called a hash value, is also 256 bits in size.
      </p>
      <p className="text-lg mx-auto my-2 tracking-wider w-1/3">Output:</p>

      <div className="mx-auto w-1/3 text-center border-4 p-5 rounded-xl border-background-soft mb-6">
        {text != null && <h3>{hash.sha256().update(text).digest("hex")}</h3>}
      </div>
    </>
  );
}
