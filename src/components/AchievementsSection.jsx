"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const achievementsList = [
  { metric: "LeetCode Problems Solved", value: "600", postfix: "+" },
  { metric: "LeetCode Rating", value: "1943" },
  { metric: "Coding Streak", value: "365", postfix: "+days" },
  { metric: "Open Source Contributions", value: "50", postfix: "+" },
  { metric: "Hackathons Participated", value: "10", postfix: "+" },
  { metric: "Global Hackathon Rank", value: "14", prefix: "#" },
  { metric: "Certifications Earned", value: "7" },
  { metric: "GitHub Repositories", value: "100", postfix: "+" },
  { metric: "AWS Cost-Effective Database Solutions Researched", value: "10" },
];

const AchievementsSection = () => {
  return (
    <div
      className="py-8 px-2 xl:gap-16 sm:py-16 xl:px-16 overflow-y-auto"
      style={{ maxHeight: "80vh" }}
    >
      <h1 className="text-4xl font-bold text-white mb-4 flex justify-center">
        Achievements
      </h1>
      <div className="sm:border-[#33353F] sm:border rounded-md py-4 px-4">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))" }}
        >
          {achievementsList.map((achievement, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4"
            >
              <h2
                className="text-white text-4xl font-bold"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "nowrap",
                }}
              >
                {achievement.prefix && (
                  <span style={{ marginRight: "4px" }}>{achievement.prefix}</span>
                )}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value, 10)}
                  locale="en-US"
                  style={{
                    display: "inline-block",
                    minWidth: "auto",
                  }}
                  configs={[
                    { mass: 1, tension: 180, friction: 12 },
                  ]}
                />
                {achievement.postfix && (
                  <span style={{ marginLeft: "4px" }}>{achievement.postfix}</span>
                )}
              </h2>
              <p className="text-[#7173b1] text-base">{achievement.metric}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
