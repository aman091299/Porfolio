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
          background: "#050607",
          color: "#ecedee",
          border: "2px solid #9be3cf",
          fontSize: 30,
          fontWeight: 700,
          letterSpacing: -1,
          borderRadius: 14,
        }}
      >
        AS
      </div>
    ),
    size,
  );
}
