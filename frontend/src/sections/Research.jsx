import { useEffect, useRef } from "react";

export default function Research() {
  const listRef = useRef(null);

  useEffect(() => {
    // ── Unicorn Studio ──
    const initUnicorn = () => {
      if (window.UnicornStudio) {
        window.UnicornStudio.addScene({
          elementId: "matrix-embed",
          fps: 60, scale: 1, dpi: 1.5,
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
            elementId: "matrix-embed",
            fps: 60, scale: 1, dpi: 1.5,
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

    // ── Line-by-line reveal ──
    const list = listRef.current;
    if (!list) return;

    // Split each <li> into lines by wrapping words and detecting Y position changes
    const items = list.querySelectorAll("li");
    const allLines = [];

    items.forEach((item) => {
      // First wrap every word in a span
      item.innerHTML = item.textContent.replace(
        /(\S+)/g,
        '<span class="word-span" style="display:inline-block;">$1</span>'
      );

      const wordSpans = Array.from(item.querySelectorAll(".word-span"));

      // Group words into lines based on their Y offset
      const lineGroups = [];
      let currentLine = [];
      let currentTop = null;

      wordSpans.forEach((span) => {
        const top = span.getBoundingClientRect().top;
        if (currentTop === null) {
          currentTop = top;
        }
        if (Math.abs(top - currentTop) > 5) {
          // new line
          lineGroups.push(currentLine);
          currentLine = [span];
          currentTop = top;
        } else {
          currentLine.push(span);
        }
      });
      if (currentLine.length) lineGroups.push(currentLine);

      // Wrap each line group in a div
      lineGroups.forEach((group) => {
        const lineDiv = document.createElement("div");
        lineDiv.className = "reveal-line";
        lineDiv.style.color = "rgba(255,255,255,0.2)";
        lineDiv.style.transition = "color 0.4s ease";

        // Insert the lineDiv before the first span of this group
        group[0].parentNode.insertBefore(lineDiv, group[0]);
        group.forEach((span) => {
          // unwrap — just move the text
          lineDiv.appendChild(document.createTextNode(span.textContent + " "));
        });

        allLines.push(lineDiv);
      });

      // Remove leftover word spans
      item.querySelectorAll(".word-span").forEach((s) => s.remove());
    });

    // Observe each line
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.color = "rgba(255,255,255,1)";
          } else {
            entry.target.style.color = "rgba(255,255,255,0.2)";
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -30% 0px", // trigger when line is 30% from bottom
      }
    );

    allLines.forEach((line) => observer.observe(line));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section_home-research">
      <div className="container-regular">

        <div style={{ width: "100%", height: "50px", overflow: "hidden", marginBottom: "4rem" }}>
          <div id="matrix-embed" style={{ width: "100%", height: "100%" }}></div>
        </div>

        <div className="rich-description_component">
          <div className="eyebrow_element" data-wf--element-eyebrow-icon--variant="is-style-h3">
            <img
              src="https://cdn.prod.website-files.com/68ffda447d877eb44580fee2/6900665b5a959fb6a5477084_Interface-Essential-Edit-Fill--Streamline-Pixel.svg"
              loading="lazy" width="24" height="24" alt=""
              className="eyebrow-icon_img"
            />
            <div><h2>Research</h2></div>
          </div>

          <img
            src="https://cdn.prod.website-files.com/68ffda447d877eb44580fee2/690754b4ad50d9bd766443a5_Clove%20Leaf.png"
            loading="lazy" width="211" height="211"
            alt="Pixelated white four-leaf clover icon"
            className="rich-description_bg-stamp"
          />

          <div className="text-rich-text w-richtext">
            <ul role="list" ref={listRef}>
              <li>At Lexsi Labs, we believe that the next great leap in Safe Superintelligence will not come from larger models alone — but from making intelligence understandable, aligned, and safe. Our mission is to build the scientific and engineering foundations for AI systems that can reason deeply, transparently, learn responsibly, and act in ways that remain aligned with human values, even as they scale.</li>
              <li>To achieve this, we are developing a comprehensive research stack that integrates alignment theory, interpretability science, and agentic autonomy into a single continuum — from how models learn, to how they explain, evaluate, and improve themselves. While we solve these, our fundamentals remain to publish and contribute openly.</li>
              <li>This research from Lexsi labs should translate directly into the platform, Lexsi.ai . The same components—efficient RL, MI-pruning, safety-aware fine-tuning, unlearning, interpretable telemetry, and the AI Engineer loop—power our alignment infrastructure and agentic platform. Teams get reproducible pipelines; serveless, multi-cloud, managed or on-prem deployment; continuous evaluation dashboards; governance audit logs; red-teaming harnesses; and policy packs that compile into executable constraints at inference time. The outcome is practical: faster iteration, lower training cost, narrower failure modes, and systems that can improve themselves while remaining accountable.</li>
              <li>Our north star is simple and hard: make alignment and interpretability an inherent property of intelligence—and create an autonomous AI engineer to build, ship, and maintain it.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}