"use client";

import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Influencer() {
  const onEnd = () => {
    window.location.assign(
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    );
  };

  return (
    <div className="min-h-screen bg-primary flex flex-col  items-center py-8 md:py-24">
      <div className="min-h-max bg-primary flex-1 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-1 md:mb-8 md:text-5xl text-center">
          E aí, Maria Clara!
        </h1>
        <ReactPlayer
          url={"https://vimeo.com/914235536"}
          onEnded={onEnd}
          height={600}
          width={300}
          controls
        />
      </div>
      <h1 className="font-berlim text-3xl md:text-6xl justify-self-end text-center">
        MOK THE POKE
      </h1>
    </div>
  );
}
