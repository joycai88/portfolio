export default function ProjectsPage() {
  const projects = [
    {
      title: "AI Skincare Diary",
      description:
        "A React + Vite + TypeScript web application that allows you to track skincare products and routines, with a built in AI dermatologist to answer any questions.",
      tags: ["React", "AWS Lambda", "Firebase", "OpenAI API", "AWS S3", "PostgreSQL", "Serverless", "Tailwind CSS"],
      image: "skincare_diary.png",
      github: "https://github.com/joycai88/skincare-diary",
      demo: ""
    },
    {
      title: "Food Dash for Food Stash (YouCode 2025)",
      description:
        "Route delivery optimizer for Food Stash Vancouver - SAP case",
      tags: ["React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Google API", "Axios", "Express", "Node.js"],
      image: "Food_Dash.png",
      github: "https://github.com/Beta-test-initiation/bananabreadmatcha",
      demo: "https://devpost.com/software/food-dash-for-food-stash"
    },
    {
      title: "Dating App Dashboard",
      description: "Dating App dashboard to manage users and see matches. Project mainly made for exploring complex queries and connecting a user-friendly UI with the database.",
      tags: ["Oracle"],
      image: "heart_logo.png",
      github: "https://github.com/joycai88/CPSC-304-Dating-App",
      demo: ""
    },
    {
      title: "UBC Campus Explorer",
      description: "UBC Campus Explorer web application, using UBC rooms dataset to map rooms and generate insights such as walking distance between rooms. Includes custom loading, storage, and query functions written in TypeScript.",
      tags: ["TypeScript", "React", "Google API", "Axios", "Express"],
      image: "campus_explorer_ss.png",
      github: "https://github.com/joycai88/campus-explorer",
      demo: "https://www.youtube.com/watch?v=-_0_mi4_U5s"
    },
    {
      title: "Data Science Study",
      description: "Using the Contraceptive method used among Indonesian women dataset to create a KNN Classification Model",
      tags: ["Python", "Pandas", "Numpy", "Sklearn"],
      image: "ds_project.png",
      github: "https://github.com/kennaroozendaal/DSCI-100-Group-Project-15-/tree/main",
      demo: "https://github.com/kennaroozendaal/DSCI-100-Group-Project-15-/blob/main/Project/Group15_report.ipynb"
    },
    {
      title: "Student Expenses Tracker",
      description: "Built using Java, includes both a console version and Java Swing GUI.",
      tags: ["Java"],
      image: "UML_Design_Diagram.png",
      github: "https://github.com/joycai88/Financial-Tracker-App/tree/main/project_c7o2r",
      demo: ""
    },
  ];

  return (
    <div className="">
      <h2 className="text-3xl font-bold text-black mb-6">My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg border-2 border-black shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover rounded-md mb-3"
            />
            <h3 className="text-xl font-bold text-black mb-2">
              {project.title}
            </h3>
            <p className="text-gray-700 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300"
            >
              GitHub
            </a>
            {project.demo !== "" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300 ml-5"
              >
                Demo
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
