import { Box, Container } from "@mui/material";
import Skills from "./components/Skills";

export default function About() {
  return (
    <Box sx={{ flex: 1 }}>
      <Box sx={{ minHeight: "calc(100vh - 70px)", position: "relative" }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Skills />
        </Container>
      </Box>
    </Box>
  );
}
