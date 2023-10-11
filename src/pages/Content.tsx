import { useState, useEffect, useRef } from "react";
import { AiOutlineToTop } from "react-icons/ai";
import HighlightIcon from "../components/HighlightIcon";

export default function Content() {
  const [scrollButton, setScrollButton] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Keep track of the scroll pos
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", toggleVisibility);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", toggleVisibility);
      }
    };
  }, [containerRef]);

  // Function to handle the scroll event and set the visibility state
  // Window object does not work because this is a overflow container

  const toggleVisibility = () => {
    const container = containerRef.current;
    if (container && container.scrollTop > 400) {
      setScrollButton(true);
    } else {
      setScrollButton(false);
    }
  };

  return (
    <div
      className="flex h-screen w-full animate-fade flex-col items-center overflow-y-auto bg-black pb-16 text-white animate-delay-500"
      ref={containerRef}
    >
      {/* Scroll to top button */}
      <button
        className={`fixed bottom-8 right-8 z-50 rounded-full bg-violet-700 p-4 opacity-70 drop-shadow transition-all duration-500 hover:scale-110 hover:opacity-100 sm:bottom-16 ${
          !scrollButton && `hidden cursor-default`
        }`}
        onClick={() => {
          if (containerRef.current) {
            containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
      >
        <AiOutlineToTop size="1.75em" color="white" />
      </button>

      {/* Earn $1000 Text */}
      <button className="group w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 py-1 text-center font-bold">
        <p className="animate-pulse transition-all group-hover:animate-none">
          Share Your Characters & Earn up to $1,000! 🎉
        </p>
      </button>

      {/* A heading text block */}
      <div className="flex w-full flex-col items-center justify-center space-y-2 py-16 text-center font-light sm:space-y-4">
        <h1 className="animate-fade-down text-4xl font-bold animate-delay-[300ms] animate-ease-in-out sm:text-5xl md:text-6xl">
          Chat With{" "}
          <span className="animate-pulse bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Imaginary
          </span>{" "}
          Characters
        </h1>
        <h2 className="animate-fade-down text-xl font-medium animate-delay-[500ms] animate-duration-1000 animate-ease-in-out sm:text-2xl">
          More than just living in your head ⚡️
        </h2>
        <h3 className="animate-fade-down px-8 text-sm animate-delay-[500ms] animate-duration-1000 animate-ease-in-out sm:text-base">
          Wanna talk to Gordon Freeman? I wish he could talk too.
          <br />
          How about creating a Gordon who can actually talk while he swings his
          crowbar?
        </h3>
      </div>

      {/* Highlight */}
      <div className="flex w-full animate-fade-up flex-col items-center bg-indigo-950/50 pt-8 text-center animate-delay-[800ms] animate-duration-1000 animate-ease-in-out">
        <h1 className="text-3xl font-bold">Characters Highlights</h1>
        <h2 className="font-light">
          Here are some of the best characters.
          <br />
          From us, and the community.
        </h2>
        <div className="flex min-h-[18rem] w-full flex-col items-center justify-center gap-8 py-8 sm:my-0 sm:flex-row">
          <HighlightIcon
            name="Gordon Freeman"
            imageUrl="https://combineoverwiki.net/images/thumb/2/2b/Gordon_bust_rtb2.jpg/250px-Gordon_bust_rtb2.jpg"
          />
          <HighlightIcon
            name="The G-Man"
            imageUrl="https://combineoverwiki.net/images/thumb/8/8d/HLA_G-Man_Cropped.jpg/250px-HLA_G-Man_Cropped.jpg"
          />
          <HighlightIcon
            name="Alyx Vance"
            imageUrl="https://combineoverwiki.net/images/thumb/f/f5/Alyx_Vance_Portrait.jpg/448px-Alyx_Vance_Portrait.jpg"
          />
        </div>
      </div>

      {/* List */}
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
      <h1>Test</h1>
    </div>
  );
}
