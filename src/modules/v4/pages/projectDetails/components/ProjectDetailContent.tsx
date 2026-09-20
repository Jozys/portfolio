import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { Project } from "../../../../../data/types/Project";
import { formatProjectYears, getLabel } from "../../../../../data/Projects";
import { OpenInNew } from "@mui/icons-material";
import { useLanguage } from "../../../../../language/hooks";

export interface ProjectDetailContentProps {
  project: Project;
}

export default function ProjectDetailContent(props: ProjectDetailContentProps) {
  const theme = useTheme();
  const { project } = props;
  const { language } = useLanguage();
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 2fr" },
        gap: 5,
        mt: 6,
      }}
    >
      <Stack spacing={2.5}>
        <Typography
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 800,
            fontSize: 13,
            letterSpacing: ".12em",
            textTransform: "uppercase",
            fontFamily: "Titillium Web, sans-serif",
          }}
        >
          {"Project facts"}
        </Typography>

        {project.years && (
          <Box
            sx={{
              borderTop: `2px solid ${theme.palette.primary.main}`,
              pt: 1.5,
            }}
          >
            <Typography
              sx={{ color: theme.palette.text.secondary, fontSize: 12 }}
            >
              {"Timeline"}
            </Typography>
            <Typography
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 700,
                mt: 0.5,
              }}
            >
              {formatProjectYears(project.years)}
            </Typography>
          </Box>
        )}

        {project.links && Object.keys(project.links).length > 0 && (
          <Box
            sx={{
              borderTop: `2px solid ${theme.palette.primary.main}`,
              pt: 1.5,
            }}
          >
            <Typography
              sx={{ color: theme.palette.text.secondary, fontSize: 12 }}
            >
              {"Links & Resources"}
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={2} sx={{ mt: 1 }}>
              {Object.entries(project.links).map(([key, link], i) => (
                <Button
                  key={key}
                  startIcon={
                    typeof link.icon === "string" ? (
                      <img
                        height={24}
                        src={link.icon}
                        alt={getLabel(link.label, language) || key}
                      />
                    ) : (
                      link.icon
                    )
                  }
                  variant="outlined"
                  color="secondary"
                  size="small"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  endIcon={<OpenInNew fontSize="small" />}
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: 12,
                    borderRadius: 1.5,
                    ml: i > 0 ? 1 : 0,
                  }}
                >
                  {getLabel(link.label, language) || key}
                </Button>
              ))}
            </Stack>
          </Box>
        )}
      </Stack>

      <Box>
        <Typography
          sx={{
            color: theme.palette.text.primary,
            fontSize: { xs: 22, md: 28 },
            fontWeight: 800,
            fontFamily: "Titillium Web, sans-serif",
          }}
        >
          {"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        </Typography>
        <Typography
          sx={{
            color: theme.palette.text.secondary,
            fontSize: 16,
            lineHeight: 1.7,
            mt: 2,
          }}
        >
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc nisl aliquam nunc, eget aliquam nisl nunc vel nisl. Sed euismod, nisl vel tincidunt lacinia, nunc nisl aliquam nunc, eget aliquam nisl nunc vel nisl."
          }
        </Typography>
      </Box>
    </Box>
  );
}
