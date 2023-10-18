import { Theme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import DevLights_Desktop from "../../assets/devlight/devlights_desktop_1.jpg";
import Image1 from "../../assets/devlight/images/image1.jpg";
import Image3 from "../../assets/devlight/images/image3.jpg";
import ESPBreadboard from "../../assets/esp_breadboard.jpeg";

const PREFIX = "DevLightsImageCarousel";

const classes = {
  root: `${PREFIX}-root`,
  carousel: `${PREFIX}-carousel`,
  item: `${PREFIX}-item`,
  innerItem: `${PREFIX}-innerItem`,
  text: `${PREFIX}-text`,
};

const Root = styled("div")(({ theme }: { theme: Theme }) => ({
  [`& .${classes.root}`]: {
    height: "100%",
    width: "100%",
  },

  [`& .${classes.carousel}`]: {
    height: "25%",
    borderRadius: 12,
    overflow: "hidden",
  },

  [`& .${classes.item}`]: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "80%",
    overflow: "hidden",
    borderRadius: 12,
  },

  [`& .${classes.innerItem}`]: {
    width: "40%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },

  [`& .${classes.text}`]: {
    fontSize: "2em",
    textAlign: "center",
  },
}));

export default function DevLightsImageCarousel() {
  return (
    <Root className={classes.root}>
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
        className={classes.carousel}
        verticalSwipe="standard"
      >
        <div className={classes.item}>
          <div className={classes.innerItem}>
            <img
              alt="a green led strip"
              style={{ borderRadius: 12, width: "100%" }}
              src={Image1}
            ></img>
          </div>
        </div>

        <div className={classes.item}>
          <div className={classes.innerItem}>
            <img
              alt="an esp microcontroller on a breadboard with a led strip in the background"
              style={{ borderRadius: 12, width: "100%" }}
              src={ESPBreadboard}
            ></img>
          </div>
        </div>
        <div className={classes.item}>
          <div className={classes.innerItem}>
            <img
              alt="The esp8266 microcontroller"
              style={{ borderRadius: 12, width: "100%" }}
              src={Image3}
            ></img>
          </div>
        </div>
        <div className={classes.item}>
          <div className={classes.innerItem}>
            <img
              alt="A screenshot from the devlights desktop app"
              style={{ borderRadius: 12, width: "100%" }}
              src={DevLights_Desktop}
            ></img>
          </div>
        </div>
      </Carousel>
    </Root>
  );
}
