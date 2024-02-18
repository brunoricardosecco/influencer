"use client";

import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Influencer() {
  const onEnd = () => {
    window.location.replace(
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    );
  };
  return (
    <div className="min-h-screen bg-primary flex flex-col items-center py-24 relative">
      <h1 className="text-7xl font-bold mb-8">E aí, Cleiton!</h1>
      <ReactPlayer
        url={"https://vimeo.com/90509568"}
        controls
        onEnded={onEnd}
      />
      <h1 className="font-berlim text-5xl absolute bottom-24">MOK THE POKE</h1>
    </div>
  );
}
