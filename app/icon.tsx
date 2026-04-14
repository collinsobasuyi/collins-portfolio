import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #10b981, #14b8a6)",
          borderRadius: 8,
        }}
      >
        <span
          style={{
            color: "#fff",
            fontSize: 18,
            fontWeight: 800,
            lineHeight: 1,
            fontFamily: "sans-serif",
            letterSpacing: -0.5,
          }}
        >
          C
        </span>
      </div>
    ),
    { width: 32, height: 32 }
  );
}
