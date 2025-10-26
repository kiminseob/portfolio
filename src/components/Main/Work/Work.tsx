import { Chip } from "@/components/Common/Chip";
import { OpenInNew } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  useColorScheme,
} from "@mui/material";
import JeusAdmin from "@/assets/img/work/jeus_admin.png";

const works = [
  {
    imgSrc: JeusAdmin,
    title: "JEUS Admin",
    description: "어쩌고",
    tags: ["React", "Typescript"],
    link: "https://docs.tmaxsoft.com/ko/tmaxsoft_docs/main/jeus/index_jeus_9.1.html",
  },
  {
    imgSrc: JeusAdmin,
    title: "JEUS Admin2",
    description: "어쩌고",
    tags: ["React", "Typescript"],
    link: "https://docs.tmaxsoft.com/ko/tmaxsoft_docs/main/jeus/index_jeus_9.1.html",
  },
];

export function Work() {
  return (
    <Stack
      id="work"
      p="96px 114px"
      gap={4}
      sx={(theme) => ({
        bgcolor: theme.color["background-color-01"],
        alignItems: "center",
      })}
    >
      <Chip label="Work" />
      <Typography>Some of the noteworthy projects I have built:</Typography>
      <Stack gap="48px">
        {works.map((work, index) => (
          <Card key={work.title} {...work} index={index} />
        ))}
      </Stack>
    </Stack>
  );
}

type CardProps = {
  imgSrc: string;
  index: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
};
function Card(props: CardProps) {
  const { imgSrc, index, title, description, tags, link } = props;
  const { mode } = useColorScheme();
  const order = index % 2;

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      borderRadius="12px"
      overflow="hidden"
      sx={{
        ...(mode !== "dark" && {
          filter: "drop-shadow(0px 4px 3px rgba(0,0,0,0.07000000029802322))",
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
        <img src={imgSrc} width="100%" style={{ borderRadius: "8px" }} />
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
        <Typography sx={(theme) => ({ color: theme.color["text-color-01"] })}>
          {title}
        </Typography>
        <Typography sx={(theme) => ({ color: theme.color["icon-color-01"] })}>
          {description}
        </Typography>
        <Stack direction="row" gap={1}>
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
