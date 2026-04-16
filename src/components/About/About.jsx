import { useEffect, useRef, useState } from "react";
import "./About.css";

/* ── MISSION ICON – target with rocket/arrow like image ── */
const MissionIcon = () => (
  <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.3334 23.3326C22.3571 24.3039 21.8059 25.6228 21.8008 27C21.8008 28.3791 22.3486 29.7018 23.3238 30.677C24.299 31.6522 25.6217 32.2 27.0008 32.2C28.378 32.1949 29.6969 31.6437 30.6681 30.6674" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.9994 11.3999C23.914 11.3999 20.8979 12.3148 18.3325 14.029C15.7671 15.7431 13.7676 18.1795 12.5869 21.03C11.4062 23.8806 11.0972 27.0172 11.6992 30.0433C12.3011 33.0694 13.7869 35.8491 15.9686 38.0308C18.1503 40.2125 20.9299 41.6982 23.956 42.3001C26.9821 42.9021 30.1188 42.5931 32.9693 41.4124C35.8198 40.2317 38.2562 38.2322 39.9703 35.6668C41.6845 33.1014 42.5994 30.0853 42.5994 26.9999" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27 1C21.8577 1 16.8309 2.52487 12.5552 5.38179C8.27951 8.2387 4.94702 12.2994 2.97914 17.0502C1.01127 21.8011 0.496379 27.0288 1.49959 32.0723C2.50281 37.1158 4.97907 41.7486 8.61523 45.3848C12.2514 49.0209 16.8842 51.4972 21.9277 52.5004C26.9712 53.5036 32.1989 52.9887 36.9498 51.0209C41.7006 49.053 45.7613 45.7205 48.6182 41.4448C51.4751 37.1691 53 32.1423 53 27M36.6474 17.3554L29.6 24.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M51.4681 10.1518L42.6007 11.3998L43.8487 2.53247C43.8579 2.42948 43.8361 2.32609 43.7862 2.23552C43.7363 2.14495 43.6605 2.07132 43.5686 2.02402C43.4766 1.97672 43.3727 1.95791 43.27 1.96999C43.1673 1.98207 43.0705 2.0245 42.9921 2.09184L37.1133 7.94047C36.5095 8.54866 36.0654 9.29665 35.8204 10.1179C35.5755 10.9392 35.5373 11.8083 35.7093 12.6478L36.6453 17.3552L41.3527 18.2885C42.1923 18.4605 43.0614 18.4223 43.8826 18.1774C44.7039 17.9324 45.4519 17.4883 46.0601 16.8845L51.906 11.0085C51.9735 10.9298 52.0161 10.8328 52.0281 10.7298C52.0401 10.6268 52.0211 10.5226 51.9734 10.4305C51.9258 10.3384 51.8517 10.2627 51.7606 10.213C51.6696 10.1634 51.5658 10.1421 51.4626 10.1518" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);

/* ── VISION ICON – lightbulb with rays ── */
const VisionIcon = () => (
<svg width="54" height="57" viewBox="0 0 54 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M41.8973 29.6872C41.0917 36.3959 36.6977 39.0765 34.8 41.0225C32.8994 42.9741 33.2398 43.3627 33.3675 46.2249C33.3888 46.579 33.3373 46.9338 33.2163 47.2673C33.0953 47.6007 32.9073 47.9059 32.6639 48.164C32.4204 48.422 32.1267 48.6275 31.8008 48.7677C31.475 48.908 31.1238 48.98 30.7691 48.9793H23.2292C22.8747 48.9787 22.524 48.9059 22.1986 48.7653C21.8732 48.6246 21.5798 48.4192 21.3364 48.1614C21.0929 47.9037 20.9046 47.5991 20.7828 47.2661C20.661 46.9332 20.6084 46.5789 20.628 46.2249C20.628 43.4166 20.889 42.7642 19.1983 41.0225C17.0425 38.8666 11.9705 35.8229 11.9705 27.4519C11.9576 25.3726 12.3755 23.3132 13.198 21.4034C14.0204 19.4937 15.2296 17.7751 16.7493 16.3558C18.2689 14.9366 20.0661 13.8476 22.0276 13.1574C23.989 12.4673 26.0721 12.1909 28.1457 12.3458C30.2192 12.5007 32.2382 13.0834 34.0753 14.0573C35.9125 15.0312 37.528 16.3751 38.8199 18.0043C40.1119 19.6336 41.0523 21.5128 41.582 23.5235C42.1116 25.5342 42.219 27.6329 41.8973 29.6872Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.6296 48.8233V53.1123C22.6296 54.2839 23.282 55.2455 24.0848 55.2455H29.9084C30.7169 55.2455 31.3665 54.2811 31.3665 53.1123V48.8233M24.7854 18.9249C23.1105 18.9256 21.5044 19.5915 20.3203 20.7762C19.1362 21.9608 18.471 23.5672 18.471 25.2421M47.7964 28.0249H52.9989M42.56 10.9709L46.2505 7.28037M45.3966 42.4805L49.0871 46.1682M26.998 1V5.20677M7.82218 7.27754L11.4871 10.9709M4.98551 46.1682L8.65048 42.4805M6.19961 28.0249H1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

);

/* ── VALUES ICON – gem / diamond ── */
const ValuesIcon = () => (
<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.87485 17.875H47.1248M3.59719 19.1151L24.6968 46.4821C24.8501 46.682 25.0474 46.844 25.2734 46.9554C25.4993 47.0669 25.7479 47.1248 25.9998 47.1248C26.2518 47.1248 26.5004 47.0669 26.7263 46.9554C26.9523 46.844 27.1496 46.682 27.3029 46.4821L48.4025 19.1151C48.61 18.845 48.7303 18.5181 48.7475 18.178C48.7648 17.8378 48.6781 17.5005 48.499 17.2108L41.3419 5.65805C41.1945 5.41897 40.9885 5.22152 40.7434 5.08447C40.4983 4.94742 40.2222 4.87532 39.9413 4.875H12.0584C11.7775 4.87532 11.5014 4.94742 11.2563 5.08447C11.0112 5.22152 10.8052 5.41897 10.6578 5.65805L3.50071 17.2108C3.32161 17.5005 3.23492 17.8378 3.25215 18.178C3.26938 18.5181 3.38973 18.845 3.59719 19.1151Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M40.625 6.5L35.75 17.875M35.75 17.875L26 4.875L16.25 17.875M35.75 17.875L26 45.5L16.25 17.875M11.375 6.5L16.25 17.875" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

);

const cards = [
  {
    icon: <MissionIcon />,
    animClass: "mission-anim",
    title: "Mission",
    desc: "To drive innovation and deliver meaningful growth for customers and stakeholders. We focus on creating impactful solutions that add long-term value.",
    back: "We strive every day to push boundaries, exceed expectations, and build solutions that truly matter to the people we serve.",
  },
  {
    icon: <VisionIcon />,
    animClass: "vision-anim",
    title: "Vision",
    desc: "To build a future-ready organization that leads with purpose and inspires change. We aim to set new standards of excellence in everything we do.",
    back: "Our vision is a world where every decision we make lights the way for sustainable, purpose-driven progress.",
  },
  {
    icon: <ValuesIcon />,
    animClass: "values-anim",
    title: "Values",
    desc: "We believe in integrity, innovation, and excellence in every action. Collaboration and a customer-first approach guide our decisions.",
    back: "Grounded in trust and driven by excellence — our values are the facets that reflect who we truly are.",
  },
];

export default function About() {
  const titleRef = useRef(null);
  const bioRef = useRef(null);
  const cardRefs = useRef([]);
  const [flippedCards, setFlippedCards] = useState([true, true, true]);

  /* ── title & bio scroll animation ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("animate");
            void entry.target.offsetWidth;
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.4 },
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (bioRef.current) observer.observe(bioRef.current);

    return () => observer.disconnect();
  }, []);

  /* ── flip cards on scroll ── */
  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = parseInt(entry.target.dataset.idx, 10);
          if (entry.isIntersecting) {
            // scroll INTO view → unflip → show white front card
            setFlippedCards((prev) => {
              const next = [...prev];
              next[idx] = false;
              return next;
            });
          } else {
            // scroll OUT of view → flip back → show dark blue back card
            setFlippedCards((prev) => {
              const next = [...prev];
              next[idx] = true;
              return next;
            });
          }
        });
      },
      { threshold: 0.55 },
    );

    cardRefs.current.forEach((el) => {
      if (el) cardObserver.observe(el);
    });

    return () => cardObserver.disconnect();
  }, []);

  return (
    <div className="about-wrapper">
      {/* HEADING */}
      <h2 ref={titleRef} className="about-title">
        <span className="typewriter">About Me</span>
      </h2>
      {/* BIO */}
      <p ref={bioRef} className="about-bio">
        As a CEO, I believe leadership is about vision, innovation, and people.
        My journey has been driven by the passion to build meaningful solutions
        that create real impact. I focus on leading with clarity, empowering
        talented teams, and continuously exploring new opportunities for growth.
        Through strategic thinking and strong execution, I strive to guide my
        company toward excellence while creating lasting value for our clients
        and community.
      </p>
      {/* CARDS */}
      <div className="about-cards">
        {cards.map((c, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            data-idx={i}
            className={`about-card-scene`}
          >
            <div className={`about-card-flipper${flippedCards[i] ? " flipped" : ""}`}>
              {/* FRONT */}
              <div className="about-card card-front">
                <div className={`card-icon-wrap ${c.animClass}`}>{c.icon}</div>
                <h3 className="card-title">{c.title}</h3>
                <p className="card-desc">{c.desc}</p>
              </div>
              {/* BACK */}
              <div className="about-card card-back">
                <h3 className="card-title card-back-title">{c.title}</h3>
                <p className="card-desc">{c.back}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
