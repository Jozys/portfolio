/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Container, keyframes, Typography, useTheme } from "@mui/material";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Me from "../../../../assets/life/me.jpg";
import { getAllStatusInformations } from "../../../../data/StatusInformation";
import { useLanguage } from "../../../../language/hooks";
import { ScrollDownButton } from "../../../core/design-system/ScrollDownButton";
import ActionBar from "./components/ActionBar";
import History from "./components/History";
import Portrait from "./components/Portrait";
import Status from "./components/Status";

export default function Home() {
  const theme = useTheme();
  const { language } = useLanguage();

  const historyRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const float = keyframes`
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-15px);
    }
  `;

  return (
    <Box sx={{ flex: 1 }}>
      <Box sx={{ minHeight: "calc(100vh - 70px)", position: "relative" }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.15fr 0.85fr" },
              alignItems: "center",
              gap: { xs: 6, md: 8 },
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: theme.palette.text.primary,
                  fontSize: 14,
                  fontWeight: 800,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  fontFamily: "Titillium Web, sans-serif",
                }}
              >
                {language.home.greeting} 👋 • {language.home.subtitle}
              </Typography>
              <Typography
                component="h3"
                sx={{
                  color: theme.palette.text.primary,
                  fontSize: { xs: "1.75rem", sm: "3rem", md: "4rem" },
                  lineHeight: 1.05,
                  letterSpacing: "-.04em",
                  fontWeight: 800,
                  mt: 2,
                  fontFamily: "Titillium Web, sans-serif",
                }}
              >
                {language.home.name}
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: { xs: 17, md: 19 },
                  lineHeight: 1.65,
                  maxWidth: 560,
                  mt: 3,
                }}
              >
                {language.home.me.description}
              </Typography>

              <ActionBar
                onNavigateToProjects={() => {
                  navigate("/projects");
                }}
              />
            </Box>

            <Portrait
              image={Me}
              statusTitle={language.v4.home.portrait.statusTitle}
              statusDescription={language.v4.home.portrait.statusDescription}
            />
          </Box>
        </Container>
        <Status />
        <Box
          sx={{
            pb: { xs: 2, md: 2 },
            pt: { xs: 0, md: 0 },
            textAlign: "center",
            display: { xs: "none", md: "block" },
          }}
        >
          <Box
            sx={{
              display: "inline-block",
              animation: `${float} 3s ease-in-out infinite`,
            }}
          >
            <ScrollDownButton componentRef={historyRef} />
          </Box>
        </Box>
      </Box>

      <Box ref={historyRef}>
        <History />
      </Box>
    </Box>
  );
}
