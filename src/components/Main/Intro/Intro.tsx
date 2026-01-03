import { Box, IconButton, Stack, Typography } from "@mui/material";
import inseop from "@/assets/img/profile.jpeg";
import {
  EmailOutlined,
  FeedOutlined,
  GitHub,
  LocationOnOutlined,
} from "@mui/icons-material";

export function Intro() {
  return (
    <Stack
      id="intro"
      p="96px 32px"
      alignItems="center"
      justifyContent="center"
      mt="68px"
      sx={(theme) => ({
        bgcolor: theme.color["background-color-01"],
      })}
    >
      <Stack
        width="100%"
        maxWidth={1216}
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
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
            width={330}
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
          <Stack gap={2}>
            <Typography variant="h4" mb={1}>
              안녕하세요. 김인섭 입니다 👋
            </Typography>
            <Typography variant="body1">
              2021년부터 웹 프론트엔드 개발자로 일하고 있습니다.
            </Typography>
            <Typography variant="body1">
              일상에 가치를 더하는 서비스를 만드는 데 큰 보람을 느낍니다.
            </Typography>
            <Typography variant="body1">
              단순히 화면을 구현하는 것을 넘어 사용자의 경험을 고려한 UI/UX
              설계와 구현에 깊은 관심을 가지고 있습니다.
            </Typography>
          </Stack>
          <Stack direction="row" gap={0.5}>
            <IconButton
              component="a"
              href="https://map.naver.com/p/search/성남시"
              target="_blank"
              sx={{ p: 0 }}
              aria-label="Location: Seongnam-si"
            >
              <LocationOnOutlined />
            </IconButton>
            <Typography>경기도 성남시</Typography>
          </Stack>
          <Stack direction="row" gap={2}>
            <IconButton
              LinkComponent="a"
              href="https://github.com/kiminseob"
              target="_blank"
              sx={{ p: 0 }}
              aria-label="GitHub Profile"
            >
              <GitHub />
            </IconButton>
            <IconButton
              LinkComponent="a"
              href="mailto:kis6473@naver.com"
              sx={{ p: 0 }}
              aria-label="Send Email"
            >
              <EmailOutlined />
            </IconButton>
            <IconButton
              LinkComponent="a"
              href="https://resume.inseop.pe.kr"
              target="_blank"
              sx={{ p: 0 }}
              aria-label="View Resume"
            >
              <FeedOutlined />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
