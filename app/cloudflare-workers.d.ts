// Minimal typing for the Workers runtime module used by the form endpoints.
declare module "cloudflare:workers" {
  export const env: Record<string, unknown>;
}
