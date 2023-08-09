"use client";

import StyledComponentsRegistry from "@/lib/registry";
import { PropsWithChildren } from "react";

export const Providers = ({ children }: PropsWithChildren) => {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
};
