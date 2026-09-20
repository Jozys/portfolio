import { Button, ButtonProps, useTheme } from "@mui/material";
import { Technology } from "../../../data/types/Project";

export interface TechnologyProps extends ButtonProps {
  technology: Technology;
  showName?: boolean;
}

export default function TechnologyButton(props: TechnologyProps) {
  const { technology } = props;
  const theme = useTheme();
  return (
    <Button
      key={`tech-${technology.name}`}
      title={props.showName ? technology.name : undefined}
      variant="contained"
      onClick={() => {
        if (technology.link) {
          window.open(technology.link);
        }
      }}
      style={{
        margin: theme.spacing(0.5),
        color: technology.color || "inherit",
      }}
      startIcon={
        <img
          src={technology.icon}
          alt={technology.name}
          height={24}
          width={"auto"}
          style={{
            filter: technology.color ? `invert(${technology.color})` : "none",
          }}
        />
      }
      {...props}
    >
      {props.showName ? technology.name : ""}
    </Button>
  );
}
