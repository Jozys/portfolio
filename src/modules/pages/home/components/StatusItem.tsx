import { WorkOutlined } from "@mui/icons-material";
import { Box, Paper, Typography, useTheme } from "@mui/material";
import React from "react";
import {
  getStatusInformationDescription,
  getStatusInformationTitle,
} from "../../../../data/StatusInformation";
import { StatusInformation } from "../../../../data/types/StatusInformation";
import { useLanguage } from "../../../../language/hooks";

export interface StatusItemProps {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: React.ReactNode;
  item?: StatusInformation;
  children?: React.ReactNode;
}

export default function StatusItem({
  title,
  description,
  icon,
  item,
  children,
}: StatusItemProps) {
  const theme = useTheme();
  const { language } = useLanguage();

  const resolvedTitle =
    title ?? (item ? getStatusInformationTitle(item, language) : "");
  const resolvedDescription =
    description ??
    (item ? getStatusInformationDescription(item, language) : "");
  const resolvedIcon = icon ?? item?.icon ?? <WorkOutlined fontSize="small" />;

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2.5,
        borderRadius: 2,
        background: theme.surfaces.cardSubtle,
        border: `1px solid ${theme.borders.subtle}`,
        borderTop: `3px solid ${theme.palette.secondary.main}`,
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: theme.shadowsGlow.card,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          color: theme.palette.primary.main,
        }}
      >
        {resolvedIcon}
        {typeof resolvedTitle === "string" ? (
          <Typography
            sx={{
              color: theme.palette.text.secondary,
              fontSize: 12,
              fontWeight: 700,
            }}
          >
            {resolvedTitle}
          </Typography>
        ) : (
          resolvedTitle
        )}
      </Box>

      {typeof resolvedDescription === "string" ? (
        <Typography
          sx={{
            color: theme.palette.text.primary,
            fontWeight: 700,
            fontSize: 14,
            mt: 1.2,
            lineHeight: 1.4,
          }}
        >
          {resolvedDescription}
        </Typography>
      ) : (
        resolvedDescription
      )}

      {children}
    </Paper>
  );
}

export { StatusItem as StatusCard };
