import { createTheme } from "@mui/material";
import { darkColor, lightColor } from "./color";

export const useTheme = () => {
  return createTheme({
    colorSchemes: {
      light: {
        color: lightColor,
      },
      dark: {
        color: darkColor,
      },
    },
  });
};
