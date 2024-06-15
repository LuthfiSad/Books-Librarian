export const APP_CONFIG = {
  APP_NAME: import.meta.env.LIB_APP_NAME,
  BASE_URL: import.meta.env.LIB_BASE_URL,
};

document.title = APP_CONFIG.APP_NAME