import Achievements from './Achievement'; // Update the path as necessary

const achievementsList = [
  { metric: "LeetCode Problems Solved", value: "700", postfix: "+" },
  { metric: "LeetCode Rating", value: "1943" },
  { metric: "Coding Streak", value: "365", postfix: "+days" },
  { metric: "Open Source Contributions", value: "50", postfix: "+" },
  { metric: "Hackathons Participated", value: "10", postfix: "+" },
  { metric: "Global Hackathon Rank", value: "14", prefix: "#" },
  { metric: "Flipkart Grid Round Cleared", value: "1" },
  { metric: "Hacktoberfest Contributions", value: "2", postfix: "+years" },
  { metric: "Hack Squad Global Rank", value: "14", prefix: "#" },
  { metric: "Entrepreneur Selection", value: "Bihar Innovation" },
  { metric: "ISRO Funded Project", value: "Landslide Detection" },
  { metric: "Event Organized", value: "Dershnam" },
  { metric: "CodeChef Rating", value: "2", postfix: "-star" },
];


export default function App() {
  return (
    <div>
      <Achievements achievements={achievementsList} />
    </div>
  );
}
