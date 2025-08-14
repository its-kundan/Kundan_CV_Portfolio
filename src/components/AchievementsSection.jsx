import Achievements from './Achievement';

const achievementsList = [
  // Coding & Problem Solving
  { 
    metric: "LeetCode Problems Solved", 
    value: "700", 
    postfix: "+",
    category: "coding",
    icon: "💻",
    description: "Consistent problem-solving practice"
  },
  { 
    metric: "LeetCode Rating", 
    value: "1943", 
    category: "coding",
    icon: "⭐",
    description: "Competitive programming excellence"
  },
  { 
    metric: "Coding Streak", 
    value: "365", 
    postfix: "+ days",
    category: "coding",
    icon: "🔥",
    description: "Unwavering dedication to coding"
  },
  { 
    metric: "CodeChef Rating", 
    value: "2", 
    postfix: "-star",
    category: "coding",
    icon: "🏆",
    description: "Competitive coding achievements"
  },
  
  // Open Source & Community
  { 
    metric: "Open Source Contributions", 
    value: "50", 
    postfix: "+",
    category: "community",
    icon: "🌐",
    description: "Active open source participation"
  },
  { 
    metric: "Hacktoberfest Contributions", 
    value: "2", 
    postfix: "+ years",
    category: "community",
    icon: "🎃",
    description: "Annual open source celebration"
  },
  
  // Hackathons & Competitions
  { 
    metric: "Hackathons Participated", 
    value: "10", 
    postfix: "+",
    category: "competitions",
    icon: "🚀",
    description: "Innovation and rapid prototyping"
  },
  { 
    metric: "Global Hackathon Rank", 
    value: "14", 
    prefix: "#",
    category: "competitions",
    icon: "🌍",
    description: "International recognition"
  },
  { 
    metric: "Hack Squad Global Rank", 
    value: "14", 
    prefix: "#",
    category: "competitions",
    icon: "⚡",
    description: "Team collaboration excellence"
  },
  
  // Projects & Innovation
  { 
    metric: "Flipkart Grid Round Cleared", 
    value: "1",
    category: "projects",
    icon: "🛒",
    description: "Corporate challenge success"
  },
  { 
    metric: "ISRO Funded Project", 
    value: "Landslide Detection",
    category: "projects",
    icon: "🛰️",
    description: "Government research initiative"
  },
  
  // Leadership & Events
  { 
    metric: "Entrepreneur Selection", 
    value: "Bihar Innovation",
    category: "leadership",
    icon: "💡",
    description: "Innovation ecosystem recognition"
  },
  { 
    metric: "Event Organized", 
    value: "Dershnam",
    category: "leadership",
    icon: "🎪",
    description: "Community event leadership"
  },
];

export default function AchievementsSection() {
  return (
    <div className="relative overflow-hidden">
      <Achievements achievements={achievementsList} />
    </div>
  );
}
