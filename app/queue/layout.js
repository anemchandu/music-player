import React from "react";
import Adsense from "../components/Adsense";

function Queuelayout({ children }) {
  return (
    <>
      <Adsense />
      {children}
    </>
  );
}

export default Queuelayout;
