import Link from "next/link";
import { useRouter } from "next/navigation";

const NavLink = ({ href, title, onClose }) => {
  const router = useRouter();

  const handleClick = () => {
    // Close mobile menu if onClose function is provided
    if (onClose) {
      onClose();
    }
    
    // For smooth scrolling to sections
    if (href.startsWith('/#')) {
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
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
