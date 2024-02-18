import React from "react";
import SearchBox from "./components/SearchBox";

export default function SearchLayout({ children }) {
  return (
    <>
      <SearchBox />
      {children}
    </>
  );
}
