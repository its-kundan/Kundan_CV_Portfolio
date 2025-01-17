import { Timeline } from "@/components/ui/timeline";

const EducationData = [
  {
    id: 1,
    title: "Final Year",
    period: "2024 - 2025",
    content: (
      <div>
        <ul className="list-disc list-inside text-neutral-200 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          <li>
            Redesigned the database system to adopt PostgreSQL instead of SQL
            for cost-effective cloud deployment.
          </li>
          <li>
            Researched and selected CockroachDB for its serverless model during
            the internship.
          </li>
          <li>
            Developed features for client-facing applications using the MERN
            stack and AWS.
          </li>
          <li>
            Enhanced application performance by implementing optimized database
            queries.
          </li>
          <li>
            Collaborated with cross-functional teams for seamless project
            integration.
          </li>
          <li>
            Created the <strong>Medical Management</strong> project, a
            MERN-based system for medical record management.
          </li>
        </ul>
        <div className="flex flex-wrap gap-2">
          {["PostgreSQL", "MongoDB", "Node.js", "AWS", "MERN Stack"].map(
            (skill, index) => (
              <span
                key={index}
                className="px-2 py-1 rounded-full bg-blue-500 text-white"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "3rd Year",
    period: "2023 - 2024",
    content: (
      <div>
        <ul className="list-disc list-inside text-neutral-200 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          <li>
            Built scalable web applications using the MERN stack, integrating
            backend APIs and modern UI libraries.
          </li>
          <li>
            Deployed and managed production environments using AWS and Docker.
          </li>
          <li>
            Implemented authentication and role-based access systems for secure
            applications.
          </li>
          <li>
            Improved website performance using optimized React state management.
          </li>
          <li>
            Developed a <strong>Job Portal</strong> project, enabling users to
            find and post jobs.
          </li>
          <li>
            Explored and implemented Socket.io for real-time communication in
            chat applications.
          </li>
        </ul>
        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "Node.js",
            "Express",
            "Socket.io",
            "AWS",
            "Job Portal",
          ].map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-full bg-blue-600 text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "2nd Year",
    period: "2022 - 2023",
    content: (
      <div>
        <ul className="list-disc list-inside text-neutral-200 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          <li>
            Developed a landslide detection system funded by ISRO, integrating
            ML models and sensors.
          </li>
          <li>
            Implemented real-time data collection and analysis using
            hardware-software interfacing.
          </li>
          <li>
            Worked on Arduino coding and ESP modules to ensure reliable sensor
            communication.
          </li>
          <li>
            Designed simulation environments to test hardware compatibility with
            OpenCV.
          </li>
          <li>
            Created a <strong>Luminosity Drone</strong> project using OpenCV and
            Python to detect light sources.
          </li>
          <li>
            Produced documentation detailing system design and testing
            methodologies.
          </li>
        </ul>
        <div className="flex flex-wrap gap-2">
          {[
            "Machine Learning",
            "Arduino",
            "OpenCV",
            "Python",
            "Landslide Detection",
            "Luminosity Drone",
          ].map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-full bg-orange-500 text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "1st Year",
    period: "2021 - 2022",
    content: (
      <div>
        <ul className="list-disc list-inside text-neutral-200 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          <li>
            Developed a landslide detection system funded by ISRO, integrating
            ML models and sensors.
          </li>
          <li>
            Implemented real-time data collection and analysis using
            hardware-software interfacing.
          </li>
          <li>
            Worked on Arduino coding and ESP modules to ensure reliable sensor
            communication.
          </li>
          <li>
            Designed simulation environments to test hardware compatibility with
            OpenCV.
          </li>
          <li>
            Created a <strong>Luminosity Drone</strong> project using OpenCV and
            Python to detect light sources.
          </li>
          <li>
            Produced documentation detailing system design and testing
            methodologies.
          </li>
        </ul>
        <div className="flex flex-wrap gap-2">
          {[
            "Machine Learning",
            "Arduino",
            "OpenCV",
            "Python",
            "Landslide Detection",
            "Luminosity Drone",
          ].map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-full bg-orange-500 text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "12th Class",
    period: "",
    content: (
      <div>
        <ul className="list-disc list-inside text-neutral-200 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          <li>
            Excelled in Physics, Chemistry, and Mathematics, achieving a strong
            foundation for engineering studies.
          </li>
          <li>
            Actively participated in school-level science exhibitions and
            competitions.
          </li>
        </ul>
        <div className="flex flex-wrap gap-2">
          {["Physics", "Chemistry", "Mathematics"].map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-full bg-green-500 text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "11th Class",
    period: "",
    content: (
      <div>
        <ul className="list-disc list-inside text-neutral-200 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          <li>
            Built a strong understanding of advanced mathematical concepts and
            problem-solving techniques.
          </li>
          <li>
            Started exploring coding with basic programming languages like C and
            C++.
          </li>
        </ul>
        <div className="flex flex-wrap gap-2">
          {["Advanced Mathematics", "C", "C++"].map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-full bg-yellow-500 text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "10th Class",
    period: "",
    content: (
      <div>
        <ul className="list-disc list-inside text-neutral-200 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          <li>
            Secured high marks, laying a solid foundation in science and
            mathematics.
          </li>
          <li>
            Participated in various extracurricular activities, including
            quizzes and debates.
          </li>
        </ul>
        <div className="flex flex-wrap gap-2">
          {["Science", "Mathematics", "Quizzes", "Debates"].map(
            (skill, index) => (
              <button
                className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600"
                key={index}
              >
                <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                <span className="relative z-20">{skill}</span>
              </button>
              // <span
              //   key={index}
              //   className="px-2 py-1 rounded-full bg-purple-500 text-white"
              // >
              //   {skill}
              // </span>
            )
          )}
        </div>
      </div>
    ),
  },
];

export default function Education() {
  return (
    <div className="w-full">
      {/* <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10"> */}
      <h2 className="text-center mt-10 font-bold text-2xl md:text-5xl mb-4 text-white max-w-4xl">
        Education
      </h2>

      {/* </div> */}
      <Timeline data={EducationData} />
    </div>
  );
}
