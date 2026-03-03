import { useState } from "react";

const ArrowSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 20" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M10 4.16669V5.83335H11.6667V7.50002H13.3334V9.16669H3.33337V10.8334H13.3334V12.5H11.6667V14.1667H10V15.8334H11.6667V14.1667H13.3334V12.5H15V10.8334H16.6667V9.16669H15V7.50002H13.3334V5.83335H11.6667V4.16669H10Z" fill="currentColor"/>
  </svg>
);

const CornerSVG = ({ id }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
    <mask id={id} fill="white"><path d="M0 0H8V8H0V0Z"/></mask>
    <path d="M0 0V-1H-1V0H0ZM0 0V1H8V0V-1H0V0ZM0 8H1V0H0H-1V8H0Z" fill="currentColor" mask={`url(#${id})`}/>
  </svg>
);

const papers = [
  { title: "AlignTune: Modular Toolkit for Post-Training Alignment of Large Language Models", date: "February 23, 2026", authors: ["R E Zera Marveen Lyngkhoi", "Chirag Chawla", "Pratinav Seth", "Utsav Avaiya", "Soham Bhattacharjee", "Mykola Khandoga", "Rui Yuan", "Vinay Kumar Sankarapu"] },
  { title: "Beyond Uniform Credit: Causal Credit Assignment for Policy Optimization", date: "February 13, 2026", authors: [] },
  { title: "Beyond KL Divergence: Policy Optimization with Flexible Bregman Divergences for LLM Reasoning", date: "February 4, 2026", authors: ["Rui Yuan", "Mykola Khandoga", "Vinay Kumar Sankarapu"] },
  { title: "C -ΔΘ: Circuit-Restricted Weight Arithmetic for Selective Refusal", date: "February 4, 2026", authors: [] },
  { title: "Orion-Bix: Bi-Axial Attention for Tabular In-Context Learning", date: "November 28, 2025", authors: [] },
  { title: "Orion-MSP: Multi-Scale Sparse Attention for Tabular In-Context Learning", date: "November 4, 2025", authors: [] },
  { title: "TabTune: A Unified Library for Inference and Fine-Tuning Tabular Foundation Models", date: "November 4, 2025", authors: [] },
  { title: "Interpretability as Alignment: Making Internal Understanding a Design Principle", date: "September 10, 2025", authors: [] },
  { title: "Interpretability-Aware Pruning for Efficient Medical Image Analysis", date: "July 29, 2025", authors: [] },
  { title: "xai_evals : A Framework for Evaluating Post-Hoc Local Explanation Methods", date: "February 18, 2025", authors: [] },
  { title: "Bridging the Gap in XAI—The Need for Reliable Metrics in Explainability and Compliance", date: "February 12, 2025", authors: [] },
  { title: "DLBacktrace: Model Agnostic Explainability For Any Deep Learning Models", date: "November 20, 2024", authors: [] },
];

function PaperCard({ paper }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="#"
      onClick={e => e.preventDefault()}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        position: "relative",
        padding: "1.25rem 1.25rem 1.25rem 1.25rem",
        textDecoration: "none",
        color: "inherit",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      {/* Arrow — top right */}
      <div style={{ position: "absolute", top: "1.25rem", right: "1.25rem" }}>
        <div style={{
          width: "1.75rem",
          height: "1.75rem",
          background: hovered ? "#FF4B0A" : "#ACF3EA",
          color: hovered ? "white" : "#0a0a0a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          transition: "background 0.25s ease, color 0.25s ease",
        }}>
          <div style={{
            position: "absolute", width: "0.9rem", height: "0.9rem",
            transition: "transform 0.25s ease, opacity 0.25s ease",
            transform: hovered ? "translateX(150%)" : "translateX(0)",
            opacity: hovered ? 0 : 1,
          }}><ArrowSVG /></div>
          <div style={{
            position: "absolute", width: "0.9rem", height: "0.9rem",
            transition: "transform 0.25s ease, opacity 0.25s ease",
            transform: hovered ? "translateX(0)" : "translateX(-150%)",
            opacity: hovered ? 1 : 0,
          }}><ArrowSVG /></div>
        </div>
      </div>

      {/* Content — right-padded to not overlap arrow */}
      <div style={{ paddingRight: "3rem" }}>
        <div style={{ color: "#FF4B0A", fontSize: "0.78rem", fontWeight: 500, marginBottom: "0.5rem" }}>Research</div>
        <h3 style={{ fontSize: "1rem", fontWeight: 400, lineHeight: 1.4, margin: "0 0 0.6rem 0" }}>{paper.title}</h3>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", gap: "0 0" }}>
          <span>{paper.date}</span>
          {paper.authors.map((a, i) => (
            <span key={i}>
              <span style={{ color: "#FF4B0A", margin: "0 0.35rem", fontSize: "0.45rem", verticalAlign: "middle" }}>▪</span>{a}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Publications() {
  return (
    <section className="section_home-resources">
      <div className="container-regular">
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: "4rem", alignItems: "start" }}>

          {/* LEFT — sticky, aligned to top of first card */}
          <div style={{ position: "sticky", top: "6rem" }}>
            <div className="eyebrow_element" style={{ marginBottom: "1rem" }}>
              <div className="eyebrow_icon-text">//</div>
              <div>Publications</div>
            </div>
            <h3 style={{ margin: "0 0 1.5rem 0" }}>Research Papers</h3>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <a
              href="/resources/research-papers"
              data-wf--element-button--variant="is-text"
              className="button_element w-variant-d7034b27-11cf-d22c-b8f7-4ef0a76a8ae4 w-inline-block"
            >
              <div className="button_text">View All</div>
              <div className="button_icon-wrap w-variant-d7034b27-11cf-d22c-b8f7-4ef0a76a8ae4">
                <div className="button_icon-embed w-variant-d7034b27-11cf-d22c-b8f7-4ef0a76a8ae4 w-embed"><ArrowSVG /></div>
                <div className="button_icon-embed w-variant-d7034b27-11cf-d22c-b8f7-4ef0a76a8ae4 w-embed"><ArrowSVG /></div>
              </div>
              <div className="button_corners w-variant-d7034b27-11cf-d22c-b8f7-4ef0a76a8ae4">
                <div className="button_corner-icon w-embed"><CornerSVG id="va1"/></div>
                <div className="button_corner-icon is-tr w-embed"><CornerSVG id="va2"/></div>
                <div className="button_corner-icon is-bl w-embed"><CornerSVG id="va3"/></div>
                <div className="button_corner-icon is-br w-embed"><CornerSVG id="va4"/></div>
              </div>
            </a>
            </div>
          </div>

          {/* RIGHT — stacked boxed cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {papers.map((p, i) => <PaperCard key={i} paper={p} />)}
          </div>

        </div>
      </div>
    </section>
  );
}