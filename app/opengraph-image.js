import { ImageResponse } from "next/og";

// Social preview card. The metadata already declared `summary_large_image`,
// but no image existed — LinkedIn/WhatsApp/X previews rendered blank.
export const alt =
  "Mohammed Abdul Omer — CSE-AIML Engineer. LLM fine-tuning, agentic AI, RAG and MLOps.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #07090c 0%, #0f1720 55%, #131a2e 100%)",
          color: "#e6eef6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#60a5fa",
          }}
        >
          Portfolio
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 78,
            fontWeight: 800,
            marginTop: 20,
            lineHeight: 1.1,
          }}
        >
          Mohammed Abdul Omer
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 40,
            fontWeight: 700,
            marginTop: 16,
            color: "#00c2ff",
          }}
        >
          CSE-AIML Engineer
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 28,
            marginTop: 28,
            color: "#b8c5d3",
            maxWidth: 900,
            lineHeight: 1.45,
          }}
        >
          LLM fine-tuning · Multi-agent systems · RAG pipelines · MLOps
        </div>

        <div
          style={{
            display: "flex",
            gap: 28,
            marginTop: 44,
            fontSize: 24,
            color: "#8b95a1",
          }}
        >
          <div style={{ display: "flex" }}>10 production projects</div>
          <div style={{ display: "flex", color: "#3b3f46" }}>|</div>
          <div style={{ display: "flex" }}>8 live deployments</div>
          <div style={{ display: "flex", color: "#3b3f46" }}>|</div>
          <div style={{ display: "flex" }}>Hyderabad, India</div>
        </div>
      </div>
    ),
    size
  );
}
