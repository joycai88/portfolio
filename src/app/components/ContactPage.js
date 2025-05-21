export default function ContactPage() {
  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg border-2 border-blue-700">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Contact Me</h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <div className="bg-green-100 p-5 rounded-lg border-2 border-green-400 shadow-md mb-6">
            <h3 className="text-xl font-bold text-green-800 mb-3">Find Me Around Town</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="bg-green-200 p-2 rounded-full mr-3">
                  <span className="font-bold text-green-700">📧</span>
                </div>
                <span className="text-green-800">joycai.0205@gmail.com</span>
              </div>
              
              <div className="flex items-center">
                <div className="bg-green-200 p-2 rounded-full mr-3">
                  <span className="font-bold text-green-700">💼</span>
                </div>
                <span className="text-green-800">linkedin.com/in/joycai0205/</span>
              </div>
              
              <div className="flex items-center">
                <div className="bg-green-200 p-2 rounded-full mr-3">
                  <span className="font-bold text-green-700">💻</span>
                </div>
                <span className="text-green-800">github.com/joycai88</span>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-100 p-5 rounded-lg border-2 border-amber-400 shadow-md">
            <h3 className="text-xl font-bold text-amber-800 mb-3">Availability</h3>
            <p className="text-amber-700 mb-2">
              Currently seeking Fall 2025 internships!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}