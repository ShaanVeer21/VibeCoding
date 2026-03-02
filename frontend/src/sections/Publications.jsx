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
  { title: "TabTune: Unified Library for Inference and Fine-Tuning Tabular Foundational Models", date: "November 4, 2025", authors: [] },
  { title: "Interpretability as Alignment: Mechanistic Interpretability for AI Safety", date: "September 10, 2025", authors: [] },
  { title: "Interpretability-Aware Pruning for Efficient and Aligned Neural Networks", date: "July 29, 2025", authors: [] },
  { title: "xai_evals: A Framework for Evaluating Explanation Methods", date: "February 18, 2025", authors: [] },
  { title: "Bridging the Gap in XAI: Standardized Metrics for Evaluating Explanations", date: "February 12, 2025", authors: [] },
  { title: "DLBacktrace: A Model Agnostic Explainability for any Deep Learning Models", date: "November 20, 2024", authors: [] },
];

export default function Publications() {
  return (
    <section className="section_home-resources">
      <div className="container-regular">
        <div className="resources-2-col_wrap">

          {/* LEFT */}
          <div className="resources-2-col_left">
            <div className="section-intro_wrapper is-no-bottom">
              <div className="sction-intro_eyebrow">
                <div data-wf--element-eyebrow--variant="is-muted" className="eyebrow_element w-variant-c6a057f5-f807-1bc3-df87-d094294beb2b">
                  <div className="eyebrow_icon-text">//</div>
                  <div>Publications</div>
                </div>
              </div>
              <h2>Research Papers</h2>
              <div className="button_group">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
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
          </div>

          {/* RIGHT */}
          <div className="resources-2-col_right">
            <div role="list" className="resources-tile_list">
              {papers.map((paper, idx) => (
                <div key={idx} role="listitem" className="resources-tile_cms-item">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    data-wf--card-resource-tile--variant="base"
                    className="resources-tile_link w-inline-block"
                  >
                    <div className="resources-tile_content">
                      <div className="resources_category">Research</div>
                      <h3 className="resources_card_title">{paper.title}</h3>
                      <div className="resources_meta">
                        <span>{paper.date}</span>
                        {paper.authors.length > 0 && paper.authors.map((a, i) => (
                          <span key={i}>
                            <span className="resources_dot">▪</span>
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Same orange arrow box used site-wide */}
                    <div className="resources-tile_arrow">
                      <div className="button_icon-embed w-embed"><ArrowSVG /></div>
                      <div className="button_icon-embed w-embed"><ArrowSVG /></div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}