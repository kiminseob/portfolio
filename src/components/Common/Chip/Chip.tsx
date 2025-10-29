import { Chip as MuiChip } from "@mui/material";

type ChipProps = {
  label: string;
};

export function Chip(props: ChipProps) {
  const { label } = props;
  return (
    <MuiChip
      label={label}
      sx={(theme) => ({
        bgcolor: theme.color["background-color-02"],
        minWidth: 105,
      })}
    />
  );
}
