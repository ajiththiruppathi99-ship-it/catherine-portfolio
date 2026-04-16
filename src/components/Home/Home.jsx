import { useEffect, useState, useRef } from "react";
import "./Home.css";
import hero1Img from "../../assets/hero1.png";
import { FaInstagram, FaWhatsapp, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const stats = [
  { value: 500, suffix: "+", label: "Successful Projects" },
  { value: 10,  suffix: "+", label: "Country Presence"   },
  { value: 5,   suffix: "+", label: "Years of Experience" },
  { value: 30,  suffix: "+", label: "Opportunities Created" },
];

const AnimatedStat = ({ end, suffix, label }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setCount(0); // Reset count when out of view
        }
      },
      { threshold: 0.1 }
    );
    if (nodeRef.current) observer.observe(nodeRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime = null;
    let animationFrameId = null;
    const duration = 2000; // 2 seconds

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // Easing function: easeOutExpo
      const easeOutExpo = (x) => {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
      };

      const progressRatio = Math.min(progress / duration, 1);
      const current = Math.floor(easeOutExpo(progressRatio) * end);
      
      setCount(current);
      
      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure we hit the exact target at the end
      }
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isVisible, end]);

  return (
    <div className="stat-item" ref={nodeRef}>
      <h2 className="stat-num">{count}{suffix}</h2>
      <p className="stat-label">{label}</p>
    </div>
  );
};

