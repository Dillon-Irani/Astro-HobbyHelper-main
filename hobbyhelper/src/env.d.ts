/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly XATA_API_KEY: string;
    readonly XATA_BRANCH?: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
    
  }

  declare module ".png";
  declare module ".svg";
  declare module ".jpeg";
  declare module ".jpg";


  