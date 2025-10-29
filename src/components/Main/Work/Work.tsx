import { Chip } from "@/components/Common/Chip";
import { OpenInNew } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  useColorScheme,
} from "@mui/material";
import { JeusPortfolio } from "./Portfolio/JeusPortfolio";
import { TSPPortfolio } from "./Portfolio/TSPPortfolio";

const works = [
  {
    portfolio: <JeusPortfolio />,
    title: "JEUS WebAdmin",
    company: "Tmaxsoft",
    description: "JEUS는 국내 시장 점유율 1위 애플리케이션 서버(WAS) 입니다.",
    tags: ["React", "Typescript", "Emotion", "TanStack Query", "MobX"],
    link: "https://docs.tmaxsoft.com/ko/tmaxsoft_docs/main/jeus/index_jeus_9.1.html",
  },
  {
    portfolio: <TSPPortfolio />,
    title: "TSP",
    company: "Tmaxsoft",
    description:
      "TSP(TmaxSoft SaaS Platform)는 티맥스소프트 상용 및 오픈소스 미들웨어 제품을 별도 설치 없이 서비스 형태로 이용할 수 있는 SaaS 플랫폼입니다.",
    tags: [
      "React",
      "Typescript",
      "Next.js",
      "Recoil",
      "Emotion",
      "TanStack Query",
    ],
    link: "https://docs.tmaxsoft.com/ko/tmaxsoft_saas_platform/latest/what-is-tsp.html",
  },
];

export function Work() {
  return (
    <Stack
      id="work"
      p="96px 0"
      gap={4}
      sx={(theme) => ({
        bgcolor: theme.color["background-color-01"],
        alignItems: "center",
      })}
    >
      <Chip label="Work" />
      <Typography>진행했던 주요 프로젝트 입니다.</Typography>
      <Stack gap="48px">
        {works.map((work, index) => (
          <Card key={work.title} {...work} index={index} />
        ))}
      </Stack>
    </Stack>
  );
}

type CardProps = (typeof works)[number] & {
  index: number;
};
function Card(props: CardProps) {
  const { portfolio, index, title, company, description, tags, link } = props;
  const { mode } = useColorScheme();
  const order = index % 2;

  return (
    <Stack
      maxWidth={896}
      direction={{ xs: "column", md: "row" }}
      borderRadius="12px"
      overflow="hidden"
      sx={{
        ...(mode !== "dark" && {
          boxShadow:
            "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
        }),
      }}
    >
      <Box
        p="48px"
        width={{ md: "50%" }}
        order={order}
        sx={(theme) => ({
          bgcolor: theme.color["card-color-01"],
        })}
      >
        {portfolio}
      </Box>
      <Stack
        p="48px"
        width={{ md: "50%" }}
        gap="24px"
        order={order === 0 ? 1 : 0}
        alignItems="flex-start"
        sx={(theme) => ({
          bgcolor: theme.color["background-color-04"],
        })}
      >
        <Stack direction="row" gap={2} alignItems="center">
          <Typography
            variant="h6"
            sx={(theme) => ({ color: theme.color["text-color-01"] })}
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={(theme) => ({ color: theme.color["tmaxsoft-alive-blue"] })}
          >
            {company}
          </Typography>
        </Stack>
        <Typography sx={(theme) => ({ color: theme.color["icon-color-01"] })}>
          {description}
        </Typography>
        <Stack direction="row" gap={1} flexWrap="wrap">
          {tags.map((v) => (
            <Chip key={v} label={v} />
          ))}
        </Stack>
        <IconButton href={link} target="_blank">
          <OpenInNew
            sx={(theme) => ({ color: theme.color["icon-color-02"] })}
          />
        </IconButton>
      </Stack>
    </Stack>
  );
}
