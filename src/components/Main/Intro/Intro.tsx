import { Box, IconButton, Stack, Typography } from "@mui/material";
import inseop from "@/assets/img/profile.jpeg";
import { EmailOutlined, GitHub, LocationOnOutlined } from "@mui/icons-material";

export function Intro() {
  return (
    <Stack
      id="intro"
      direction={{ xs: "column", md: "row" }}
      p="96px 80px"
      mt="68px"
      sx={(theme) => ({
        bgcolor: theme.color["background-color-01"],
      })}
    >
      <Stack
        order={{ xs: 0, md: 1 }}
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
          position="relative"
          width="fit-content"
          height={280}
          boxSizing="content-box"
          p="10px"
          sx={(theme) => ({ bgcolor: theme.color["background-color-01"] })}
        >
          <Box
            component="img"
            src={inseop}
            width={280}
            sx={{ position: "relative", zIndex: 1 }}
          />
          <Box
            position="absolute"
            left={50}
            top={50}
            sx={(theme) => ({
              bgcolor: theme.color["background-color-02"],
              zIndex: 0,
            })}
            width={280}
            height={280}
          />
        </Box>
      </Stack>
      <Stack gap={3} order={{ xs: 1, md: 0 }}>
        <Stack>
          <Typography variant="h4">안녕하세요. 김인섭 입니다 👋</Typography>
          <Typography variant="body1">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </Typography>
        </Stack>
        <Stack direction="row" gap={0.5}>
          <LocationOnOutlined />
          <Typography>경기도 성남시</Typography>
        </Stack>
        <Stack direction="row">
          <IconButton
            LinkComponent="a"
            href="https://github.com/kiminseob"
            target="_blank"
          >
            <GitHub />
          </IconButton>
          <IconButton LinkComponent="a" href="mailto:kis6473@naver.com">
            <EmailOutlined />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
}
