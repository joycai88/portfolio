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
      description: "Worked on Blackberry x AWS project IVY Edge",
      achievements: [
        "Automated and edited over 100 test cases using Python, contributing to a more efficient testing process",
        "Designed and implemented test cases for new features for IVY Edge (an automotive software that provides normalized data from vehicle sensors) from C/C++ code",
        "Performed new feature and functional testing on both QNX and Linux environments to ensure product functionality, created defects as required based off test results. Flashed BSP images on hardware boards to set up environment"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg border-2 border-yellow-700">
      <h2 className="text-3xl font-bold text-yellow-800 mb-6">Work Experience</h2>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white p-5 rounded-lg border-2 border-yellow-400 shadow-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
              <h3 className="text-xl font-bold text-yellow-800">{exp.title}</h3>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                {exp.period}
              </span>
            </div>
            <p className="text-yellow-700 font-semibold mb-3">{exp.company}</p>
            <p className="text-gray-700 mb-4">{exp.description}</p>
            
            <div className="bg-amber-50 p-3 rounded-md border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-2">Key Achievements:</h4>
              <ul className="list-disc list-inside space-y-1">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-700">{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}