import { FaTwitter, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

const SocialMediaIcons = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 space-y-4 p-2 z-50">
      {/* Twitter */}
      <div className="relative group">
        <a
          href="https://twitter.com/kundan_k_"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-blue-600 hover:text-blue-400 transition-transform transform hover:scale-110"
        >
          <FaTwitter size={30} />
        </a>
        {/* Tooltip */}
        <span className="absolute right-10 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-black text-xs rounded-md py-1 px-2 transition-opacity duration-300 text-white">
          Twitter
        </span>
      </div>

      {/* GitHub */}
      <div className="relative group">
        <a
          href="https://github.com/its-kundan"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-gray-800 hover:text-gray-600 transition-transform transform hover:scale-110"
        >
          <FaGithub size={30} />
        </a>
        {/* Tooltip */}
        <span className="absolute right-10 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-black text-xs rounded-md py-1 px-2 transition-opacity duration-300 text-white">
          GitHub
        </span>
      </div>

      {/* LinkedIn */}
      <div className="relative group">
        <a
          href="https://www.linkedin.com/in/its-kundan/"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-blue-600 hover:text-blue-500 transition-transform transform hover:scale-110"
        >
          <FaLinkedin size={30} />
        </a>
        {/* Tooltip */}
        <span className="absolute right-10 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-black text-xs rounded-md py-1 px-2 transition-opacity duration-300 text-white">
          LinkedIn
        </span>
      </div>

      {/* YouTube */}
      <div className="relative group">
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-red-600 hover:text-red-500 transition-transform transform hover:scale-110"
        >
          <FaYoutube size={30} />
        </a>
        {/* Tooltip */}
        <span className="absolute right-10 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-black text-xs rounded-md py-1 px-2 transition-opacity duration-300 text-white">
          YouTube
        </span>
      </div>
    </div>
  );
};

export default SocialMediaIcons;