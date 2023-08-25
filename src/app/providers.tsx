"use client";

import StyledComponentsRegistry from "@/lib/registry";
import { PropsWithChildren } from "react";
import { GlobalStyle } from "./globals";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyle />
      {children}
    </StyledComponentsRegistry>
  );
};
