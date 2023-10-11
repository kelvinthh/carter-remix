export default function Header() {
  return (
    // The real website left bar does not scale at small screen
    // So I add a little breakpoint here just to give more space to content at sm
    <header className="top-0 z-10 flex h-12 animate-fade flex-row items-center justify-between border-indigo-700 bg-indigo-950 px-4 text-white transition-all animate-ease-in-out sm:left-0 sm:h-full sm:min-h-screen sm:w-24 sm:flex-col sm:justify-center sm:border-r-2 sm:px-0 sm:py-6">
      {/* Icon */}
      <div className="h-10 w-10 animate-fade-right rounded-full bg-black animate-delay-200 sm:mb-auto" />
      {/* Main button group */}
      <div className="flex animate-fade-right flex-row space-x-4 animate-delay-500 animate-ease-in-out sm:mt-36 sm:flex-col sm:space-x-0 sm:space-y-8">
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
      </div>
      {/* Spacer */}
      <div className="hidden flex-grow bg-white sm:flex" />
      {/* Bottom buttons */}
      <div className="flex animate-fade-right flex-row items-center space-x-4 animate-delay-700 animate-ease-in-out sm:flex-col sm:space-x-0 sm:space-y-4">
        <button className="flex animate-pulse items-center justify-center rounded-lg bg-white p-2 sm:animate-wiggle-more sm:animate-infinite">
          <span className="bg-gradient-to-r from-blue-500 from-30% via-green-500 to-cyan-500 bg-clip-text text-xs font-bold text-transparent sm:text-base">
            Get Pro
          </span>
        </button>
        <div className="h-8 w-8 rounded-full bg-white sm:mb-auto" />
      </div>
    </header>
  );
}
