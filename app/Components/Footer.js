
const Footer = () => {
  return (
    <footer className="Footer w-full bg-gray-800 text-white py-6 px-4 flex flex-col md:flex-row items-center justify-between shadow-md">
      <div className="flex items-center gap-3 mb-2 md:mb-0">
        <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor" />
        </svg>
        <span className="font-semibold text-lg tracking-tight">Skill Bridge</span>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
        <a href="#" className="hover:text-blue-400 transition">Home</a>
        <a href="#" className="hover:text-blue-400 transition">Learn</a>
        <a href="#" className="hover:text-blue-400 transition">Blog</a>
        <a href="#" className="hover:text-blue-400 transition">Portfolio</a>
        <a href="#" className="hover:text-blue-400 transition">Contact</a>
      </div>
      <div className="mt-4 md:mt-0 text-xs text-gray-400 text-center md:text-right w-full">
        &copy; {new Date().getFullYear()} Skill Bridge. All rights reserved.<br />
        <span className="inline-block mt-1">Made with <span className="text-red-500">&#10084;</span> by Skill Bridge Team</span>
      </div>
    </footer>
  )
}

export default Footer 
