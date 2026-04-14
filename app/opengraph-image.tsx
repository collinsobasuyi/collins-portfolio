import { ImageResponse } from "next/og";

export const alt = "Collins Obasuyi — AI Product Consultant & Delivery Lead";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#030712",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* Emerald glow — top right */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 70%)",
          }}
        />
        {/* Violet glow — bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Availability pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgba(6,78,59,0.6)",
            border: "1px solid rgba(16,185,129,0.4)",
            borderRadius: 999,
            padding: "10px 22px",
            marginBottom: 40,
          }}
        >
          <span style={{ color: "#6ee7b7", fontSize: 18, fontWeight: 600, letterSpacing: 0.5 }}>
            Available for Contract · Advisory · UK Based
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            color: "#ffffff",
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -1.5,
            marginBottom: 20,
          }}
        >
          Collins Obasuyi
        </div>

        {/* Title */}
        <div
          style={{
            color: "#34d399",
            fontSize: 30,
            fontWeight: 600,
            letterSpacing: 0.5,
            marginBottom: 40,
          }}
        >
          AI Product Consultant · Delivery Lead · Mentor
        </div>

        {/* Description */}
        <div
          style={{
            color: "#9ca3af",
            fontSize: 22,
            lineHeight: 1.6,
            maxWidth: 760,
            marginBottom: "auto",
          }}
        >
          15+ years helping companies build better AI products and deliver with
          more structure. Contracted for Amazon, Bloomberg, HMRC, and more.
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 28,
          }}
        >
          <span style={{ color: "#4b5563", fontSize: 20, fontWeight: 500 }}>
            collinsobasuyi.com
          </span>
          <div style={{ display: "flex", gap: 12 }}>
            {["AI Products", "Delivery", "Quality", "Mentorship"].map((tag) => (
              <div
                key={tag}
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 999,
                  padding: "6px 16px",
                  color: "#d1d5db",
                  fontSize: 16,
                  fontWeight: 500,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
