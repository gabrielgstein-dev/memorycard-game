import React, { PropsWithChildren } from "react";

import * as S from "./CardBase.style";

export const CardBase = ({ children }: PropsWithChildren) => {
  return <S.Container>{children}</S.Container>;
};
