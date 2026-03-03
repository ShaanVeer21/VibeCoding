import { useEffect, useRef, useState } from "react";

const CircleSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="19.75" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4"/>
  </svg>
);

const ArrowSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 20" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M10 4.16669V5.83335H11.6667V7.50002H13.3334V9.16669H3.33337V10.8334H13.3334V12.5H11.6667V14.1667H10V15.8334H11.6667V14.1667H13.3334V12.5H15V10.8334H16.6667V9.16669H15V7.50002H13.3334V5.83335H11.6667V4.16669H10Z" fill="currentColor"/>
  </svg>
);

const tools = [
  {
    id: "tt",
    num: "01",
    name: "TabTune(TT)",
    links: [
      { label: "Github", href: "https://github.com/Lexsi-Labs/TabTune" },
      { label: "arXiv", href: "https://arxiv.org/abs/2511.02802" },
      { label: "Tutorials", href: "https://github.com/Lexsi-Labs/TabTune#-example-notebooks" },
      { label: "Announcement", href: "https://www.lexsi.ai/resources/articles/introducing-tabtune-a-unified-library-for-inference-and-fine-tuning-tabular-foundational-models" },
    ],
    description: "A single, uniformed tool for inference and fine-tuning tabular foundational models (TFMs) and the TFM lifecycle management, from model-aware preprocessing to flexible adaptation (Zero-Shot, Meta-Learning, PEFT).",
    finetune: ["TabICL", "TabPFNv2", "TabDPT", "Mitra", "ContextTab", "Orion-MSP", "Orion-BiX"],
  },
  {
    id: "dlb",
    num: "02",
    name: "DLBacktrace (DLB)",
    links: [
      { label: "Github", href: "https://github.com/Lexsi-Labs/DLBacktrace" },
      { label: "arXiv", href: "https://arxiv.org/abs/2411.12643" },
      { label: "Tutorials", href: "https://dlbacktrace.lexsi.ai/examples/colab-notebooks/" },
    ],
    description: "A model-agnostic explainability library that works across text, image, and tabular deep learning models. Unlike traditional surrogate methods, DL Backtrace calculates relevance directly from model weights and inputs, ensuring consistency and faithfulness.",
    finetune: null,
  },
  {
    id: "xai-evals",
    num: "03",
    name: "XAI Evals",
    links: [
      { label: "Github", href: "https://github.com/Lexsi-Labs/xai_evals" },
      { label: "arXiv", href: "https://arxiv.org/abs/2502.03014" },
    ],
    description: "A comprehensive framework to benchmark and compare explainability techniques. It standardizes metrics for fidelity, robustness, and interpretability, making it easier for enterprises to choose the right method for regulators, auditors, and customers.",
    finetune: null,
  },
];

