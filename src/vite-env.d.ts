/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_USER_BIRTHDATE: string;

  // Social media links
  readonly VITE_USER_INSTAGRAM: string;
  readonly VITE_USER_MAIL: string;
  readonly VITE_USER_DISCORD: string;
  readonly VITE_USER_LINKEDIN: string;
  readonly VITE_USER_GITHUB: string;

  // Project links
  readonly VITE_TECKBOARD_LINK: string;
  readonly VITE_DEVLIGHTS_LINK: string;
  readonly VITE_SIMPLEQ_LINK: string;
  readonly VITE_DB_DELAY_LINK: string;
}
