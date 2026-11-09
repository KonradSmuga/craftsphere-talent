import cvPdf from "../../_assets/konrad-smuga-cv.pdf?inline";
import { isValidCvToken } from "../../_lib/access";

/** The original CV as a PDF, only for valid CV links. */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ token: string }> },
): Promise<Response> {
  const { token } = await params;
  if (!isValidCvToken(token)) {
    return new Response("Not found", { status: 404, headers: { "Content-Type": "text/plain" } });
  }

  const base64 = cvPdf.slice(cvPdf.indexOf(",") + 1);
  const bytes = Uint8Array.from(atob(base64), (char) => char.charCodeAt(0));

  return new Response(bytes, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Konrad_Smuga_CV.pdf"',
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex, nofollow",
      "Referrer-Policy": "no-referrer",
    },
  });
}
