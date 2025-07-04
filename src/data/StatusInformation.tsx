import { StatusInformation } from "./types/StatusInformation";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import { getNestedValue } from "../utils/utils";
import { Language } from "../language";
export const statusInformation: Record<string, StatusInformation> = {
  currentWork: {
    name: "status.currentWork.name",
    description: "status.currentWork.description",
    icon: <WorkIcon color="secondary" fontSize="small" sx={{ mr: 1 }} />,
  },
  currentFocus: {
    name: "status.currentFocus.name",
    description: "status.currentFocus.description",
    icon: <CodeIcon color="secondary" fontSize="small" sx={{ mr: 1 }} />,
  },
  location: {
    name: "status.location.name",
    description: "status.location.description",
    icon: <LocationOnIcon color="secondary" fontSize="small" sx={{ mr: 1 }} />,
  },
};

/**
 * Get the statusInformation description based on the provided language object.
 * @param statusInformation - The project object containing the description.
 * @param language - The language object containing translations.
 * @return The statusInformation description as a string or React node.
 */
export const getStatusInformationDescription = (
  statusInformation: StatusInformation,
  language: Language
): string | React.ReactNode => {
  if (statusInformation.description) {
    return (
      getNestedValue(language, statusInformation.description) ||
      statusInformation.description
    );
  }
  return statusInformation.description;
};

/**
 * Get the statusInformation title based on the provided language object.
 * @param statusInformation - The project object containing the name.
 * @param language - The language object containing translations.
 * @returns The statusInformation title as a string. Either the translated title or the original name if no translation is found.
 */
export const getStatusInformationTitle = (
  statusInformation: StatusInformation,
  language: Language
): string => {
  if (statusInformation.name) {
    return (
      getNestedValue(language, statusInformation.name) || statusInformation.name
    );
  }
  return statusInformation.name;
};

/**
 * Returns an array of all projects defined in the projects object.
 * @returns An array of all projects.
 */
export const getAllStatusInformations = (): StatusInformation[] => {
  return Object.values(statusInformation);
};
