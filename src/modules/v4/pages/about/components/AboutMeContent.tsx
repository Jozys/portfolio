import { Box } from "@mui/material";
import Portrait from "../../home/components/Portrait";
import Me from "../../../../../assets/life/me.jpg";
import QuickFacts from "./QuickFacts";

export default function AboutMeContent() {
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
          mode="about"
          statusDescription="Walldorf • Full Stack & AI"
          statusTitle="Software Engineer @ SAP"
        />
        <QuickFacts />
      </Box>
    </Box>
  );
}
