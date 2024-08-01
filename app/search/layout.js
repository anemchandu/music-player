import React from "react";
import Adsense from "../components/Adsense";
import SearchBox from "./components/SearchBox";

export default function SearchLayout({ children }) {
  return (
    <>
      <head>
        <Adsense />
      </head>
      <SearchBox />
      {children}
    </>
  );
}
