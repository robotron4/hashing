import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="py-10">
      <Link to={`/`} className="px-12 hover:text-accent-color">
        Home
      </Link>
      <Link to={`sha1`} className="px-12 hover:text-accent-color">
        SHA1
      </Link>
      <Link to={`sha256`} className="px-12 hover:text-accent-color">
        SHA256
      </Link>
    </div>
  );
}
