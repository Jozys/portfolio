import { Box } from "@mui/material";
import Portrait from "../../home/components/Portrait";
import Me from "../../../../assets/life/me.webp";
import { useLanguage } from "../../../../language/hooks";
import QuickFacts from "./QuickFacts";

export default function AboutMeContent() {
  const { language } = useLanguage();
  return (
    <Box sx={{ mb: { xs: 8, md: 12 } }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
          gap: { xs: 5, md: 7 },
          alignItems: "start",
        }}
      >
        <Portrait
          image={Me}
          alt={language.home.name}
          mode="about"
          statusDescription={language.home.portrait.statusDescription}
          statusTitle={language.home.portrait.statusTitle}
        />
        <QuickFacts />
      </Box>
    </Box>
  );
}
