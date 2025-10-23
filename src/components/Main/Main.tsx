import { Stack } from "@mui/material";
import { Intro } from "./Intro";
import { About } from "./About";

export function Main() {
  return (
    <Stack>
      <Intro />
      <About />
    </Stack>
  );
}
