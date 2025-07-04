import {
  Box,
  Dialog,
  IconButton,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";

import CloseIcon from "@mui/icons-material/Close";
import { Carousel } from "react-responsive-carousel";

type Image = {
  src: string;
  alt: string;
  caption: string;
};

export interface ImageCarouselProps {
  images: Image[];
}

const PREFIX = "ImageCarousel";

const classes = {
  root: `${PREFIX}-root`,
  carousel: `${PREFIX}-carousel`,
  slide: `${PREFIX}-slide`,
  image: `${PREFIX}-image`,
  caption: `${PREFIX}-caption`,
  zoomButton: `${PREFIX}-zoomButton`,
  navButton: `${PREFIX}-navButton`,
};

const Root = styled("div")(({ theme }) => ({
  [`& .${classes.root}`]: {
    height: "100%",
    width: "100%",
  },

  [`& .${classes.carousel}`]: {
    height: "25%",
    borderRadius: 12,
    overflow: "hidden",
  },
  [`& .${classes.image}`]: {
    borderRadius: 12,
    width: "100%",
  },
  [`& .${classes.carousel}`]: {
    "& .carousel .slide": {
      backgroundColor: "transparent",
    },
    "& .carousel .control-dots": {
      marginBottom: "12px",
    },
    "& .carousel .control-dot": {
      backgroundColor: theme.palette.primary.main,
      opacity: 0.5,
      "&.selected": {
        opacity: 1,
      },
    },
    "& .carousel .carousel-status": {
      display: "none",
    },
  },

  [`& .${classes.slide}`]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    position: "relative",
  },

  [`& .${classes.image}`]: {
    width: "100%",
    height: "auto",
    maxHeight: "60vh",
    objectFit: "contain",
    borderRadius: theme.shape.borderRadius,
    transition: "transform 0.3s ease",
  },

  [`& .${classes.caption}`]: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    background: "rgba(0,0,0,0.6)",
    color: "#fff",
    padding: theme.spacing(1, 2),
    textAlign: "center",
    fontSize: "0.9rem",
  },

  [`& .${classes.zoomButton}`]: {
    position: "absolute",
    right: theme.spacing(2),
    bottom: theme.spacing(2),
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "#fff",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.7)",
    },
  },

  [`& .${classes.navButton}`]: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(0,0,0,0.3)",
    color: "#fff",
    padding: theme.spacing(0.5),
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
  },
}));

export default function ImageCarousel(props: ImageCarouselProps) {
  const { images } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleZoom = (image: string) => {
    setZoomedImage(image);
  };

  const handleCloseZoom = () => {
    setZoomedImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape" && zoomedImage) handleCloseZoom();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [zoomedImage]);

  return (
    <Root>
      <Carousel
        className={classes.carousel}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        selectedItem={currentIndex}
        onChange={setCurrentIndex}
        autoPlay
        interval={6000}
        infiniteLoop
      >
        {images.map((image, index) => (
          <div key={`devlight-image-${index}`} className={classes.slide}>
            <img src={image.src} alt={image.alt} className={classes.image} />
            <Typography className={classes.caption}>{image.caption}</Typography>
            {!isMobile && (
              <IconButton
                className={classes.zoomButton}
                onClick={() => handleZoom(image.src)}
                size="small"
              >
                <ZoomOutMapIcon />
              </IconButton>
            )}
          </div>
        ))}
      </Carousel>

      {!isMobile && (
        <>
          <IconButton
            onClick={handlePrev}
            className={classes.navButton}
            style={{ left: theme.spacing(2) }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            onClick={handleNext}
            className={classes.navButton}
            style={{ right: theme.spacing(2) }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </>
      )}

      <Dialog
        open={!!zoomedImage}
        onClose={handleCloseZoom}
        maxWidth="xl"
        fullWidth
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
            overflow: "hidden",
          },
        }}
      >
        <Box position="relative">
          <IconButton
            onClick={handleCloseZoom}
            sx={{
              position: "absolute",
              right: theme.spacing(2),
              top: theme.spacing(2),
              backgroundColor: "rgba(0,0,0,0.5)",
              color: "#fff",
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.7)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={zoomedImage || ""}
            alt="Enlarged view"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "90vh",
              objectFit: "contain",
            }}
          />
        </Box>
      </Dialog>
    </Root>
  );
}
