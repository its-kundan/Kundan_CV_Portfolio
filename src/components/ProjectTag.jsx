import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500 bg-primary-500 hover:bg-primary-700"
    : "text-[#ADB7BE] border-slate-600 hover:border-white hover:text-white";

  return (
  //   <button
  //   className={`${buttonStyles} rounded-full border-2 px-3 py-1 text-sm cursor-pointer transition-colors`}
  //   onClick={() => onClick(name)}
  // >
  //   {name}
  // </button>
<button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={() => onClick(name)}>
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
  {name}
  </span>
</button>

  );
};

export default ProjectTag;

