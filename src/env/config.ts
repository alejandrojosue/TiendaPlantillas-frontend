// Variables extraídas de .env
export const {
  PUBLIC_STRAPI_HOST,
  PUBLIC_COMPANY_NAME,
  PUBLIC_USER_CREATE_TOKEN
} = import.meta.env;

// Número máximo de intentos de solicitud de la API
export const MAX_RETRIES = 3;
