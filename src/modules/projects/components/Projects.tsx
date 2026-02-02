import { Box, styled, keyframes } from "@mui/material";
import { useLanguage } from "../../../language/hooks";
import Header from "../../core/components/Header";
import ProjectsTimeline from "./ProjectsTimeline";
import Skills from "./Skills";

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage:
      theme.palette.mode === "dark"
        ? "radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)"
        : "radial-gradient(circle, rgba(0, 0, 0, 0.03) 1px, transparent 1px)",
    backgroundSize: "30px 30px",
    opacity: 0.5,
    pointerEvents: "none",
    zIndex: 0,
  },
}));

const DecorativeAccent = styled(Box)(({ theme }) => ({
  position: "absolute",
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  opacity: 0.15,
  pointerEvents: "none",
  borderRadius: theme.spacing(2),
}));

export default function Projects() {
  const { language } = useLanguage();
  return (
    <PageContainer>
      <DecorativeAccent
        sx={{
          width: { xs: "60px", sm: "80px", md: "120px" },
          height: { xs: "60px", sm: "80px", md: "120px" },
          top: { xs: "5%", md: "8%" },
          right: { xs: "5%", md: "10%" },
          animation: `${slideInRight} 1s ease-out`,
        }}
      />
      <DecorativeAccent
        sx={{
          width: { xs: "40px", sm: "60px", md: "80px" },
          height: { xs: "40px", sm: "60px", md: "80px" },
          bottom: { xs: "20%", md: "25%" },
          left: { xs: "5%", md: "8%" },
          animation: `${slideInLeft} 1.2s ease-out`,
        }}
      />
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Header title={language.projects.main.title} />
        <ProjectsTimeline />
        <Skills />
      </Box>
    </PageContainer>
  );
}
