// Minimal typing for the Workers runtime module used by the form endpoints.
declare module "cloudflare:workers" {
  export const env: Record<string, unknown>;
}

// Vite inlines a "?inline" import as a base64 data URL (used for the private CV PDF).
declare module "*.pdf?inline" {
  const dataUrl: string;
  export default dataUrl;
}
