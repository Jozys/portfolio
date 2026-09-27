import { Box, Container } from "@mui/material";
import Skills from "./components/Skills";
import AboutMeHeading from "./components/AboutMeHeading";
import AboutMeContent from "./components/AboutMeContent";

export default function About() {
  return (
    <Box sx={{ flex: 1 }}>
      <Box sx={{ minHeight: "calc(100vh - 70px)", position: "relative" }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <AboutMeHeading />
          <AboutMeContent />
          <Skills />
        </Container>
      </Box>
    </Box>
  );
}
