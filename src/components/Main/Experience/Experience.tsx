import { Chip } from "@/components/Common/Chip";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import TmaxsoftLogo from "@/assets/img/logo/Logo_TMAXSOFT.png";
import RevoiceLogo from "@/assets/img/logo/Logo_Revoice.png";

const experiences = [
  {
    logo: TmaxsoftLogo,
    company: "Frontend Developer",
    workingPeriod: "Aug 2021 - Present",
    careerDetail: [
      "React.js와 TypeScript 기반으로 확장이 수월한 Admin 페이지를 개발했습니다.",
      "복잡하고 반복적인 설정 구조를 관리하기 위해 Config Component를 설계했습니다.",
      "서버, 클러스터, 도메인 설정 및 애플리케이션 배포, 계정/권한 관리 등 주요 기능을 구현했습니다.",
    ],
  },
  {
    logo: RevoiceLogo,
    company: "Backend Developer",
    workingPeriod: "Sep 2019 - Jun 2020",
    careerDetail: [
      "Node.js와 MySQL 기반으로 AI 음성 스피커 서비스 백엔드 API를 설계 및 구현했습니다.",
      "항공권 음성 검색, 오늘의 퀴즈 등 다양한 음성 기반 서비스를 개발하고 상용화했습니다.",
    ],
  },
];

export function Experience() {
  return (
    <Stack
      id="experience"
      p={{ xs: "96px 16px", md: "96px 272px" }}
      alignItems="center"
      gap={5}
      sx={(theme) => ({ bgcolor: theme.color["background-color-03"] })}
    >
      <Chip label="Experience" />
      <Typography>
        Node.js 백엔드로 커리어를 시작했으나 사용자 경험(UX) 구현에 더 큰 흥미를
        느껴 프론트엔드로 전향했습니다. <br />
        현재는 티맥스소프트에서 React.js 기반의 B2B 웹 솔루션을 개발하고 있습니다.
      </Typography>
      <Stack width={{ xs: "100%", md: "896px" }} gap={5}>
        {experiences.map((experience) => (
          <Card key={experience.company} experience={experience} />
        ))}
      </Stack>
    </Stack>
  );
}

type CardProps = {
  experience: (typeof experiences)[number];
};
function Card(props: CardProps) {
  const { experience } = props;

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      borderRadius="12px"
      flexShrink={0}
      p="32px"
      gap="40px"
      alignItems={{ xs: "center", md: "flex-start" }}
      sx={(theme) => ({
        bgcolor: theme.color["background-color-04"],
        boxShadow:
          "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
      })}
    >
      <Box width={206}>
        <img src={experience.logo} width="180px" />
      </Box>
      <Stack width={{ xs: "100%", md: 384 }}>
        <Typography variant="h6" fontWeight={700}>
          {experience.company}
        </Typography>
        <List
          sx={(theme) => ({
            pl: "20px",
            "& .MuiListItem-root": {
              display: "list-item",
              listStyleType: "disc",
              "&::marker": {
                color: theme.color["icon-color-01"],
              },
            },
          })}
        >
          {experience.careerDetail.map((career) => (
            <ListItem key={career} sx={{ pl: "4px" }}>
              <ListItemText
                sx={(theme) => ({ color: theme.color["icon-color-01"] })}
              >
                {career}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Stack>
      <Box>
        <Typography
          lineHeight={1.6}
          sx={(theme) => ({ color: theme.color["text-color-02"] })}
        >
          {experience.workingPeriod}
        </Typography>
      </Box>
    </Stack>
  );
}
