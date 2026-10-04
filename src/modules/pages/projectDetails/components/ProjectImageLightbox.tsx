/* eslint-disable react/prop-types */
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Dialog,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";

export interface ParsedImage {
  src: string;
  alt: string;
  originalNode?: React.ReactNode;
}

export function parseDetailImage(
  imgNode: React.ReactNode,
  index: number,
): ParsedImage {
  if (typeof imgNode === "string") {
    return {
      src: imgNode,
      alt: `Project detail ${index + 1}`,
      originalNode: imgNode,
    };
  }
  if (React.isValidElement(imgNode)) {
    const props = imgNode.props as { src?: string; alt?: string };
    if (props?.src) {
      return {
        src: props.src,
        alt: props.alt || `Project detail ${index + 1}`,
        originalNode: imgNode,
      };
    }
  }
  return {
    src: "",
    alt: `Project detail ${index + 1}`,
    originalNode: imgNode,
  };
}

const TransparentPaper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(function TransparentPaper({ style, ...other }, ref) {
  return (
    <div
      ref={ref}
      {...other}
      style={{
        ...style,
        backgroundColor: "transparent",
        backgroundImage: "none",
        boxShadow: "none",
      }}
    />
  );
});
TransparentPaper.displayName = "TransparentPaper";

export interface ProjectImageLightboxProps {
  open: boolean;
  initialIndex?: number;
  images: React.ReactNode[];
  onClose: () => void;
}

