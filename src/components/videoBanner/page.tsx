import React from "react";

export default function VideoBanner() {
  return (
    <div>
      <div className="max-w-[1046px] mx-auto">
        <iframe
          className="w-full h-[588px]"
          src="https://www.youtube.com/embed/7gquYRxLMFI?si=S7E_iDRbr-b1dZef"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
}
