import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-gray-300 sm:text-xl rounded md:p-0 hover:text-white transition-all duration-300 relative group"
    >
      <span className="relative">
        {title}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
      </span>
    </Link>
  );
};

export default NavLink;
