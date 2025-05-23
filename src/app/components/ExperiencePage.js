export default function ExperiencePage() {
  const experiences = [
    {
      title: "C++ Software Development Intern",
      company: "Safe Software",
      period: "January 2024 - August 2024",
      description: "Worked on FME engine - Geometry Team",
      achievements: [
        "Fixed bugs for coordinate systems and spatial geometry on the FME Engine team",
        "Improved code base by modernizing code for better performance, readability, and usage",
        "Collaborated with team to implement a new geometry algorithm that improved performance by 200%"
      ]
    },
    {
      title: "Software Test Development Student",
      company: "Blackberry QNX",
      period: "May 2023 - August 2023",
      description: "Worked on Blackberry x AWS product IVY Edge",
      achievements: [
        "Automated and edited over 100 test cases using Python, contributing to a more efficient testing process",
        "Designed and implemented test cases for new features for IVY Edge (an automotive software that provides normalized data from vehicle sensors) from C/C++ code",
        "Performed new feature and functional testing on both QNX and Linux environments to ensure product functionality, created defects as required based off test results. Flashed BSP images on hardware boards to set up environment"
      ]
    }
  ];

  const work = [
    {
      title: "Undergraduate Teaching Assistant",
      company: "The University of British Columbia",
      period: "September 2024 - April 2025",
      description: "Course: CPSC 110 - Introduction to Systematic Programming",
      achievements: [
      ]
    }
  ];

  return (
    <div className="">
      <h2 className="text-3xl font-bold text-black mb-6">Internships</h2>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white p-5 rounded-lg border-2 border-gray-400 shadow-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
              <h3 className="text-xl font-bold text-black">{exp.title}</h3>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                {exp.period}
              </span>
            </div>
            <p className="text-blue-800 font-semibold mb-3">{exp.company}</p>
            <p className="text-gray-700 mb-4">{exp.description}</p>
            
            <div className="bg-blue-50 p-3 rounded-md border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-2">Key Achievements:</h4>
              <ul className="list-disc list-inside space-y-1">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-700">{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-black mb-6 mt-6">Work Experience</h2>
      <div className="space-y-6">
        {work.map((exp, index) => (
          <div key={index} className="bg-white p-5 rounded-lg border-2 border-gray-400 shadow-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
              <h3 className="text-xl font-bold text-black">{exp.title}</h3>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                {exp.period}
              </span>
            </div>
            <p className="text-blue-800 font-semibold mb-3">{exp.company}</p>
            <p className="text-gray-700 mb-4">{exp.description}</p>
            
            <div className="bg-blue-50 p-3 rounded-md border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-2">Key Achievements:</h4>
              <ul className="list-disc list-inside space-y-1">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-700">{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      {/* Relevant Courses Section */}
      <h2 className="text-3xl font-bold text-black mb-6 mt-6">Relevant Courses</h2>
      <div className="space-y-6">

        {/* Computer Science Courses */}
        <div className="bg-white p-5 rounded-lg border-2 border-gray-400 shadow-md">
          <h3 className="text-xl font-bold text-black mb-3">Computer Science</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>2022W - CPSC 110: Computation, Programs, and Programming</li>
            <li>2022W - CPSC 121: Models of Computation</li>
            <li>2022W - CPSC 210: Software Construction</li>
            <li>2023W - CPSC 221: Basic Algorithms and Data Structures</li>
            <li>2024W - CPSC 320: Intermediate Algorithm Design and Analysis</li>
            <li>2024W - CPSC 310: Introduction to Software Engineering</li>
            <li>2024W - CPSC 213: Introduction to Computer Systems</li>
            <li>2024W - CPSC 304: Introduction to Relational Databases</li>
            <li>2024W - CPSC 344: Introduction to Human Computer Interaction Methods</li>
            <li>2025S - CPSC 330: Applied Machine Learning</li>
          </ul>
        </div>

        {/* Psychology Courses */}
        <div className="bg-white p-5 rounded-lg border-2 border-gray-400 shadow-md">
          <h3 className="text-xl font-bold text-black mb-3">Psychology</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>2022W - PSYC 101: Introduction to Biological and Cognitive Psychology</li>
            <li>2024W - PSYC 102: Introduction to Developmental, Social, Personality, and Clinical Psychology</li>
            <li>2023W - PSYC 207: Contemporary Topics in Biological and Cognitive Psychology</li>
            <li>2025S - PSYC 301: Brain Dysfunction and Recovery</li>
          </ul>
        </div>

        {/* Other Courses */}
        <div className="bg-white p-5 rounded-lg border-2 border-gray-400 shadow-md">
          <h3 className="text-xl font-bold text-black mb-3">Other</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>2022W - MATH 100: Differential Calculus with Applications</li>
            <li>2022W - MATH 101: Integral Calculus with Applications</li>
            <li>2023W - MATH 200: Calculus III</li>
            <li>2024W - MATH 221: Matrix Algebra</li>
            <li>2023W - STAT 251: Elementary Statistics</li>
            <li>2022W - DSCI 100: Introduction to Data Science</li>
            <li>2022W - SCIE 113: First-Year Seminar in Science</li>
            <li>2022W - NURS 180: Stress and Strategies to Promote Well Being</li>
            <li>2022W - PHYS 131: Energy and Waves (Lecture)</li>
          </ul>
        </div>

      </div>
    </div>
  );
}