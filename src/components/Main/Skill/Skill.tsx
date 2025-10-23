import { Chip } from "@/components/Common/Chip";
import { Box, Stack, Typography } from "@mui/material";
import Javascript from "@/assets/img/skill/javascript.svg?react";
import Typescript from "@/assets/img/skill/typescript.svg?react";
import React from "@/assets/img/skill/react.svg?react";
import HTML from "@/assets/img/skill/html.svg?react";
import CSS from "@/assets/img/skill/css.svg?react";

export function Skill() {
  return (
    <Stack
      p="96px 112px"
      gap={4}
      sx={(theme) => ({
        bgcolor: theme.color["background-color-01"],
        alignItems: "center",
      })}
    >
      <Chip label="Skills" />
      <Box>
        <Typography>
          The skills, tools and technologies I am really good at:
        </Typography>
      </Box>
      <Stack direction="row" gap={10} flexWrap="wrap">
        <Stack alignItems="center">
          <Javascript width={64} height={64} />
          <Typography variant="body2">Javascript</Typography>
        </Stack>
        <Stack alignItems="center">
          <Typescript width={64} height={64} />
          <Typography variant="body2">Typescript</Typography>
        </Stack>
        <Stack alignItems="center">
          <React width={64} height={64} />
          <Typography variant="body2">React</Typography>
        </Stack>
        <Stack alignItems="center">
          <HTML width={64} height={64} />
          <Typography variant="body2">HTML5</Typography>
        </Stack>
        <Stack alignItems="center">
          <CSS width={64} height={64} />
          <Typography variant="body2">CSS3</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
