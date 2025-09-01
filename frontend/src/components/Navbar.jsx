import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-400 font-semibold"
      : "hover:text-yellow-300";

  return (
    <nav className="bg-blue-900 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold tracking-wide">MegaOdds</h1>
      <div className="space-x-6">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/free-tips" className={linkClass}>Free Tips</NavLink>
        <NavLink to="/vip-tips" className={linkClass}>VIP Tips</NavLink>
        <NavLink to="/livescores" className={linkClass}>Livescores</NavLink>
        <NavLink to="/blog" className={linkClass}>Blog</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
