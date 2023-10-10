export default function Header() {
  return (
    <header className="sticky left-0 z-10 flex min-h-screen flex-col items-center bg-violet-500 w-24 py-6 text-white">
      {/* Icon */}
      <div className="mb-auto h-10 w-10 animate-fade-right rounded-full bg-black" />
      {/* Main button group */}
      <div className="mt-36 flex animate-fade-right flex-col space-y-8 animate-delay-[300ms]">
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
      </div>
      {/* Spacer */}
      <div className="flex-grow bg-white" />
      {/* Bottom buttons */}
      <div className="flex flex-col items-center space-y-4 animate-fade-right animate-delay-500">
        <button className='bg-red-500 p-2'>Get Pro</button>
        <div className="mb-auto h-8 w-8 rounded-full bg-white" />
      </div>
    </header>
  );
}
