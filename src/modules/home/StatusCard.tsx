import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
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

const StatusCardStyled = styled(Card)(({ theme }) => ({
  maxWidth: "950px",
  margin: "0 auto",
  marginTop: theme.spacing(-2),
  marginBottom: theme.spacing(4),
  borderRadius: theme.spacing(2),
  position: "relative",
  zIndex: 10,
  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
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
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
  },
  [`& .${classes.gridContainer}`]: {
    alignItems: "center",
  },
}));

export default function StatusCard() {
  const statusInformation = getAllStatusInformations();
  const { language } = useLanguage();
  return (
    <StatusCardStyled elevation={3}>
      <CardContent>
        <Grid
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          container
          spacing={2}
        >
          {statusInformation.map((currentStatus, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent={"center"}
                mb={1}
              >
                {currentStatus.icon}
                <Typography variant="subtitle1" fontWeight="bold">
                  {getStatusInformationTitle(currentStatus, language)}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" ml={4}>
                {getStatusInformationDescription(currentStatus, language)}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </StatusCardStyled>
  );
}
