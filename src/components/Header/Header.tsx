import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { contrastBlack } from "../../utils/textContrast";
import { useLanguage } from "../LanguageProvider";
import Typing from "../Typing";

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    textAlign: "center",
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
  },
}));

export default function Header() {
  const styles = useStyles();
  const { language } = useLanguage();

  return (
    <div>
      <Typing text={`${language.home.greeting}\n${language.home.name}`} />
      <h1 className={styles.title}>{language.home.subtitle}</h1>
    </div>
  );
}
