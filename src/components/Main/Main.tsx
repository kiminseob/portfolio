import { Stack } from "@mui/material";
import { Intro } from "./Intro";
import { About } from "./About";
import { Skill } from "./Skill";
import { Experience } from "./Experience";
import { Work } from "./Work";

export function Main() {
  return (
    <Stack>
      <Intro />
      <About />
      <Skill />
      <Experience />
      <Work />
    </Stack>
  );
}
