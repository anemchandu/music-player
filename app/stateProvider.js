"use client";
import { store } from "@/lib/Redux/Store";
import React from "react";
import { Provider } from "react-redux";

export default function StateProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
