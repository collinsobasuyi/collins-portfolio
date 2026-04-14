import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #10b981, #14b8a6)",
          borderRadius: 40,
        }}
      >
        <span
          style={{
            color: "#fff",
            fontSize: 100,
            fontWeight: 800,
            lineHeight: 1,
            fontFamily: "sans-serif",
            letterSpacing: -2,
          }}
        >
          C
        </span>
      </div>
    ),
    { width: 180, height: 180 }
  );
}
