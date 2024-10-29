import { useLanguage } from "../../../language/hooks";
import Header from "../../core/components/Header";
import ProjectsTimeline from "./ProjectsTimeline";
import Skills from "./Skills";

export default function Projects() {
  const { language } = useLanguage();
  return (
    <div>
      <Header title={language.projects.main.title} />
      <ProjectsTimeline />
      <Skills />
    </div>
  );
}
