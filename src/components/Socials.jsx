import { FaTwitter, FaGithub, FaLinkedin, FaYoutube, FaTelegram } from 'react-icons/fa';

const socialData = [
  {
    name: "Twitter",
    link: "https://twitter.com/kundan_k_",
    icon: <FaTwitter size={30} />,
    color: "text-blue-600 hover:text-blue-400",
  },
  {
    name: "GitHub",
    link: "https://github.com/its-kundan",
    icon: <FaGithub size={30} />,
    color: "text-gray-800 hover:text-gray-600",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/its-kundan/",
    icon: <FaLinkedin size={30} />,
    color: "text-blue-600 hover:text-blue-500",
  },
  {
    name: "Telegram",
    link: "https://t.me/kundan51k",
    icon: <FaTelegram size={30} />,
    color: "text-blue-600 hover:text-blue-500",
  },
  {
    name: "YouTube",
    link: "https://youtube.com/@kundan515k?si=QrOXDna3RXuwNT87",
    icon: <FaYoutube size={30} />,
    color: "text-red-600 hover:text-red-500",
  },
];

const SocialMediaIcons = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 space-y-4 p-2 z-51">
      {socialData.map((social, index) => (
        <div key={index} className="relative group">
          <a
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`block ${social.color} transition-transform transform hover:scale-110`}
          >
            {social.icon}
          </a>
          {/* Tooltip */}
          <span className="absolute right-10 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-black text-xs rounded-md py-1 px-2 transition-opacity duration-300 text-white">
            {social.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
