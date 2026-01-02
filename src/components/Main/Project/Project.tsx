import { Chip } from "@/components/Common/Chip";
import { OpenInNew } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  useColorScheme,
} from "@mui/material";
import { SupportConePortfolio } from "./Portfolio/SupportConePortfolio";

const projects = [
  {
    portfolio: <SupportConePortfolio />,
    title: "Support Cone",
    company: "Personal Project",
    description:
      "Support Cone은 크리에이터들이 팬들로부터 직접적인 후원을 받을 수 있도록 돕는 서비스입니다. 간편한 결제 시스템과 크리에이터 페이지를 제공합니다.",
    tags: ["Next.js", "Typescript", "Tailwind CSS", "MongoDB"],
    link: "https://support-cone.vercel.app/",
  },
];

export function Project() {
  return (
    <Stack
      id="project"
      p="96px 0"
      gap={4}
      sx={(theme) => ({
        bgcolor: theme.color["background-color-03"], // Corrected to match About and Experience
        alignItems: "center",
      })}
    >
      <Chip label="Project" />
      <Typography>개인적으로 진행한 프로젝트 입니다.</Typography>
      <Stack gap="48px">
        {projects.map((project, index) => (
          <Card key={project.title} {...project} index={index} />
        ))}
      </Stack>
    </Stack>
  );
}

type CardProps = (typeof projects)[number] & {
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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
