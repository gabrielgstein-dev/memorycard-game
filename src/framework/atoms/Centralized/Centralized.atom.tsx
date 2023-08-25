"use client";
import React, { PropsWithChildren } from "react";

import * as S from "./Centralized.style";

export const Centralized = ({ children }: PropsWithChildren) => {
  return (
    <S.Container>
      <S.Centered>{children}</S.Centered>
    </S.Container>
  );
};
