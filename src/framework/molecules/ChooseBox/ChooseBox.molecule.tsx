import React from "react";
import Link from "next/link";
import { Button } from "antd";
import { Centralized } from "@atoms";

import * as S from "./ChooseBox.style";

export const ChooseBox: React.FC = () => {
  return (
    <Centralized>
      <S.Container>
        <Button type="primary" shape="round">
          <Link href={"/singleboard"}>Singleplayer</Link>
        </Button>
        <Button type="primary" shape="round">
          <Link href={"/multiboard"}>Multiplayer</Link>
        </Button>
      </S.Container>
    </Centralized>
  );
};
