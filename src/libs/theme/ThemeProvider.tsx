import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { useTheme } from "./createTheme";
import type { PropsWithChildren } from "react";

export function ThemeProvider({ children }: PropsWithChildren) {
  const theme = useTheme();
  return (
    <MuiThemeProvider defaultMode="dark" theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
