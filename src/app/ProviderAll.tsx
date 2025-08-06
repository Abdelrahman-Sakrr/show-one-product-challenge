"use client";

import { Provider } from "react-redux";
import React from "react";
import store from "@/store/index";

type Props = {
  children: React.ReactNode;
};

function ProviderAll({ children }: Props) {
  return <Provider store={store}> {children}</Provider>;
}

export default ProviderAll;
