import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

export default function RootLayout() {
  const [text, setText] = useState(null);

  return (
    <body className="bg-background h-screen text-zinc-50 flex flex-col">
      <h1 className="text-3xl mx-auto my-12 tracking-wider">
        Tool for hash functions
      </h1>
      <Link to={`sha1`}>SHA1</Link>
      <Link to={`sha256`}>SHA256</Link>
      <Outlet />
    </body>
  );
}
