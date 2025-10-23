import { Box, Stack, Typography } from "@mui/material";
import inseop from "@/assets/img/inseop1.jpeg";
import { Chip } from "@/components/Common/Chip";

export function About() {
  return (
    <Stack
      id="about"
      p="96px 80px"
      sx={(theme) => ({ bgcolor: theme.color["background-color-03"] })}
    >
      <Stack alignItems="center">
        <Chip label="About me" />
      </Stack>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Stack
          sx={{
            alignItems: {
              xs: "center",
            },
            mb: {
              xs: "60px",
            },
          }}
        >
          <Box
            boxSizing="content-box"
            position="relative"
            p="10px"
            width="fit-content"
            height={533}
            sx={(theme) => ({ bgcolor: theme.color["background-color-03"] })}
          >
            <Box
              component="img"
              src={inseop}
              width={400}
              zIndex={1}
              position="relative"
            />
            <Box
              position="absolute"
              right={50}
              top={50}
              sx={(theme) => ({
                bgcolor: theme.color["background-color-02"],
                zIndex: 0,
              })}
              width={400}
              height={533}
            />
          </Box>
        </Stack>
        <Stack>
          <Stack>
            <Typography variant="h4">about inseop</Typography>
            <Typography variant="body1">
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
