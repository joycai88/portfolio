import { FaJsSquare, FaPython, FaJava, FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiCplusplus, SiTailwindcss, SiExpress, SiPostman, SiMysql } from 'react-icons/si';

export default function AboutPage() {
  const storyData = [
    {
      year: "High School",
      text: "It was always my dream to become a doctor because I wanted to work with people and make an impact on the world. However, I quickly realized that medical school was not for me.",
    },
    {
      year: "2022",
      text: "First year at UBC in the Faculty of Science where I wrote my first lines of code in Computer Science courses. Although they were some of the most challenging courses I've ever taken, I knew I wanted to learn more and build more complex projects.",
    },
    {
      year: "2023",
      text: "Completed my first internship as a Software Test Developer. During that time, I gained a lot of valuable insights on the tech industry and software development lifecycle.",
    },
    {
      year: "2024",
      text: "Growing more as a software developer and learned a lot of new programming languages.",
    },
    {
        year: "2025",
        text: "Learning to apply the skills I've accumulated to create projects from end-to-end.",
    },
  ];

  return (
    <div className="">
      <h2 className="text-3xl font-bold text-black mb-6">My Story</h2>

      <div className="relative border-l-4 border-blue-700 pl-6 mb-10">
        {storyData.map((entry, index) => (
          <div key={index} className="mb-10 relative">
            <div className="absolute -left-[2.375rem] top-1 w-6 h-6 bg-blue-700 rounded-full border-4 border-white"></div>

            <h3 className="text-xl font-semibold text-black">
              {entry.year}
            </h3>
            <p className="text-black text-sm">{entry.text}</p>
          </div>
        ))}
      </div>

      <div className="">
          <h2 className="text-3xl font-bold text-black mb-6">Education</h2>
          <div className="flex flex-col gap-2">
            <div className="flex items-start">
              <div className="bg-gray-200 p-2 rounded-md mr-3">
                <span className="font-bold text-gray-800">BS</span>
              </div>
              <div>
                <p className="font-bold text-black">
                  Bachelor of Science in Computer Science
                </p>
                <p className="text-black">
                  University of British Columbia, 2022-2026
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-gray-200 p-2 rounded-md mr-3">
                <span className="font-bold text-gray-800">BA</span>
              </div>
              <div>
                <p className="font-bold text-black">
                  Minor in Arts, Psychology
                </p>
                <p className="text-black">University of British Columbia</p>
              </div>
            </div>
          </div>
      </div>

      <div className="mt-10">
  <h2 className="text-3xl font-bold text-black mb-6">Tech Stack</h2>
  <div className="flex flex-col gap-6">

    {/* Languages */}
    <div>
      <h3 className="text-xl font-semibold text-black mb-2">Languages</h3>
      <div className="flex flex-wrap gap-4 text-black items-center">
        <FaJsSquare title="JavaScript" className="text-yellow-500" size={24} />
        <SiTypescript title="TypeScript" className="text-blue-500" size={24} />
        <FaPython title="Python" className="text-blue-400" size={24} />
        <SiCplusplus title="C++" className="text-indigo-500" size={24} />
        <FaJava title="Java" className="text-red-500" size={24} />
        <SiMysql title="SQL" className="text-blue-700" size={24} />
      </div>
    </div>

    {/* Frameworks */}
    <div>
      <h3 className="text-xl font-semibold text-black mb-2">Frameworks</h3>
      <div className="flex flex-wrap gap-4 text-black items-center">
        <FaReact title="React" className="text-cyan-500" size={24} />
        <FaNodeJs title="Node.js" className="text-green-600" size={24} />
        <SiExpress title="Express" className="text-gray-800" size={24} />
        <SiTailwindcss title="Tailwind CSS" className="text-teal-400" size={24} />
      </div>
    </div>

    {/* Tools */}
    <div>
      <h3 className="text-xl font-semibold text-black mb-2">Tools</h3>
      <div className="flex flex-wrap gap-4 text-black items-center">
        <FaGitAlt title="Git" className="text-orange-600" size={24} />
        <FaGithub title="GitHub" className="text-black" size={24} />
        <SiPostman title="Postman" className="text-orange-400" size={24} />
      </div>
    </div>
  </div>
</div>
    </div>
  );
}
