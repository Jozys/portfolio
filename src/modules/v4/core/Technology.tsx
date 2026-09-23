import { alpha, Button, ButtonProps, useTheme } from "@mui/material";
import React from "react";
import { Technology } from "../../../data/types/Project";

export interface TechnologyProps extends Omit<ButtonProps, "color"> {
  technology: Technology;
  showName?: boolean;
}

export default function TechnologyButton({
  technology,
  showName = false,
  size = "small",
  sx,
  onClick,
  style,
  ...rest
}: TechnologyProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const brandColor =
    technology.color ||
    (isDark ? theme.palette.secondary.main : theme.palette.primary.main);

  const isSmall = size === "small";

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (technology.link) {
      e.stopPropagation();
      window.open(technology.link, "_blank", "noopener,noreferrer");
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Button
      key={`tech-${technology.name}`}
      title={technology.name}
      size={size}
      onClick={handleClick}
      sx={{
        m: 0.5,
        textTransform: "none",
        fontWeight: 600,
        fontSize: isSmall ? "0.775rem" : "0.85rem",
        lineHeight: 1.2,
        borderRadius: "9999px",
        color: theme.palette.text.primary,
        backgroundColor: alpha(brandColor, isDark ? 0.12 : 0.08),
        border: `1px solid ${alpha(brandColor, isDark ? 0.35 : 0.25)}`,
        backdropFilter: "blur(6px)",
        px: showName ? (isSmall ? 1.25 : 1.6) : isSmall ? 0.9 : 1.1,
        py: isSmall ? 0.4 : 0.6,
        minWidth: "unset",
        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          backgroundColor: alpha(brandColor, isDark ? 0.22 : 0.16),
          borderColor: brandColor,
          boxShadow: `0 0 10px ${alpha(brandColor, isDark ? 0.35 : 0.2)}`,
          transform: "translateY(-1px)",
        },
        "&:active": {
          transform: "translateY(0)",
        },
        ...sx,
      }}
      style={style}
      startIcon={
        showName ? (
          <img
            src={technology.icon}
            alt={technology.name}
            height={isSmall ? 16 : 18}
            width="auto"
            style={{
              display: "block",
              objectFit: "contain",
              maxWidth: isSmall ? 16 : 18,
            }}
          />
        ) : undefined
      }
      {...rest}
    >
      {showName ? (
        technology.name
      ) : (
        <img
          src={technology.icon}
          alt={technology.name}
          height={isSmall ? 18 : 22}
          width="auto"
          style={{
            display: "block",
            objectFit: "contain",
            maxWidth: isSmall ? 18 : 22,
          }}
        />
      )}
    </Button>
  );
}
