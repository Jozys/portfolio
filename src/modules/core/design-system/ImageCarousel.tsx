import { styled } from "@mui/material";
import { Carousel } from "react-responsive-carousel";

type Image = {
  src: string;
  alt: string;
};

export interface ImageCarouselProps {
  images: Image[];
}

const PREFIX = "ImageCarousel";

const classes = {
  root: `${PREFIX}-root`,
  carousel: `${PREFIX}-carousel`,
  item: `${PREFIX}-item`,
  innerItem: `${PREFIX}-innerItem`,
  text: `${PREFIX}-text`,
  image: `${PREFIX}-image`,
};

const Root = styled("div")(() => ({
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
  [`& .${classes.image}`]: {
    borderRadius: 12,
    width: "100%",
  },
}));

export default function ImageCarousel(props: ImageCarouselProps) {
  return (
    <Root>
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
        {props.images.map((image) => (
          <div key={image.src} className={classes.item}>
            <div className={classes.innerItem}>
              <img src={image.src} alt={image.alt} className={classes.image} />
            </div>
          </div>
        ))}
      </Carousel>
    </Root>
  );
}
