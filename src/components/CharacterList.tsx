import { useState, useEffect } from "react";

function CharTag(tag: string) {
  return (
    <p className="rounded-full border border-indigo-700 bg-black px-2 py-1 text-xs font-medium">
      {tag}
    </p>
  );
}

export default function CharacterList() {
  // Using useState and useEffect here to prevent refreshing
  // when image is out of viewport
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  useEffect(() => {
    const urls = Array.from({ length: 20 }).map((_, index) => {
      const width = Math.floor(Math.random() * 200) + 600;
      const height = Math.floor(Math.random() * 200) + 800;
      return `https://picsum.photos/${width}/${height}?random=${index + 1}`;
    });
    setImageUrls(urls);
  }, []);

  return (
    <div className="h-auto w-full columns-1 items-center justify-center gap-4 space-y-4 px-8 sm:columns-2 lg:columns-3 xl:columns-4">
      {imageUrls.map((url, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-2xl transition-all ease-in-out hover:-translate-y-1 hover:scale-105"
        >
          <div className="absolute bottom-0 hidden w-full flex-col items-start justify-center space-y-1 bg-black bg-opacity-70 px-2 py-4 group-hover:flex group-hover:animate-fade">
            <p className="text-lg font-bold">Character Name</p>
            <div className="flex flex-wrap gap-x-2 gap-y-1">
              {CharTag("Tag S.")}
              {CharTag("Tag Mid")}
              {CharTag("Tag Longer")}
            </div>
          </div>
          <img className="w-full" src={url} alt="Random" />
        </div>
      ))}
    </div>
  );
}
