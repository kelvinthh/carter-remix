export default function Header() {
  return (
    // The real website left bar does not scale at small screen
    // So I add a little breakpoint here just to give more space to content at sm
    <header className="left-0 top-0 z-10 flex h-full min-h-screen w-20 animate-fade flex-col items-center border-r-2 border-indigo-700 bg-indigo-950 py-6 text-white transition-all animate-ease-in-out sm:w-24">
      {/* Icon */}
      <div className="mb-auto h-10 w-10 animate-fade-right rounded-full bg-black animate-delay-200" />
      {/* Main button group */}
      <div className="mt-36 flex animate-fade-right flex-col space-y-8 animate-delay-500 animate-ease-in-out">
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
      </div>
      {/* Spacer */}
      <div className="flex-grow bg-white" />
      {/* Bottom buttons */}
      <div className="flex animate-fade-right flex-col items-center space-y-4 animate-delay-700 animate-ease-in-out">
        <button className="flex animate-bounce items-center justify-center rounded-lg bg-white p-2">
          <span className="bg-gradient-to-r from-blue-500 from-30% via-green-500 to-cyan-500 bg-clip-text text-xs font-bold text-transparent sm:text-base">
            Get Pro
          </span>
        </button>
        <div className="mb-auto h-8 w-8 rounded-full bg-white" />
      </div>
    </header>
  );
}
