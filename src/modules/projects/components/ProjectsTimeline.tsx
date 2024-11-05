import { Timeline } from "@mui/lab";
import DevLights from "../../../assets/devlights.png";
import TECKboardApp from "../../../assets/teckboard_app.png";
import SimpleQ from "../../../assets/simpleQ.png";
import DBDelay from "../../../assets/db_delay.png";
import { useLanguage } from "../../../language/hooks";
import CustomizedTimelineItem from "../../core/design-system/TimelineItem";
import TimelineButton from "../design-system/TimelineButton";
export default function ProjectsTimeline() {
  const { language } = useLanguage();
  return (
    <Timeline position="alternate">
      <CustomizedTimelineItem
        title={language.projects.main.teckboard.title}
        description={
          <>
            {language.projects.main.teckboard.description}{" "}
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
        title={language.projects.main.devlight.title}
        description={
          <>
            {language.projects.main.devlight.description}{" "}
            <a rel="noreferrer" href="/projects/devlights" target="_self">
              {language.projects.main.learnMore}
            </a>
          </>
        }
        direction="opposite"
        image={DevLights}
        key="devlights"
        containerStyle={{ marginTop: "10vh" }}
        rotateImage
        imageStyle={{ height: "50%", width: "25%" }}
        textChildren={
          <TimelineButton
            onClick={() => window.open("/devlights.pdf", "_blank")}
            title={language.projects.main.devlight.readDoc}
          />
        }
      />
      <CustomizedTimelineItem
        title={language.projects.main.simpleQ.title}
        description={language.projects.main.simpleQ.description}
        direction="normal"
        rotateImage
        containerStyle={{ marginTop: "10vh" }}
        imageStyle={{ height: "auto", width: "45%" }}
        image={SimpleQ}
        key="simpleQ"
      />
      <CustomizedTimelineItem
        title={language.projects.main.dbDelay.title}
        description={language.projects.main.dbDelay.description}
        containerStyle={{ marginTop: "10vh" }}
        direction="opposite"
        rotateImage
        imageStyle={{ height: "auto", width: "45%" }}
        image={DBDelay}
        key="dbDelay"
      />
    </Timeline>
  );
}
