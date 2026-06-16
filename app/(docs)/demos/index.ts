import type { ComponentType } from "react";

import { ButtonDemo } from "./button";
import { CardDemo } from "./card";
import { InputDemo } from "./input";

export const demos: Record<string, ComponentType> = {
  button: ButtonDemo,
  card: CardDemo,
  input: InputDemo,
};
