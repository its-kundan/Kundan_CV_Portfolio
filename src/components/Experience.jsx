import { Timeline } from "@/components/ui/timeline";

const experienceData = [
  {
    id: 1,
    title: "Software Development Intern at Onlinejaoo.com",
    period: "Jan 2024 - Jun 2024",
    content: (
      <div>
        <ul className="list-disc list-inside text-neutral-200 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          <li>Redesigned the database system to adopt PostgreSQL instead of SQL for cost-effective cloud deployment.</li>
          <li>Worked on researching and selecting CockroachDB for its serverless model during the internship.</li>
          <li>Developed features for client-facing applications using MERN stack and AWS.</li>
          <li>Enhanced application performance by implementing optimized database queries.</li>
          <li>Collaborated with cross-functional teams for seamless project integration.</li>
        </ul>
        <div className="flex flex-wrap gap-2">
          {["PostgreSQL", "MongoDB", "Node.js", "AWS"].map((skill) => (
            <span key={skill} className="px-2 py-1 rounded-full bg-blue-500 text-white">{skill}</span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Full-Stack Developer at Freelance Projects",
    period: "Jun 2022 - Present",
    content: (
      <div>
        <ul className="list-disc list-inside text-neutral-200 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          <li>Built scalable web applications using the MERN stack, integrating backend APIs and modern UI libraries.</li>
          <li>Deployed and managed production environments using AWS and Docker.</li>
          <li>Implemented authentication and role-based access systems for secure applications.</li>
          <li>Focused on improving website performance using optimized React state management.</li>
          <li>Explored and implemented Socket.io for real-time communication in chat applications.</li>
        </ul>
        <div className="flex flex-wrap gap-2">
          {["React", "Node.js", "Express", "Socket.io", "AWS"].map((skill) => (
            <span key={skill} className="px-2 py-1 rounded-full bg-blue-600 text-white">{skill}</span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "ECE Final Year Project: Landslide Detection System",
    period: "Aug 2023 - May 2024",
    content: (
      <div>
        <ul className="list-disc list-inside text-neutral-200 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          <li>Developed a landslide detection system funded by ISRO, integrating ML models and sensors.</li>
          <li>Implemented real-time data collection and analysis using hardware-software interfacing.</li>
          <li>Worked on Arduino coding and ESP modules to ensure reliable sensor communication.</li>
          <li>Designed simulation environments to test hardware compatibility with OpenCV.</li>
          <li>Produced documentation detailing system design and testing methodologies.</li>
        </ul>
        <div className="flex flex-wrap gap-2">
          {["Machine Learning", "Arduino", "OpenCV", "Python"].map((skill) => (
            <span key={skill} className="px-2 py-1 rounded-full bg-orange-500 text-white">{skill}</span>
          ))}
        </div>
      </div>
    ),
  }
];

export default function Experience() {
  return (
    <div className="w-full">
      <Timeline data={experienceData} />
    </div>
  );
}
