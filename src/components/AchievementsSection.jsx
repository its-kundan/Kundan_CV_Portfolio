import Achievements from './Achievement'; // Update the path as necessary

const achievementsList = [
  { metric: "LeetCode Problems Solved", value: "600", postfix: "+" },
  { metric: "LeetCode Rating", value: "1943" },
  { metric: "Coding Streak", value: "365", postfix: "+days" },
  { metric: "Open Source Contributions", value: "50", postfix: "+" },
  { metric: "Hackathons Participated", value: "10", postfix: "+" },
  { metric: "Global Hackathon Rank", value: "14", prefix: "#" },
 
];

export default function App() {
  return (
    <div>
      <Achievements achievements={achievementsList} />
    </div>
  );
}
