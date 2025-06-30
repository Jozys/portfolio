import { styled } from "@mui/material/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import DevLights_Desktop from "../../../assets/projects/devlights/devlights_desktop_1.jpg";
import ESPBreadboard from "../../../assets/projects/devlights/esp_breadboard.jpeg";
import Image1 from "../../../assets/projects/devlights/images/image1.jpg";
import Image3 from "../../../assets/projects/devlights/images/image3.jpg";
import ImageCarousel from "../../core/design-system/ImageCarousel";

const PREFIX = "DevLightsImageCarousel";

const classes = {
  root: `${PREFIX}-root`,
  carousel: `${PREFIX}-carousel`,
  slide: `${PREFIX}-slide`,
  image: `${PREFIX}-image`,
  caption: `${PREFIX}-caption`,
  zoomButton: `${PREFIX}-zoomButton`,
  navButton: `${PREFIX}-navButton`,
};

const StyledCarousel = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    width: "100%",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    overflow: "hidden",
  },
}));

export default function DevLightsImageCarousel() {
  const images = [
    {
      src: Image1,
      alt: "A green LED strip showcasing the DevLights project",
      caption: "Green LED strip in action",
    },
    {
      src: ESPBreadboard,
      alt: "An ESP microcontroller on a breadboard with a LED strip in the background",
      caption: "ESP8266 setup on breadboard with LED connection",
    },
    {
      src: Image3,
      alt: "The ESP8266 microcontroller closeup",
      caption: "ESP8266 microcontroller - the brain of DevLights",
    },
    {
      src: DevLights_Desktop,
      alt: "A screenshot from the DevLights desktop application",
      caption: "DevLights desktop application interface",
    },
  ];

  return (
    <StyledCarousel className={classes.root}>
      <ImageCarousel images={images} />
    </StyledCarousel>
  );
}
