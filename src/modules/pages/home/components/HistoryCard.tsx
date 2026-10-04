import { Box, Chip, Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import FormattedText from "../../../../components/FormattedText";

export interface HistoryCardProps {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  tags?: string[];
  badge?: string;
  image?: string;
  imageAlt?: string;
  imageVariant?: "logo" | "banner";
  invertImageOnDark?: boolean;
  children?: React.ReactNode;
}

export default function HistoryCard({
  title,
  description,
  tags,
  badge,
  image,
  imageAlt = "",
  imageVariant = "banner",
  invertImageOnDark = false,
  children,
}: HistoryCardProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 2.5,
        overflow: "hidden",
        background: theme.surfaces.card,
        backdropFilter: "blur(12px)",
        border: `1px solid ${theme.borders.subtle}`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: theme.shadowsGlow.card,
        },
      }}
    >
      <Box>
        {image && imageVariant === "banner" && (
          <Box
            component="img"
            src={image}
            alt={imageAlt}
            sx={{
              width: "100%",
              height: 130,
              objectFit: "cover",
              display: "block",
            }}
          />
        )}

        <Box sx={{ p: 3.5, pt: imageVariant === "banner" ? 2.5 : 3.5 }}>
          {imageVariant === "logo" && (image || badge) && (
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mb: 2.5 }}
            >
              {image ? (
                <Box
                  component="img"
                  src={image}
                  alt={imageAlt}
                  sx={{
                    height: 36,
                    maxWidth: 140,
                    objectFit: "contain",
                    filter:
                      isDark && invertImageOnDark
                        ? "brightness(0) invert(1)"
                        : "none",
                  }}
                />
              ) : (
                <Box />
              )}
              {badge && (
                <Chip
                  label={badge}
                  size="small"
                  sx={{
                    borderRadius: 1,
                    fontSize: 11,
                    fontWeight: 600,
                    background: theme.surfaces.chip,
                  }}
                />
              )}
            </Stack>
          )}

          {imageVariant === "banner" && badge && (
            <Box sx={{ mb: 1.5 }}>
              <Chip
                label={badge}
                size="small"
                sx={{
                  borderRadius: 1,
                  fontSize: 11,
                  fontWeight: 600,
                  background: theme.surfaces.chip,
                }}
              />
            </Box>
          )}

          {typeof title === "string" ? (
            <Typography
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 800,
                fontSize: 20,
                fontFamily: "Titillium Web, sans-serif",
              }}
            >
              {title}
            </Typography>
          ) : (
            title
          )}

          {typeof description === "string" ? (
            <FormattedText
              content={description}
              paragraphSx={{
                color: theme.palette.text.secondary,
                fontSize: 14,
                lineHeight: 1.65,
                mt: 1.5,
              }}
            />
          ) : (
            description
          )}

          {children}
        </Box>
      </Box>

      {tags && (
        <Box sx={{ p: 3.5, pt: 0 }}>
          <Box
            sx={{
              pt: 2,
              borderTop: `1px solid ${theme.borders.subtle}`,
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            {tags?.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                size="small"
                sx={{
                  color: theme.palette.text.primary,
                  fontSize: 12,
                  fontWeight: 700,
                }}
              ></Chip>
            ))}
          </Box>
        </Box>
      )}
    </Paper>
  );
}
