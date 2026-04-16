import { useState, useRef } from "react";
import "./Testimonials.css";
import richard_img from "../../assets/testi-profile-img.jpg";

const data = [
  {
    id: 1,
    text: "Working with this team has been a game-changer for our business. Their attention to detail and commitment to delivering quality exceeded our expectations Working with this team has been a game-changer for our business. Their attention to detail and commitment to delivering quality exceeded our expectations.",
    name: "Richard Mathews",
    role: "Syntrix",
    img: richard_img,
  },
  {
    id: 2,
    text: "This platform completely transformed our workflow and made our outreach more efficient than ever.",
    name: "John Carter",
    role: "Marketing Lead, HubSpot",
    img: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    text: "We saw immediate improvements in data accuracy and campaign performance after switching.",
    name: "Sarah Lee",
    role: "Growth Manager, Stripe",
    img: "https://i.pravatar.cc/100?img=3",
  },
];

export default function Slider() {
  const [activeIndex,   setActiveIndex]   = useState(0);
  const [enteringIndex, setEnteringIndex] = useState(null);
  const [leavingIndex,  setLeavingIndex]  = useState(null);
  const [direction,     setDirection]     = useState("next");
  const lockRef = useRef(false);

  const navigate = (dir) => {
    if (lockRef.current) return;
    lockRef.current = true;

    const nextIdx =
      dir === "next"
        ? (activeIndex + 1) % data.length
        : (activeIndex - 1 + data.length) % data.length;

    setDirection(dir);
    setLeavingIndex(activeIndex);
    setEnteringIndex(nextIdx);

    setTimeout(() => {
      setActiveIndex(nextIdx);
      setEnteringIndex(null);
      setLeavingIndex(null);
      lockRef.current = false;
    }, 760);
  };

  const getClass = (i) => {
    if (i === leavingIndex)  return "card-base card-leaving";
    if (i === enteringIndex) return `card-base card-entering-${direction}`;
    if (i === activeIndex)   return "card-base card-active";
    return "card-base card-behind";
  };

  return (
    <div className="slider">
      <h2>Hear From Our People</h2>
      <p className="subtitle">
        Trusted by clients across industries delivering results that truly matter
      </p>

        {/* Cards */}
        <div className="slider-container">
          {data.map((item, i) => (
            <div key={item.id} className={getClass(i)}>
              <p className="quote">&ldquo;{item.text}&rdquo;</p>
              <div className="user">
                <img src={item.img} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls Group */}
        <div className="slider-nav">
          <button className="nav-btn nav-btn-left" onClick={() => navigate("prev")} aria-label="Previous">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          
          <button className="nav-btn nav-btn-right" onClick={() => navigate("next")} aria-label="Next">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      

      {/* Dots */}
      <div className="dots">
        {data.map((_, i) => (
          <div key={i} className={`dot ${i === activeIndex ? "dot-active" : ""}`} />
        ))}
      </div>

      {/* Stats */}
      <div className="stats">
        {/* <div>
          <h3>18<span className="stat-unit">%</span></h3>
          <p>Title Accuracy</p>
        </div>
        <div>
          <h3>4<span className="stat-unit">x</span></h3>
          <p>Email Accuracy</p>
        </div>
        <div>
          <h3>50<span className="stat-unit">%</span></h3>
          <p>Bounce Rates</p>
        </div> */}
      </div>
    </div>
  );
}