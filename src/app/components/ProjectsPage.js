export default function ProjectsPage() {
  const projects = [
    {
      title: "AI Skincare Diary",
      description: "A React + Vite + TypeScript web application that allows you to track skincare products and routines, with a built in AI dermatologist to answer any questions.",
      tags: ["React", "AWS Lambda", "Firebase"],
      image: "skincare_diary.png"
    },
    {
      title: "Food Dash for Food Stash (YouCode 2025)",
      description: "Route delivery optimizer for Food Stack Vancouver - SAP case",
      tags: ["React", "Tailwind CSS", "PostgreSQL", "Google Maps API"],
      image: "/api/placeholder/300/200"
    },
    {
      title: "Dating App Dashboard",
      description: "Dating App dashboard to manage users and see matches",
      tags: ["Oracle"],
      image: "/api/placeholder/300/200"
    },
    {
      title: "UBC Campus Explorer",
      description: "UBC Campus Explorer web application",
      tags: ["TypeScript", "React", "Google Maps API"],
      image: "/api/placeholder/300/200"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border-2 border-purple-700">
      <h2 className="text-3xl font-bold text-purple-800 mb-6">My Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-4 rounded-lg border-2 border-purple-300 shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h3 className="text-xl font-bold text-purple-800 mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag, i) => (
                <span key={i} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-md text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors duration-300">
              View Project
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}