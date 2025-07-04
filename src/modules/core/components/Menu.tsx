import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HomeOutlined } from "@mui/icons-material";
import { styled, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { contrastBlack } from "../../../modules/core/utils/textContrast";
import Settings from "../../settings/components/Settings";

const PREFIX = "Menu";

const classes = {
  navBarContainer: `${PREFIX}-navBarContainer`,
  navBar: `${PREFIX}-navBar`,
  themeSwitcher: `${PREFIX}-themeSwitcher`,
  icon: `${PREFIX}-icon`,
  link: `${PREFIX}-link`,
};

const StyledMenu = styled("div")(({ theme }) => ({
  [`& .${classes.navBarContainer}`]: {
    display: "flex",
    margin: 0,
    padding: 0,
  },

  [`& .${classes.navBar}`]: {
    alignContent: "space-between",
    marginLeft: 0,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    display: "flex",
    flex: 6,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
  },

  [`& .${classes.themeSwitcher}`]: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
  },
  [`& .${classes.icon}`]: {
    color: contrastBlack(theme.palette.primary.main) ? "#000" : "#fff",
  },
  [`& .${classes.link}`]: { display: "flex", alignSelf: "center" },
}));

export default function Menu() {
  const theme = useTheme();
  return (
    <StyledMenu>
      <nav className={classes.navBarContainer}>
        <ul className={classes.navBar}>
          <Link to="/home">
            <HomeOutlined fontSize="large" className={classes.icon} />
          </Link>
          <Link className={classes.link} to="/projects">
            <FontAwesomeIcon
              className={classes.icon}
              icon={faLaptopCode as IconProp}
              color={
                contrastBlack(theme.palette.background.default)
                  ? "#000"
                  : "#fff"
              }
              size={"2x"}
            />
          </Link>
          <Settings />
        </ul>
      </nav>
    </StyledMenu>
  );
}
