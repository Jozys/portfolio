import { Timeline } from "@mui/lab";
import DevLights from "../../../assets/devlights.png";
import TECKboardApp from "../../../assets/teckboard_app.png";
import { useLanguage } from "../../../language/hooks";
import CustomizedTimelineItem from "../../core/design-system/TimelineItem";
import TimelineButton from "../design-system/TimelineButton";
export default function ProjectsTimeline() {
  const { language } = useLanguage();
  return (
    <Timeline position="alternate">
      <CustomizedTimelineItem
        title="... TECKboards"
        description={
          <>
            {language.projects.main.teckboard.description}
            <a rel="noreferrer" href="/projects/teckboard" target="_self">
              {language.projects.main.learnMore}
            </a>
          </>
        }
        direction="normal"
        rotateImage
        imageStyle={{ height: "50%", width: "25%" }}
        image={TECKboardApp}
        key="teckboard"
      />
      <CustomizedTimelineItem
        title="... DevLights"
        description={
          <>
            {language.projects.main.devlight.description}
            <a rel="noreferrer" href="/projects/devlights" target="_self">
              {language.projects.main.learnMore}
            </a>
          </>
        }
        direction="opposite"
        image={DevLights}
        key="devlights"
        rotateImage
        imageStyle={{ height: "50%", width: "25%" }}
        textChildren={
          <TimelineButton
            onClick={() => window.open("/devlights.pdf", "_blank")}
            title={language.projects.main.devlight.readDoc}
          />
        }
      />
    </Timeline>
  );
}
