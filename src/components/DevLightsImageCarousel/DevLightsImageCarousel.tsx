import { Theme, makeStyles } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import DevLights_Desktop from "../../assets/devlight/devlights_desktop_1.jpg";
import Image1 from "../../assets/devlight/images/image1.jpg";
import Image3 from "../../assets/devlight/images/image3.jpg";
import ESPBreadboard from "../../assets/esp_breadboard.jpeg";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
  carousel: {
    height: "25%",
    borderRadius: 12,
    overflow: "hidden",
  },
  item: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "80%",
    overflow: "hidden",
    borderRadius: 12,
  },
  innerItem: {
    width: "40%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  text: {
    fontSize: "2em",
    textAlign: "center",
  },
}));

export default function DevLightsImageCarousel() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Carousel
        showArrows
        showThumbs
        showStatus={false}
        autoPlay
        interval={10000}
        transitionTime={700}
        stopOnHover
        centerMode
        centerSlidePercentage={100}
        infiniteLoop
        className={styles.carousel}
        verticalSwipe="standard"
      >
        <div className={styles.item}>
          <div className={styles.innerItem}>
            <img
              alt="a green led strip"
              style={{ borderRadius: 12, width: "100%" }}
              src={Image1}
            ></img>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.innerItem}>
            <img
              alt="an esp microcontroller on a breadboard with a led strip in the background"
              style={{ borderRadius: 12, width: "100%" }}
              src={ESPBreadboard}
            ></img>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.innerItem}>
            <img
              alt="The esp8266 microcontroller"
              style={{ borderRadius: 12, width: "100%" }}
              src={Image3}
            ></img>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.innerItem}>
            <img
              alt="A screenshot from the devlights desktop app"
              style={{ borderRadius: 12, width: "100%" }}
              src={DevLights_Desktop}
            ></img>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