export default function Home() {
  const [showSocial, setShowSocial] = useState(true);
  const [heroVisible, setHeroVisible] = useState(false);
  const heroRef = useRef(null);
  const titleRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!titleRef.current) return;
    const rect = titleRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    
    // Use different scales: much less stretch on X to prevent wide horizontal distortion
    const scaleX = 0.004;
    const scaleY = 0.015;
    
    let sx = -dx * scaleX;
    let sy = -dy * scaleY;
    
    // Clamp the horizontal stretch so it never gets too extreme
    sx = Math.max(-4, Math.min(4, sx));
    
    titleRef.current.style.setProperty("--sx", `${sx}px`);
    titleRef.current.style.setProperty("--sy", `${sy}px`);
  };

  const handleMouseLeave = () => {
    if (!titleRef.current) return;
    titleRef.current.style.setProperty("--sx", `0px`);
    titleRef.current.style.setProperty("--sy", `0px`);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } // Trigger when 20% of the hero is visible
    );
    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const messageSection = document.getElementById("message");
      if (messageSection) {
        const rect = messageSection.getBoundingClientRect();
        // Hide social strip when Message section enters the viewport
        if (rect.top < window.innerHeight) {
          setShowSocial(false);
        } else {
          setShowSocial(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-wrapper">

      {/* ── HERO ── */}
      <div className="home-hero" ref={heroRef}>

        {/* LEFT */}
        <div className="hero-left">
          <p className="hero-greeting">
            Hello! I'm{" "}
            <span className="name-highlight">
              {"Hepsibah Catherine".split("").map((char, i, arr) => (
                <span
                  key={i}
                  className={`name-char ${heroVisible ? "animate" : ""} ${i === arr.length - 1 ? "last-char" : ""}`}
                  style={{ "--i": i }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          </p>
          <h1 
            className="hero-title" 
            ref={titleRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            Multı<span className="i-dot-wrapper"><span className={`i-dot ${heroVisible ? "animate" : ""}`}></span></span>preneur<br />& Consultant
          </h1>
          <p className="hero-tagline">
            <em>"Building for people and planet with purpose."</em>
          </p>
        </div>

        {/* RIGHT — arch + photo */}
        <div className="hero-right">
          <div className={`hero-arch ${heroVisible ? "animate" : ""}`}></div>
          <img src={hero1Img} alt="Hepsibah Catherine" className={`hero-photo ${heroVisible ? "animate" : ""}`} />
        </div>

      </div>

      {/* ── SOCIAL STRIP (fixed right edge) ── */}
      <div className={`social-strip ${showSocial ? "" : "hidden"}`}>
        <a href="#" className="social-pill" aria-label="Instagram">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5275 8.11865C11.3527 8.11865 10.2261 8.58531 9.39547 9.41598C8.56481 10.2466 8.09814 11.3733 8.09814 12.548C8.09814 13.7227 8.56481 14.8493 9.39547 15.68C10.2261 16.5107 11.3527 16.9773 12.5275 16.9773C13.7022 16.9773 14.8288 16.5107 15.6595 15.68C16.4902 14.8493 16.9568 13.7227 16.9568 12.548C16.9568 11.3733 16.4902 10.2466 15.6595 9.41598C14.8288 8.58531 13.7022 8.11865 12.5275 8.11865Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.39972 0.393602C10.1371 -0.131201 14.918 -0.131201 19.6554 0.393602C22.2435 0.682531 24.33 2.72003 24.6339 5.31766C25.1954 10.1213 25.1954 14.9741 24.6339 19.7777C24.33 22.3754 22.2435 24.4129 19.6567 24.7032C14.9189 25.2281 10.1376 25.2281 5.39972 24.7032C2.81162 24.4129 0.725066 22.3754 0.421146 19.7791C-0.140382 14.975 -0.140382 10.1218 0.421146 5.31766C0.725066 2.72003 2.81162 0.682531 5.39972 0.393602ZM19.3419 4.37046C18.9804 4.37046 18.6338 4.51405 18.3782 4.76964C18.1226 5.02523 17.979 5.37188 17.979 5.73334C17.979 6.09479 18.1226 6.44144 18.3782 6.69703C18.6338 6.95262 18.9804 7.09621 19.3419 7.09621C19.7034 7.09621 20.05 6.95262 20.3056 6.69703C20.5612 6.44144 20.7048 6.09479 20.7048 5.73334C20.7048 5.37188 20.5612 5.02523 20.3056 4.76964C20.05 4.51405 19.7034 4.37046 19.3419 4.37046ZM6.0539 12.5477C6.0539 10.8308 6.73594 9.18418 7.94998 7.97014C9.16403 6.7561 10.8106 6.07405 12.5275 6.07405C14.2445 6.07405 15.8911 6.7561 17.1051 7.97014C18.3191 9.18418 19.0012 10.8308 19.0012 12.5477C19.0012 14.2646 18.3191 15.9112 17.1051 17.1253C15.8911 18.3393 14.2445 19.0213 12.5275 19.0213C10.8106 19.0213 9.16403 18.3393 7.94998 17.1253C6.73594 15.9112 6.0539 14.2646 6.0539 12.5477Z" fill="currentColor"/>
          </svg>
        </a>
        <a href="#" className="social-pill" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="#" className="social-pill" aria-label="WhatsApp">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 0C19.4038 0 25 5.59625 25 12.5C25 19.4037 19.4038 25 12.5 25C10.291 25.0038 8.12074 24.4192 6.21251 23.3062L0.00501932 25L1.69502 18.79C0.581217 16.8811 -0.00385203 14.71 1.90858e-05 12.5C1.90858e-05 5.59625 5.59627 0 12.5 0ZM8.24001 6.625L7.99001 6.63499C7.82838 6.64613 7.67045 6.68859 7.52501 6.75999C7.38948 6.83688 7.26572 6.93287 7.15751 7.04499C7.00751 7.18624 6.92251 7.30874 6.83126 7.42749C6.36892 8.02862 6.11998 8.76663 6.12376 9.52499C6.12626 10.1375 6.28626 10.7337 6.53626 11.2912C7.04751 12.4187 7.88876 13.6125 8.99876 14.7187C9.26626 14.985 9.52876 15.2525 9.81126 15.5012C11.1906 16.7155 12.8341 17.5912 14.6113 18.0587L15.3213 18.1675C15.5525 18.18 15.7838 18.1625 16.0163 18.1512C16.3802 18.132 16.7356 18.0335 17.0575 17.8625C17.2211 17.7779 17.3808 17.6862 17.5363 17.5875C17.5363 17.5875 17.5892 17.5517 17.6925 17.475C17.8613 17.35 17.965 17.2612 18.105 17.115C18.21 17.0067 18.2975 16.8808 18.3675 16.7375C18.465 16.5337 18.5625 16.145 18.6025 15.8212C18.6325 15.5737 18.6238 15.4387 18.62 15.355C18.615 15.2212 18.5038 15.0825 18.3825 15.0237L17.655 14.6975C17.655 14.6975 16.5675 14.2237 15.9025 13.9212C15.8329 13.8909 15.7583 13.8736 15.6825 13.87C15.597 13.861 15.5105 13.8706 15.429 13.898C15.3475 13.9254 15.2728 13.97 15.21 14.0287C15.2038 14.0262 15.12 14.0975 14.2163 15.1925C14.1644 15.2622 14.0929 15.3149 14.011 15.3438C13.9291 15.3727 13.8404 15.3766 13.7563 15.355C13.6748 15.3333 13.595 15.3057 13.5175 15.2725C13.3625 15.2075 13.3088 15.1825 13.2025 15.1375C12.4849 14.8249 11.8206 14.4018 11.2338 13.8837C11.0763 13.7462 10.93 13.5962 10.78 13.4512C10.2883 12.9802 9.8597 12.4475 9.50501 11.8662L9.43126 11.7475C9.37909 11.6672 9.33631 11.5813 9.30376 11.4912C9.25626 11.3075 9.38001 11.16 9.38001 11.16C9.38001 11.16 9.68376 10.8275 9.82501 10.6475C9.96251 10.4725 10.0788 10.3025 10.1538 10.1812C10.3013 9.94374 10.3475 9.69999 10.27 9.51124C9.92001 8.65624 9.55834 7.80583 9.18501 6.95999C9.11126 6.79249 8.89251 6.67249 8.69376 6.64874C8.62626 6.64041 8.55876 6.63374 8.49126 6.62875C8.32342 6.61912 8.15513 6.62079 7.98751 6.63375L8.24001 6.625Z" fill="currentColor"/>
          </svg>
        </a>
        <a href="#" className="social-pill" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
      </div>

      {/* ── STATS BAR ── */}
      <div className="hero-stats">
        {stats.map((s, i) => (
          <AnimatedStat 
            key={i} 
            end={s.value} 
            suffix={s.suffix} 
            label={s.label} 
          />
        ))}
      </div>

    </div>
  );
}