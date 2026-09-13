import { ImageResponse } from "next/og";

export const alt = "PlainDoc — Free Plain English Document Explainer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #4338ca 0%, #312e81 100%)",
          padding: "60px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              background: "rgba(255,255,255,0.2)",
              borderRadius: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "42px",
            }}
          >
            📄
          </div>
          <span style={{ fontSize: "64px", fontWeight: "800", color: "white" }}>PlainDoc</span>
        </div>

        <p
          style={{
            fontSize: "32px",
            color: "rgba(199, 210, 254, 0.95)",
            textAlign: "center",
            margin: "0 0 48px",
            fontWeight: "600",
            lineHeight: "1.35",
            maxWidth: "800px",
          }}
        >
          Understand any legal document — in plain English. 100% free.
        </p>

        <div style={{ display: "flex", gap: "12px" }}>
          <span style={{ background: "rgba(255,255,255,0.18)", color: "white", padding: "8px 20px", borderRadius: "999px", fontSize: "18px" }}>
            Rental Agreements
          </span>
          <span style={{ background: "rgba(255,255,255,0.18)", color: "white", padding: "8px 20px", borderRadius: "999px", fontSize: "18px" }}>
            Medical Bills
          </span>
          <span style={{ background: "rgba(255,255,255,0.18)", color: "white", padding: "8px 20px", borderRadius: "999px", fontSize: "18px" }}>
            Contracts
          </span>
          <span style={{ background: "rgba(255,255,255,0.18)", color: "white", padding: "8px 20px", borderRadius: "999px", fontSize: "18px" }}>
            + More
          </span>
        </div>

        <p
          style={{
            position: "absolute",
            bottom: "36px",
            fontSize: "20px",
            color: "rgba(165, 180, 252, 0.8)",
            fontWeight: "500",
          }}
        >
          plaindoc.app
        </p>
      </div>
    ),
    size,
  );
}