export default function ProjectImageLightbox({
  open,
  initialIndex = 0,
  images,
  onClose,
}: ProjectImageLightboxProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const parsedImages = useMemo(() => {
    return images.map((img, idx) => parseDetailImage(img, idx));
  }, [images]);

  useEffect(() => {
    if (open) {
      setCurrentIndex(initialIndex);
    }
  }, [open, initialIndex]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, images.length, onClose]);

  if (!images || images.length === 0) return null;

  const currentImage = parsedImages[currentIndex] || parsedImages[0];
  const hasMultiple = images.length > 1;

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const controlStyle = {
    bgcolor: isDark ? "rgba(18, 22, 32, 0.8)" : "rgba(255, 255, 255, 0.85)",
    backdropFilter: "blur(12px)",
    border: `1px solid ${
      isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.1)"
    }`,
    color: theme.palette.text.primary,
    boxShadow: 3,
    zIndex: 1400,
    transition: "all 0.2s ease",
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      PaperComponent={TransparentPaper}
      slots={{
        paper: TransparentPaper,
      }}
      sx={{
        "& .MuiDialog-container": {
          backgroundColor: "transparent",
        },
        "& .MuiPaper-root, & .MuiDialog-paper": {
          backgroundColor: "transparent !important",
          background: "transparent !important",
          backgroundImage: "none !important",
          boxShadow: "none !important",
          overflow: "visible",
        },
      }}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: isDark
              ? "rgba(10, 15, 25, 0.92)"
              : "rgba(235, 240, 248, 0.92)",
            backdropFilter: "blur(14px)",
          },
        },
        paper: {
          style: {
            backgroundColor: "transparent",
            backgroundImage: "none",
            boxShadow: "none",
          },
          sx: {
            backgroundColor: "transparent !important",
            background: "transparent !important",
            backgroundImage: "none !important",
            boxShadow: "none !important",
            overflow: "visible",
            m: { xs: 1, sm: 2, md: 3 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          },
        },
      }}
    >
      {hasMultiple && (
        <Box
          sx={{
            ...controlStyle,
            position: "fixed",
            top: { xs: 16, sm: 24 },
            left: { xs: 16, sm: 24 },
            px: { xs: 1.5, sm: 2 },
            py: { xs: 0.6, sm: 0.8 },
            borderRadius: 2.5,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Titillium Web, sans-serif",
              fontWeight: 700,
              fontSize: { xs: 13, sm: 14 },
              color: theme.palette.text.primary,
              letterSpacing: ".05em",
            }}
          >
            {currentIndex + 1} / {images.length}
          </Typography>
        </Box>
      )}

      <IconButton
        onClick={onClose}
        aria-label="Close detail view"
        sx={{
          ...controlStyle,
          position: "fixed",
          top: { xs: 16, sm: 24 },
          right: { xs: 16, sm: 24 },
          p: { xs: 1, sm: 1.25 },
          "&:hover": {
            bgcolor: isDark
              ? "rgba(35, 45, 60, 0.95)"
              : "rgba(255, 255, 255, 1)",
            transform: "scale(1.08)",
          },
        }}
      >
        <CloseIcon />
      </IconButton>
      {hasMultiple && (
        <IconButton
          onClick={handlePrev}
          aria-label="Previous image"
          sx={{
            ...controlStyle,
            position: "fixed",
            left: { xs: 12, sm: 24, md: 32 },
            top: "50%",
            transform: "translateY(-50%)",
            p: { xs: 1, sm: 1.4 },
            "&:hover": {
              bgcolor: isDark
                ? "rgba(35, 45, 60, 0.95)"
                : "rgba(255, 255, 255, 1)",
              transform: "translateY(-50%) scale(1.1)",
            },
          }}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>
      )}

      {hasMultiple && (
        <IconButton
          onClick={handleNext}
          aria-label="Next image"
          sx={{
            ...controlStyle,
            position: "fixed",
            right: { xs: 12, sm: 24, md: 32 },
            top: "50%",
            transform: "translateY(-50%)",
            p: { xs: 1, sm: 1.4 },
            "&:hover": {
              bgcolor: isDark
                ? "rgba(35, 45, 60, 0.95)"
                : "rgba(255, 255, 255, 1)",
              transform: "translateY(-50%) scale(1.1)",
            },
          }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      )}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: { xs: "92vw", sm: "85vw", md: "80vw" },
          maxHeight: hasMultiple ? "72vh" : "80vh",
          p: { xs: 1, sm: 2 },
          borderRadius: 3,
          bgcolor: isDark
            ? "rgba(18, 22, 32, 0.6)"
            : "rgba(255, 255, 255, 0.75)",
          backdropFilter: "blur(12px)",
          border: `1px solid ${
            isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.08)"
          }`,
          boxShadow: isDark
            ? "0 20px 50px rgba(0,0,0,0.8)"
            : "0 15px 40px rgba(0,0,0,0.12)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "100%",
            maxHeight: hasMultiple ? "68vh" : "76vh",
            "& img": {
              maxWidth: "100%",
              maxHeight: hasMultiple ? "68vh" : "76vh",
              objectFit: "contain",
              borderRadius: 2,
              filter: isDark
                ? "drop-shadow(0 10px 24px rgba(0,0,0,0.7))"
                : "drop-shadow(0 8px 18px rgba(0,0,0,0.15))",
            },
          }}
        >
          {currentImage.src ? (
            <img src={currentImage.src} alt={currentImage.alt} />
          ) : (
            currentImage.originalNode
          )}
        </Box>
      </Box>

      {hasMultiple && (
        <Stack
          direction="row"
          spacing={1.5}
          sx={{
            mt: 2,
            px: 2,
            py: 1.2,
            borderRadius: 3,
            bgcolor: isDark
              ? "rgba(18, 22, 32, 0.6)"
              : "rgba(255, 255, 255, 0.75)",
            backdropFilter: "blur(12px)",
            border: `1px solid ${
              isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.08)"
            }`,
            maxWidth: "92vw",
            overflowX: "auto",
            "&::-webkit-scrollbar": {
              height: 4,
            },
            "&::-webkit-scrollbar-thumb": {
              bgcolor: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)",
              borderRadius: 2,
            },
          }}
        >
          {parsedImages.map((img, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <Box
                key={idx}
                role="button"
                tabIndex={0}
                aria-label={`Select image ${idx + 1}`}
                onClick={() => setCurrentIndex(idx)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setCurrentIndex(idx);
                  }
                }}
                sx={{
                  width: { xs: 52, sm: 64 },
                  height: { xs: 52, sm: 64 },
                  flexShrink: 0,
                  borderRadius: 2,
                  overflow: "hidden",
                  cursor: "pointer",
                  border: `2px solid ${
                    isSelected ? theme.palette.primary.main : "transparent"
                  }`,
                  opacity: isSelected ? 1 : 0.5,
                  transform: isSelected ? "scale(1.05)" : "scale(1)",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    opacity: 1,
                    transform: "scale(1.08)",
                  },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: isDark
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(0,0,0,0.03)",
                  "& img": {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  },
                }}
              >
                {img.src ? (
                  <img src={img.src} alt={img.alt} />
                ) : (
                  img.originalNode
                )}
              </Box>
            );
          })}
        </Stack>
      )}
    </Dialog>
  );
}
