import { ImageResponse } from "next/og";

export const alt = "Amberprint Studio — fossil-inspired sculptural wall panels";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "#1c1917",
          background:
            "radial-gradient(circle at 78% 24%, rgba(217,119,6,.34), transparent 30%), linear-gradient(135deg, #fdfcf9 0%, #f5e8d7 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 32, fontWeight: 600 }}>
          Amberprint Studio
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div
            style={{
              display: "flex",
              marginBottom: 20,
              color: "#92400e",
              fontFamily: "Arial, sans-serif",
              fontSize: 22,
              letterSpacing: 5,
              textTransform: "uppercase",
            }}
          >
            Sculptural wall art
          </div>
          <div style={{ display: "flex", fontSize: 72, lineHeight: 1.05 }}>
            Inspired by Fossils and Amber
          </div>
        </div>
      </div>
    ),
    size,
  );
}
