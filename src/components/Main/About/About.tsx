import { Box, Stack, Typography } from "@mui/material";
import inseop from "@/assets/img/inseop1.jpeg";
import { Chip } from "@/components/Common/Chip";

export function About() {
  return (
    <Stack
      id="about"
      p="96px 32px 96px 64px"
      alignItems="center"
      gap={4}
      sx={(theme) => ({ bgcolor: theme.color["background-color-03"] })}
    >
      <Stack alignItems="center">
        <Chip label="About me" />
      </Stack>
      <Stack direction={{ xs: "column", md: "row" }} maxWidth={1216} gap={4}>
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
          <Stack gap={2}>
            <Typography variant="h4">김인섭, Frontend Developer</Typography>
            <Typography variant="body1">
              안녕하세요. 저는 2021년 8월 티맥스소프트에 입사해 프론트엔드
              개발자로 일하며, React.js와 TypeScript 기반의 Admin 페이지를
              개발했습니다. 복잡한 비즈니스 로직을 사용자에게 명확하게 전달할 수
              있는 UI를 만드는 것에 큰 흥미를 느낍니다.
            </Typography>

            <Typography variant="body1">
              업무 외 시간에는 외주 프로젝트를 통해 풀스택 개발 경험도
              쌓았습니다. Nest.js, MongoDB, React.js를 중심으로 한 서비스들을
              직접 구축했으며, AWS 인프라 구성과 배포까지 담당했습니다.
            </Typography>

            <Typography variant="body1">
              개발 외에는 운동(헬스, 러닝)을 꾸준히 하고 있습니다. 56kg이던
              몸무게가 지금은 74kg이 되었고 작년에는 3대 운동 합 320kg을
              달성했습니다. 💪 꾸준함과 성장의 즐거움을 몸소 느끼며 살아가고
              있습니다.
            </Typography>

            <Typography variant="body1">
              저는 자유로운 환경에서 스스로 성장하며 함께 성장하는 것을
              좋아합니다. 누군가의 코드를 읽고 배우는 것, 그리고 제 경험을
              공유하며 함께 나아가는 과정을 소중히 여깁니다.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
