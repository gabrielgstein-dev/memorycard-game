"use client";

import React, { PropsWithChildren } from "react";
interface BoardGameProps {
  roomHash?: string;
}
export const BoardGame = ({
  children,
  roomHash,
}: PropsWithChildren<BoardGameProps>) => {
  return <div>{children}</div>;
};
