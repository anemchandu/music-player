import Adsense from "@/app/components/Adsense";
import React from "react";

function SongsSearchlayout({ children }) {
  return (
    <>
      <Adsense />
      {children}
    </>
  );
}

export default SongsSearchlayout;
