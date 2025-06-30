import { IconButton, useTheme } from "@mui/material";
import { Technology } from "../../../data/types/Project";

export interface TechnologiesProps {
  technologies: Technology[];
}

export function Technologies(props: TechnologiesProps) {
  const { technologies } = props;
  const theme = useTheme();

  return (
    <div>
      {technologies.map((tech, techIndex) => (
        <IconButton
          key={`tech-${techIndex}`}
          onClick={() => {
            if (tech.link) {
              window.open(tech.link);
            }
          }}
          style={{
            margin: theme.spacing(0.5),
            color: tech.color || "inherit",
          }}
        >
          <img
            src={tech.icon}
            alt={tech.name}
            height={24}
            width={"auto"}
            style={{
              filter: tech.color ? `invert(${tech.color})` : "none",
            }}
          />
        </IconButton>
      ))}
    </div>
  );
}
