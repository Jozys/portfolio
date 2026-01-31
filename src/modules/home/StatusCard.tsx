import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  keyframes,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  getAllStatusInformations,
  getStatusInformationDescription,
  getStatusInformationTitle,
} from "../../data/StatusInformation";
import { useLanguage } from "../../language/hooks";

const PREFIX = "StatusCard";

const classes = {
  gridContainer: `${PREFIX}-gridContainer`,
};

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const StatusCardStyled = styled(Card)(({ theme }) => ({
  maxWidth: "950px",
  margin: "0 auto",
  borderRadius: theme.spacing(2),
  position: "relative",
  zIndex: 10,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 8px 32px rgba(0, 0, 0, 0.3)"
      : "0 4px 20px rgba(0, 0, 0, 0.1)",
  background:
    theme.palette.mode === "dark"
      ? theme.palette.primary.dark
      : theme.palette.primary.light,
  backdropFilter: "blur(10px)",
  border: `1px solid ${
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.1)"
      : "rgba(0, 0, 0, 0.05)"
  }`,
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  },
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 12px 40px rgba(0, 0, 0, 0.4)"
        : "0 8px 28px rgba(0, 0, 0, 0.15)",
  },
  [`& .${classes.gridContainer}`]: {
    alignItems: "center",
  },
}));

const StatusItem = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1.5),
  transition: "all 0.3s ease-in-out",
  position: "relative",
  "&:not(:last-child)::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "80%",
    height: "1px",
    background:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.05)"
        : "rgba(0, 0, 0, 0.05)",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  [theme.breakpoints.up("md")]: {
    "&:not(:last-child)::after": {
      content: '""',
      position: "absolute",
      right: 0,
      top: "50%",
      transform: "translateY(-50%)",
      width: "1px",
      height: "60%",
      background:
        theme.palette.mode === "dark"
          ? "rgba(255, 255, 255, 0.1)"
          : "rgba(0, 0, 0, 0.08)",
    },
  },
  "&:hover": {
    background:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.03)"
        : "rgba(0, 0, 0, 0.02)",
    transform: "scale(1.03)",
    "& .icon-wrapper": {
      animation: `${pulse} 0.6s ease-in-out`,
    },
  },
}));

export default function StatusCard() {
  const statusInformation = getAllStatusInformations();
  const { language } = useLanguage();
  return (
    <StatusCardStyled elevation={3}>
      <CardContent sx={{ py: { xs: 2, md: 3 }, px: { xs: 2, md: 3 } }}>
        <Grid
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          container
          spacing={0}
        >
          {statusInformation.map((currentStatus, index) => (
            <Grid item xs={12} md={4} key={index}>
              <StatusItem
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  py: { xs: 2.5, md: 2 },
                }}
              >
                <Box
                  className="icon-wrapper"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mb={1.5}
                >
                  {currentStatus.icon}
                  <Typography variant="subtitle1" fontWeight="bold">
                    {getStatusInformationTitle(currentStatus, language)}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  px={{ xs: 1, md: 2 }}
                  sx={{ textAlign: "center" }}
                >
                  {getStatusInformationDescription(currentStatus, language)}
                </Typography>
              </StatusItem>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </StatusCardStyled>
  );
}
