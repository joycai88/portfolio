import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="">
      <h2 className="text-3xl font-bold text-black mb-6">Contact Me</h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <div className="p-5 mb-6">
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="bg-blue-200 p-2 rounded-full mr-3">
                  <MdEmail className="text-blue-700" />
                </div>
                <a href="mailto:joycai.0205@gmail.com" className="text-black hover:underline">
                  joycai.0205@gmail.com
                </a>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-200 p-2 rounded-full mr-3">
                  <FaLinkedin className="text-blue-700" />
                </div>
                <a href="https://linkedin.com/in/joycai0205/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
                  linkedin.com/in/joycai0205/
                </a>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-200 p-2 rounded-full mr-3">
                  <FaGithub className="text-blue-700" />
                </div>
                <a href="https://github.com/joycai88" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
                  github.com/joycai88
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}