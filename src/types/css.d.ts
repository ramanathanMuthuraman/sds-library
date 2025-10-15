/// <reference types="react" />

import type * as CSS from "csstype";

declare module "react" {
  interface CSSProperties extends CSS.Properties<string | number> {
    [key: `--${string}`]: string | number;
    "--flex-align-primary"?: string;
    "--text-truncate-line-clamp"?: number;
    gridColumn?: string;
    gridRow?: string;
    gridArea?: string;
  }
}
