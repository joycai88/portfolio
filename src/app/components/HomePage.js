import { useEffect, useState } from "react";
import AboutPage from "./AboutPage";

export default function HomePage() {
    
    const interests = ["ai", "full-stack development", "databases", "machine learning", "innovative technologies", "algorithm design", "healthcare"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % interests.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

  return (
    <div className="flex flex-col md:flex-row p-6">
      <div className="md:w-1/2">
        <div className="h-screen w-screen flex flex-col items-start justify-center">
            <h1 className="text-3xl font-bold text-black mb-4">Hi, I'm Joy!</h1>
            <h2 className="text-black">and i'm a software engineer</h2>
            <h2 className="text-black">who's interested in {" "}
                <span className="font-semibold text-blue-700 transition-opacity duration-500 ease-in-out">
                    {interests[index]}</span>
            </h2>
        </div>
        <AboutPage />
      </div>
    </div>
  );
}