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

const experiences = [
  {
    company: "티맥스소프트",
    workingPeriod: "Aug 2021 - Present",
    careerDetail: ["커리어1", "커리어2"],
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
        Here is a quick summary of my most recent experiences:
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
      gap="48px"
      alignItems={{ xs: "center", md: "flex-start" }}
      sx={(theme) => ({
        bgcolor: theme.color["background-color-04"],
        boxShadow:
          "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
      })}
    >
      <Box width={206}>
        <img src={TmaxsoftLogo} width="180px" />
      </Box>
      <Stack width={384}>
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
            <ListItem key={career} sx={{ pl: "8px" }}>
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
