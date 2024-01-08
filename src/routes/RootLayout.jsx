import { Outlet, Link } from "react-router-dom";
import Navbar from "../Navbar";

export default function RootLayout() {
  return (
    <div className="bg-background h-screen text-zinc-50 flex flex-col">
      <Navbar />
      <h1 className="text-3xl my-12 text-center tracking-wider">
        Tool for hash functions
      </h1>
      <Outlet />
    </div>
  );
}
