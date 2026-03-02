import { useState } from "react";

const graphs = [
  { label: "1. Overall Benchmarking", src: "https://cdn.prod.website-files.com/68ffda447d877eb44580fee2/690b6b2db3479befbad4d243_Overall%20Benchmarking.svg" },
  { label: "2. Medical datasets",     src: "https://cdn.prod.website-files.com/68ffda447d877eb44580fee2/690b6b3c41f190de6e6fed3f_Medical%20Datasets.svg" },
  { label: "3. Finance datasets",     src: "https://cdn.prod.website-files.com/68ffda447d877eb44580fee2/690b6b2c35632d985a2bff7f_Finance%20Datasets.svg" },
  { label: "4. Balanced datasets",    src: "https://cdn.prod.website-files.com/68ffda447d877eb44580fee2/690c7b8dd746a6cf5ba751dd_Balanced%20Datasets.svg" },
  { label: "5. Imbalanced datasets",  src: "https://cdn.prod.website-files.com/68ffda447d877eb44580fee2/690b6b2830d65e7097b1fefe_Imbalanced%20Datasets.svg" },
];

const ArrowSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 20" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M10 4.16669V5.83335H11.6667V7.50002H13.3334V9.16669H3.33337V10.8334H13.3334V12.5H11.6667V14.1667H10V15.8334H11.6667V14.1667H13.3334V12.5H15V10.8334H16.6667V9.16669H15V7.50002H13.3334V5.83335H11.6667V4.16669H10Z" fill="currentColor"/>
  </svg>
);

const TryNowButton = ({ href }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    data-wf--element-button--variant="is-text"
    className="button_element w-variant-d7034b27-11cf-d22c-b8f7-4ef0a76a8ae4 w-inline-block"
  >
    <div className="button_text">Try Now</div>
    <div className="button_icon-wrap w-variant-d7034b27-11cf-d22c-b8f7-4ef0a76a8ae4">
      <div className="button_icon-embed w-variant-d7034b27-11cf-d22c-b8f7-4ef0a76a8ae4 w-embed"><ArrowSVG /></div>
      <div className="button_icon-embed w-variant-d7034b27-11cf-d22c-b8f7-4ef0a76a8ae4 w-embed"><ArrowSVG /></div>
    </div>
  </a>
);

export default function Models() {
  const [activeModel, setActiveModel] = useState("ORION-MSP");
  const [activeGraph, setActiveGraph] = useState(0);

  return (
    <section className="section_models">
      <div className="container-regular is-no-padding">

        {/* Centered intro */}
        <div className="section-intro_block">
          <div
            data-wf--element-section-intro--variant="is-centered"
            className="section-intro_wrapper w-variant-3f240054-0b97-b0f6-8572-d01c3eae5f88"
            style={{ maxWidth: "45rem", textAlign: "center", margin: "0 auto" }}
          >
            <div className="sction-intro_eyebrow">
              <div data-wf--element-eyebrow--variant="is-muted" className="eyebrow_element w-variant-c6a057f5-f807-1bc3-df87-d094294beb2b">
                <div className="eyebrow_icon-text">//</div>
                <div>Research</div>
              </div>
            </div>
            <h2>Specialized Models:</h2>
            <p>
              As part of our mission to enable <strong>safe and trustworthy superintelligence</strong>, we are developing a suite of <strong>specialized foundation models</strong> — including <strong>tabular, reasoning, and perception models</strong> — that extend the capabilities of our <strong>AI research stack</strong>. These models are designed to provide deep understanding, contextual reasoning, and adaptive learning across domains, ensuring that intelligent systems remain <strong>aligned, interpretable, and controllable</strong> at scale.
            </p>
          </div>
        </div>

        <div className="models-tab_wrapper">

          {/* LEFT: Model tabs */}
          <div className="models-tab_element w-tabs">
            <div className="models-tab_menu w-tab-menu">
              {["ORION-MSP", "ORION-BIX"].map((m) => (
                <a
                  key={m}
                  className={`models-tab_link w-inline-block w-tab-link${activeModel === m ? " w--current" : ""}`}
                  href="#"
                  onClick={(e) => { e.preventDefault(); setActiveModel(m); }}
                >
                  <div className="models-tab_link-dot"></div>
                  <div>{m}</div>
                </a>
              ))}
            </div>

            <div className="models-tab_content w-tab-content">
              {/* ORION-MSP */}
              <div className={`models-tab_panel w-tab-pane${activeModel === "ORION-MSP" ? " w--tab-active" : ""}`}>
                <div className="models-tab_panel-content">
                  <div className="models-tab_content-wrap">
                    <div className="models-tab_content_top">
                      <h2 className="heading-style-h3 spacing-clean">ORION-MSP</h2>
                      <div className="text-style-number">// 01</div>
                    </div>
                    <div className="models-tab_content_bottom">
                      <div className="models-tab_content_subtitle">Outperforming the industry best on multiple datasets</div>
                      <p className="paragraph">
                        Orion-MSP is a tabular foundation model for in-context learning. It uses multi-scale sparse attention and Perceiver-style memory to process tabular data at multiple granularities, capturing both local feature interactions and global dataset-level patterns.<br /><br />
                        Try them today using our 'TabTune'.
                      </p>
                      <div className="button_group is-small">
                        <TryNowButton href="https://huggingface.co/Lexsi/Orion-MSP" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ORION-BIX */}
              <div className={`models-tab_panel w-tab-pane${activeModel === "ORION-BIX" ? " w--tab-active" : ""}`}>
                <div className="models-tab_panel-content">
                  <div className="models-tab_content-wrap">
                    <div className="models-tab_content_top">
                      <h2 className="heading-style-h3 spacing-clean">ORION-BIX</h2>
                      <div className="text-style-number">// 02</div>
                    </div>
                    <div className="models-tab_content_bottom">
                      <div className="models-tab_content_subtitle">Modified and improved TabICL implementation</div>
                      <p className="paragraph">
                        <strong>Orion-BiX</strong> is a tabular foundation model for in-context learning that combines bi-axial attention with meta-learning. It processes tabular data through alternating attention patterns to capture multi-scale feature interactions.<br /><br />
                        Try them today using our TFM fine-tuning library 'TabTune'.
                      </p>
                      <div className="button_group is-small">
                        <TryNowButton href="https://huggingface.co/Lexsi/Orion-BiX" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Graph tabs */}
          <div className="models-tab_graph-wrapper">
            <div className="models-tab_pattern"></div>
            <div className="graph-tabs_wrapper w-tabs">
              <div className="graph-tabs_menu w-tab-menu">
                {graphs.map((g, i) => (
                  <a
                    key={i}
                    className={`graph-tabs_link w-inline-block w-tab-link${activeGraph === i ? " w--current" : ""}`}
                    href="#"
                    onClick={(e) => { e.preventDefault(); setActiveGraph(i); }}
                  >
                    <div>{g.label}</div>
                  </a>
                ))}
              </div>
              <div className="graph-tabs_content w-tab-content">
                {graphs.map((g, i) => (
                  <div key={i} className={`graph-tabs_panel w-tab-pane${activeGraph === i ? " w--tab-active" : ""}`}>
                    <div className="graph-tabs_image-wrapper">
                      <img src={g.src} loading="lazy" alt={g.label} className="graph-tabs_image" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}