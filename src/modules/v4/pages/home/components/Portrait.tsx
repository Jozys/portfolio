import {
  Box,
  Paper,
  Stack,
  SxProps,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";

export type PortraitMode = "home" | "about";

export interface PortraitProps {
  image: string;
  statusTitle: string;
  statusDescription: string;
  alt?: string;
  mode?: PortraitMode;
  variant?: PortraitMode;
  sx?: SxProps<Theme>;
}

export default function Portrait(props: PortraitProps) {
  const { image, statusTitle, statusDescription, alt, mode, variant, sx } =
    props;

  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const currentMode: PortraitMode = mode ?? variant ?? "home";
  const isAbout = currentMode === "about";

  return (
    <Box
      sx={[
        {
          position: "relative",
          width: "100%",
          ...(!isAbout && {
            minHeight: { xs: 320, md: 440 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box
        sx={{
          position: "absolute",
          inset: isAbout
            ? "3% -2% -2% 3%"
            : { xs: "6% 6% 2% 6%", md: "2% 6% 2% 6%" },
          borderRadius: isAbout ? 3.5 : 4,
          background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
          opacity: isDark ? (isAbout ? 0.5 : 0.6) : isAbout ? 0.35 : 0.45,
          transform: isAbout ? "rotate(3deg)" : "rotate(4deg)",
          filter: isAbout ? "blur(4px)" : "blur(2px)",
        }}
      />

      {!isAbout && (
        <Box
          sx={{
            position: "absolute",
            inset: { xs: "3% 8% 6% 3%", md: "0 8% 4% 1%" },
            borderRadius: 4,
            background: theme.palette.primary.main,
            opacity: isDark ? 0.35 : 0.25,
            transform: "rotate(-3deg)",
          }}
        />
      )}

      <Paper
        elevation={isAbout ? 0 : isDark ? 10 : 4}
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: isAbout ? undefined : 380,
          borderRadius: 3.5,
          overflow: "hidden",
          background: isDark
            ? isAbout
              ? "rgba(35, 18, 65, 0.85)"
              : "rgba(35, 18, 65, 0.9)"
            : "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          border: `1px solid ${
            isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.08)"
          }`,
          boxShadow: isDark
            ? "0 20px 50px rgba(0,0,0,0.6)"
            : "0 16px 40px rgba(18,138,142,0.14)",
        }}
      >
        <Box
          component="img"
          src={image}
          alt={alt}
          sx={{
            width: "100%",
            height: isAbout
              ? { xs: 340, sm: 420, md: 460 }
              : { xs: 330, md: 400 },
            objectFit: "cover",
            display: "block",
          }}
        />

        <Box
          sx={
            isAbout
              ? {
                  p: 2.5,
                  borderTop: `1px solid ${
                    isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)"
                  }`,
                  background: isDark
                    ? "rgba(20, 10, 35, 0.75)"
                    : "rgba(255, 255, 255, 0.85)",
                }
              : {
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  right: 16,
                  p: 2,
                  borderRadius: 2,
                  background: isDark
                    ? "rgba(20, 10, 35, 0.88)"
                    : "rgba(255, 255, 255, 0.92)",
                  backdropFilter: "blur(16px)",
                  border: `1px solid ${
                    isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.08)"
                  }`,
                  boxShadow: isDark
                    ? "0 8px 24px rgba(0,0,0,0.5)"
                    : "0 8px 24px rgba(0,0,0,0.08)",
                }
          }
        >
          <Stack sx={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#10b981",
                boxShadow: "0 0 10px #10b981",
                flexShrink: 0,
              }}
            />
            <Box>
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: isAbout ? 14 : 13,
                  color: theme.palette.text.primary,
                  lineHeight: 1.2,
                }}
              >
                {statusTitle}
              </Typography>
              <Typography
                sx={{
                  fontSize: isAbout ? 12 : 11,
                  color: theme.palette.text.secondary,
                  mt: 0.3,
                }}
              >
                {statusDescription}
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}
