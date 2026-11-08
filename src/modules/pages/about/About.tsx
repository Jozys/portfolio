import { Box, Container } from "@mui/material";
import { useLanguage } from "../../../language/hooks";
import PageMeta from "../../core/PageMeta";
import Skills from "./components/Skills";
import AboutMeHeading from "./components/AboutMeHeading";
import AboutMeContent from "./components/AboutMeContent";
import Milestones from "./components/Milestones";

export default function About() {
  const { language } = useLanguage();

  return (
    <Box sx={{ flex: 1 }}>
      <PageMeta
        title={language.about.me.title}
        description={
          language.about.me.shortDescription || language.about.me.description
        }
        path="/me"
      />
      <Box sx={{ minHeight: "calc(100vh - 70px)", position: "relative" }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <AboutMeHeading />
          <AboutMeContent />
          <Milestones />
          <Skills />
        </Container>
      </Box>
    </Box>
  );
}
