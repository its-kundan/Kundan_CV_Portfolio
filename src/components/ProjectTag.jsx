import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500 bg-primary-500 hover:bg-primary-700"
    : "text-[#ADB7BE] border-slate-600 hover:border-white hover:text-white";

  return (
    <button
    className={`${buttonStyles} rounded-full border-2 px-3 py-1 text-sm cursor-pointer transition-colors`}
    onClick={() => onClick(name)}
  >
    {name}
  </button>

  );
};

export default ProjectTag;

// const ProjectTag = ({ name, onClick, isSelected }) => {
//   const buttonStyles = isSelected
//     ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-700" // active state
//     : "text-gray-400 border-gray-600 hover:border-gray-200 hover:text-white"; // inactive state

//   return (
   
//   );
// };

