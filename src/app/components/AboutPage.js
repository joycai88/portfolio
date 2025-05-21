export default function AboutPage() {
  return (
    <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-6 rounded-lg border-2 border-green-700">
      <h2 className="text-3xl font-bold text-green-800 mb-6">About Me</h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <div className="bg-amber-100 p-4 rounded-lg border-2 border-amber-600 shadow-md">
            <h3 className="text-xl font-bold text-amber-800 mb-2">Character Stats</h3>
            
            <div className="mb-2">
              <div className="flex justify-between mb-1">
                <span className="font-bold text-amber-700">Coding</span>
                <span className="text-amber-700">Level 10</span>
              </div>
              <div className="w-full bg-amber-200 rounded-full h-3">
                <div className="bg-amber-600 h-3 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            
            <div className="mb-2">
              <div className="flex justify-between mb-1">
                <span className="font-bold text-amber-700">Design</span>
                <span className="text-amber-700">Level 8</span>
              </div>
              <div className="w-full bg-amber-200 rounded-full h-3">
                <div className="bg-amber-600 h-3 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            
            <div className="mb-2">
              <div className="flex justify-between mb-1">
                <span className="font-bold text-amber-700">Problem Solving</span>
                <span className="text-amber-700">Level 9</span>
              </div>
              <div className="w-full bg-amber-200 rounded-full h-3">
                <div className="bg-amber-600 h-3 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-bold text-amber-700">Teamwork</span>
                <span className="text-amber-700">Level 9</span>
              </div>
              <div className="w-full bg-amber-200 rounded-full h-3">
                <div className="bg-amber-600 h-3 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:w-2/3">
          <div className="bg-green-100 p-4 rounded-lg border-2 border-green-600 shadow-md mb-4">
            <h3 className="text-xl font-bold text-green-800 mb-2">My Story</h3>
            <p className="mb-3 text-black">
              I started my journey in Computer Science at UBC only having coded more than a few lines of HTML. Now I am able to develop full-stack applications and write code that makes a meaningful impact on the world.
            </p>
            <p className="text-black">
              I specialize in building responsive web applications with React and JavaScript. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or designing user interfaces that bring joy to people's digital experiences.
            </p>
          </div>
          
          <div className="bg-blue-100 p-4 rounded-lg border-2 border-blue-600 shadow-md">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Education</h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-start">
                <div className="bg-blue-200 p-2 rounded-md mr-3">
                  <span className="font-bold text-blue-800">BS</span>
                </div>
                <div>
                  <p className="font-bold text-blue-800">Bachelor of Science in Computer Science</p>
                  <p className="text-blue-700">University of British Columbia, 2026</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-200 p-2 rounded-md mr-3">
                  <span className="font-bold text-blue-800">BA</span>
                </div>
                <div>
                  <p className="font-bold text-blue-800">Minor in Arts, Psychology</p>
                  <p className="text-blue-700">University of British Columbia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}