export default function OSS() {
  const [activeId, setActiveId] = useState("tt");
  const blockRefs = useRef({});
  // ── Intersection observer for sticky nav ──
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    tools.forEach((t) => {
      const el = blockRefs.current[t.id];
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // ── Unicorn Studio matrix init (same pattern as Research) ──
  useEffect(() => {
    const elementId = "oss-matrix-embed";

    const initUnicorn = () => {
      if (window.UnicornStudio) {
        window.UnicornStudio.addScene({
          elementId,
          fps: 60,
          scale: 1,
          dpi: 1.5,
          projectId: "B9BRX3MwUCObhpC1jyf2",
          lazyLoad: false,
        }).catch(() => {});
        return;
      }
      if (!document.querySelector('script[src*="unicornstudio"]')) {
        const s = document.createElement("script");
        s.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js";
        s.onload = () => {
          window.UnicornStudio.addScene({
            elementId,
            fps: 60,
            scale: 1,
            dpi: 1.5,
            projectId: "B9BRX3MwUCObhpC1jyf2",
            lazyLoad: false,
          }).catch(() => {});
        };
        document.body.appendChild(s);
      } else {
        setTimeout(initUnicorn, 200);
      }
    };

    initUnicorn();
  }, []);

  const scrollTo = (id) => {
    blockRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section id="opensource" className="section_opensource">
      <div className="container-regular">
        <div className="demo_component">

          {/* ── Top intro + button ── */}
          <div className="section-intro_with-button">
            <div className="section-intro_wrapper is-no-bottom" style={{ maxWidth: "45rem" }}>
              <div className="sction-intro_eyebrow">
                <div data-wf--element-eyebrow--variant="is-muted" className="eyebrow_element w-variant-c6a057f5-f807-1bc3-df87-d094294beb2b">
                  <div className="eyebrow_icon-text">//</div>
                  <div>OSS</div>
                </div>
              </div>
              <h2>Opensource</h2>
              <p>As part of our mission, our strategy is to opensource all our core components of the platform and build the stack optimized for specialized use cases. We designed these tools to solve some fundamental challenges around the focus areas which include Mechanistic Interpretability, Alignment, Reinforcement Learning, Unlearning, and Tabular Foundational Models (TFMs).</p>
            </div>
            <div className="sction-intro_button-wrapper">
              <a href="https://github.com/Lexsi-Labs" target="_blank" rel="noreferrer"
                data-wf--element-button--variant="is-secondary"
                className="button_element w-variant-e5e2e5cc-d178-9102-03ae-3882f33fa009 w-inline-block">
                <div className="button_text">View Github</div>
                <div className="button_icon-wrap w-variant-e5e2e5cc-d178-9102-03ae-3882f33fa009">
                  <div className="button_icon-embed w-variant-e5e2e5cc-d178-9102-03ae-3882f33fa009 w-embed"><ArrowSVG /></div>
                  <div className="button_icon-embed w-variant-e5e2e5cc-d178-9102-03ae-3882f33fa009 w-embed"><ArrowSVG /></div>
                </div>
                <div className="button_corners">
                  {["om1","om2","om3","om4"].map((id, i) => (
                    <div key={id} className={`button_corner-icon${i===1?" is-tr":i===2?" is-bl":i===3?" is-br":""} w-embed`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <mask id={id} fill="white"><path d="M0 0H8V8H0V0Z"/></mask>
                        <path d="M0 0V-1H-1V0H0ZM0 0V1H8V0V-1H0V0ZM0 8H1V0H0H-1V8H0Z" fill="currentColor" mask={`url(#${id})`}/>
                      </svg>
                    </div>
                  ))}
                </div>
              </a>
            </div>
          </div>

          {/* ── Left sticky nav + Right scrollable content ── */}
          <div className="opensource_wrapper">

            {/* LEFT — sticky number nav */}
            <div className="opensource_left">
              <div className="opensource_anchor-wrapper">
                {tools.map((t) => (
                  <a
                    key={t.id}
                    href={`#${t.id}`}
                    onClick={(e) => { e.preventDefault(); scrollTo(t.id); }}
                    className={`opensource_anchor-links w-inline-block${activeId === t.id ? " w--current" : ""}`}
                  >
                    <div className="opensource_anchor_number">
                      <div className="opensource_anchor_number">{t.num}</div>
                      <div className="opensource_anchor_bg-circle w-embed"><CircleSVG /></div>
                    </div>
                    <div className="opensource_anchor_text">{t.name}</div>
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT — stacked blocks */}
            <div className="opensource_right">
              {tools.map((t, idx) => (
                <div
                  key={t.id}
                  id={t.id}
                  ref={(el) => (blockRefs.current[t.id] = el)}
                  className={`opensource_block${idx === tools.length - 1 ? " is-last" : ""}`}
                >
                  <div className="opensource_block_top">
                    <div className="opensource_block_intro">
                      <h3>{t.name}</h3>
                      <p>{t.description}</p>
                    </div>
                    <div className="opensource_block_links-wrapper">
                      {t.links.map((l) => (
                        <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="link_element">{l.label}</a>
                      ))}
                    </div>
                  </div>

                  {t.finetune && (
                    <div className="opensource_block_item">
                      <div className="margin-bottom-medium">
                        <div className="heading-style-h5">Finetune:</div>
                      </div>
                      <div className="models_list grid-autofit-css">
                        <div className="models_wrapper w-dyn-list">
                          <div role="list" className="models_cms-list w-dyn-items">
                            {t.finetune.map((f) => (
                              <div key={f} role="listitem" className="models_cms-item w-dyn-item">
                                <a
                                  data-wf--element-model-link--variant="base"
                                  href="https://github.com/Lexsi-Labs/TabTune"
                                  target="_blank"
                                  rel="noreferrer"
                                  className="models_link w-inline-block"
                                >
                                  <div className="models_links-dot"></div>
                                  <div>{f}</div>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Matrix animation strip — constrained to vertical lines ── */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", height: "50px", overflow: "hidden" }}>
        <div id="oss-matrix-embed" style={{ width: "100%", height: "100%" }} />
      </div>

    </section>
  );
}