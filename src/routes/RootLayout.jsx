import { Outlet, Link } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="bg-background h-screen text-zinc-50 flex flex-row-reverse">
      <div className="basis-4/5 tracking-wider">
        <h1 className="text-3xl my-12 text-center tracking-wider">
          Tool for hash functions
        </h1>
        <Outlet />
      </div>
      <div className="basis-1/5 flex flex-col my-10">
        <Link to={`sha1`} className="my-10">
          SHA1
        </Link>
        <Link to={`sha256`} className="my-10">
          SHA256
        </Link>
      </div>
    </div>
  );
}
