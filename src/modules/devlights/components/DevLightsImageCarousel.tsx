import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import DevLights_Desktop from "../../../assets/projects/devlights/devlights_desktop_1.jpg";
import ESPBreadboard from "../../../assets/projects/devlights/esp_breadboard.jpeg";
import Image1 from "../../../assets/projects/devlights/images/image1.jpg";
import Image3 from "../../../assets/projects/devlights/images/image3.jpg";
import ImageCarousel from "../../core/design-system/ImageCarousel";

export default function DevLightsImageCarousel() {
  const images = [
    {
      src: Image1,
      alt: "a green led strip",
    },
    {
      src: ESPBreadboard,
      alt: "an esp microcontroller on a breadboard with a led strip in the background",
    },
    {
      src: Image3,
      alt: "The esp8266 microcontroller",
    },
    {
      src: DevLights_Desktop,
      alt: "A screenshot from the devlights desktop",
    },
  ];
  return <ImageCarousel images={images} />;
}
