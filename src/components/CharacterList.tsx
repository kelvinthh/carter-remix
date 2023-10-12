function CharTag(tag: string) {
  return (
    <p className="rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 px-2 text-xs font-medium py-1">
      {tag}
    </p>
  );
}

export default function CharacterList() {
  return (
    <div className="h-auto w-full columns-1 items-center justify-center gap-4 space-y-4 px-8 sm:columns-2 lg:columns-3 xl:columns-4">
      {Array.from({
        length: 20,
      }).map((_, index) => {
        const width = Math.floor(Math.random() * 200) + 600; // Random width between 200 and 300

        const height = Math.floor(Math.random() * 200) + 800; // Random height between 300 and 500

        return (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
          >
            <div className="absolute bottom-0 hidden w-full flex-col items-start justify-center space-y-1 bg-black bg-opacity-50 px-2 py-4 group-hover:flex group-hover:animate-fade">
              <p className="font-bold text-lg">Character Name</p>
              <div className="flex flex-wrap gap-x-2 gap-y-1">
                {CharTag("Tag S.")}
                {CharTag("Tag Mid")}
                {CharTag("Tag Longer")}
              </div>
            </div>
            <img
              className="w-full"
              src={`https://picsum.photos/${width}/${height}?random=${
                index + 1
              }`}
              alt="Random"
            />
          </div>
        );
      })}
    </div>
  );
}
