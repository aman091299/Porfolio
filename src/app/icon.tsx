import { ImageResponse } from "next/og";

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
          background: "#c8f04b",
          color: "#0e0f11",
          fontSize: 34,
          fontWeight: 800,
          letterSpacing: -2,
          borderRadius: 14,
        }}
      >
        AS
      </div>
    ),
    size,
  );
}
