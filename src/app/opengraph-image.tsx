import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "ARSLAN ELEKTRİK — Samsun";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoBuffer = await readFile(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0B0B0B",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 28 }}>
          {}
          <img
            src={logoSrc}
            width={72}
            height={72}
            alt=""
            style={{ borderRadius: 999, objectFit: "cover" }}
          />
          <div style={{ fontSize: 28, letterSpacing: -1, fontWeight: 700 }}>
            ARSLAN ELEKTRİK
          </div>
        </div>
        <div
          style={{
            fontSize: 58,
            fontWeight: 700,
            letterSpacing: -2,
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          Kaliteli Elektrik Çözümleri
        </div>
        <div style={{ marginTop: 24, fontSize: 22, color: "rgba(255,255,255,0.85)" }}>
          Samsun · Tesisat · Arıza · Pano · LED · Yazılı Garanti
        </div>
      </div>
    ),
    { ...size }
  );
}
