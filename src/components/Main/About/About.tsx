import { Box, Stack, Typography } from "@mui/material";
import inseop from "@/assets/img/inseop1.jpeg";
import { Chip } from "@/components/Common/Chip";

export function About() {
  return (
    <Stack
      id="about"
      p="96px 32px"
      alignItems="center"
      gap={4}
      sx={(theme) => ({ bgcolor: theme.color["background-color-03"] })}
    >
      <Stack alignItems="center">
        <Chip label="About me" />
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        maxWidth={1216}
        gap={4}
        justifyContent="space-between"
      >
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
            width={{ xs: 346, md: 450 }}
            height={{ xs: 395, md: 533 }}
            sx={(theme) => ({
              bgcolor: theme.color["background-color-03"],
              display: "flex",
              justifyContent: "flex-end",
            })}
          >
            <Box
              component="img"
              src={inseop}
              width={{ xs: 296, md: 400 }}
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
              width={{ xs: 296, md: 400 }}
              height={{ xs: 395, md: 533 }}
            />
          </Box>
        </Stack>
        <Stack>
          <Stack gap={2}>
            <Typography variant="h4" mb={1}>
              김인섭, Frontend Developer
            </Typography>
            <Typography variant="body1">
              안녕하세요. 저는 2021년 8월 티맥스소프트에 입사해 프론트엔드
              개발자로 일하며 React.js와 TypeScript 기반의 Admin 페이지를
              개발했습니다. 복잡한 비즈니스 로직을 사용자에게 명확하게 전달할 수
              있는 UI를 만드는 것에 큰 흥미를 느낍니다.
            </Typography>

            <Typography variant="body1">
              업무 외 시간에는 개인 프로젝트를 통해 풀스택 개발 경험도
              쌓았습니다. Nest.js, MongoDB, React.js를 중심으로 한 서비스들을
              직접 구축하고 서버 인프라 구성과 배포까지 진행했습니다.
            </Typography>

            <Typography variant="body1">
              단순히 기능을 구현하는 것을 넘어, 하나의 서비스가 세상에 나오기
              위한 전체 과정을 깊이 있게 이해하고 싶어 시작한 도전이었습니다.
              기획부터 인프라 구축까지 직접 부딪히며 데이터의 흐름을 능동적으로
              제어하는 법을 배웠고 이는 곧 협업 시 백엔드 개발자의 관점을 깊이
              이해하고 최적의 기술적 접점을 찾아내는 밑거름이 되었습니다.
            </Typography>

            <Typography variant="body1">
              이러한 성장에 대한 갈증과 끈기는 개발 밖의 일상에서도 이어집니다.
            </Typography>

            <Typography variant="body1">
              꾸준한 헬스와 러닝을 통해 스스로의 한계를 넘는 즐거움을 배우고
              있습니다. 56kg이던 몸무게를 74kg까지 증량하며 체력을 길렀고
              작년에는 3대 운동 합 320kg을 달성했습니다. 어제보다 더 나은 내일을
              만드는 운동의 정직한 과정은 제가 매일 코드를 작성하며 마주하는
              성장의 즐거움과 맞닿아 있습니다.
            </Typography>

            <Typography variant="body1">
              저는 주도적으로 문제를 정의하고 해결할 수 있는 환경에서 열정
              넘치는 동료들과 함께 시너지를 내며 성장하는 과정을 즐깁니다. 좋은
              코드를 읽으며 배우는 즐거움만큼이나 저의 경험이 팀의 성장에
              기여하고 함께 나아가는 가치를 소중히 여깁니다.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
