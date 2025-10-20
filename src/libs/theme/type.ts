import type { darkColor, lightColor } from "./color";

declare module "@mui/material/styles" {
  interface Theme {
    color: typeof lightColor;
  }
  interface ThemeOptions {
    colorSchemes: {
      light: {
        color: typeof lightColor;
      };
      dark: {
        color: typeof darkColor;
      };
    };
  }
}
