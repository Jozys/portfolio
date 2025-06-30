import GitHubIcon from "@mui/icons-material/GitHub";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { Box, Button, Typography } from "@mui/material";
import { useRef } from "react";
import { getProjectById } from "../../../data/Projects";
import { useLanguage } from "../../../language/hooks";
import ProjectPage, {
  classes,
} from "../../projects/details/design-system/ProjectPage";
import LEDStrip from "../design-system/LEDStrip";
import DevLightsImageCarousel from "./DevLightsImageCarousel";
import DevLightsTimeline from "./DevLightsTimeline";

export default function DevLights() {
  const { language } = useLanguage();
  const { devlight } = language.projects;
  const devlightsProject = getProjectById("devlight");
  const componentRef = useRef<HTMLDivElement>(null);

  const carouselSection = (
    <Box sx={{ maxWidth: "900px", margin: "0 auto" }}>
      <DevLightsImageCarousel />
    </Box>
  );

  const devlightsHero = (
    <>
      <LEDStrip />
      {carouselSection}
    </>
  );

  const devlightsEvolutionSection = (
    <Box sx={{ marginBottom: 4 }}>
      <Typography className={classes.text} sx={{ marginBottom: 2 }}>
        {devlight.evolution.description}
      </Typography>
    </Box>
  );

  const timelineSection = <DevLightsTimeline />;

  const actionButtonsSection = (
    <Box sx={{ textAlign: "center" }}>
      <Box>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() =>
            window.open("https://github.com/ProjektDevLights", "_blank")
          }
          startIcon={<GitHubIcon />}
        >
          {devlight.github}
        </Button>

        <Button
          variant="outlined"
          size="large"
          onClick={() => window.open("/devlights.pdf", "_blank")}
          startIcon={<PictureAsPdfIcon />}
        >
          Documentation PDF
        </Button>
      </Box>

      <Typography className={classes.text} sx={{ marginTop: 2 }}>
        {devlight.last}{" "}
        <a
          className={classes.link}
          href="/devlights.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          PDF Documentation
        </a>
      </Typography>
    </Box>
  );

  return (
    <ProjectPage
      title={devlight.title}
      hero={devlightsHero}
      technologies={devlightsProject?.technologies}
      projectDescription={{
        title: devlight.title || "Project Description",
        description: devlight.summary || "",
        ref: componentRef,
      }}
      sections={[
        {
          title: devlight.evolution.title || "Project Timeline",
          content: devlightsEvolutionSection,
        },
        {
          title: devlight.projectTimelineTitle || "Project Timeline",
          content: timelineSection,
        },
        {
          title: "Open Source",
          content: actionButtonsSection,
        },
      ]}
    />
  );
}
