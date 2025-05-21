export default function HomePage() {
  return (
    <div
      className="flex flex-col md:flex-row items-center bg-amber-50 p-6 rounded-lg border-2 border-yellow-700"
    >
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Hi, I'm Joy!</h2>
        <div className="bg-yellow-100 p-4 rounded-lg border-2 border-yellow-600 mb-4 shadow-md">
          <p className="text-lg text-blue-900">
            Welcome to my personal website! It's still very much in development but I hope to better showcase my skills here.
          </p>
        </div>
        <p className="text-blue-800 mb-4">
          I love playing Stardew Valley, so my personal website is inspired by my farm.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg border border-blue-300">React</span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-lg border border-green-300">JavaScript</span>
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-lg border border-purple-300">Next.js</span>
        </div>
      </div>
    </div>
  );
}