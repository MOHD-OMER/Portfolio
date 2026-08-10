import { ImageResponse } from "next/og";

// No favicon existed, so browsers requested /favicon.ico and got a 404.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #00c2ff 0%, #7c5cff 100%)",
          color: "#07090c",
          fontSize: 34,
          fontWeight: 800,
          letterSpacing: -1,
          borderRadius: 14,
          fontFamily: "sans-serif",
        }}
      >
        MO
      </div>
    ),
    size
  );
}
