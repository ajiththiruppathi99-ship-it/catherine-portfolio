import "./Partners.css";
import ProfileCard from "./Profilecard.jsx";
import orbit0 from "../../assets/orbit-0.png";
import orbit2 from "../../assets/orbit-2.png";
import orbit3 from "../../assets/orbit-3.png";
import orbit5 from "../../assets/orbit-5.png";
import orbit6 from "../../assets/orbit-6.png";
import orbit7 from "../../assets/orbit-7.png";
import orbit8 from "../../assets/orbit-8.png";
import orbit9 from "../../assets/orbit-9.png";

/* SparkleStars: small glowing dots that rotate around a given orbit ring */
function SparkleStars({ count = 3, speed = "20s" }) {
  const stars = Array.from({ length: count }, (_, i) => {
    const angleDeg = (360 / count) * i + 90;
    return (
      <div
        key={i}
        className="star-dot-wrapper"
        style={{
          "--angle": `${angleDeg}deg`,
        }}
      >
        <div
          className="star-dot"
          style={{
            animationDelay: `${i * 0.8}s`,
          }}
        />
      </div>
    );
  });
  // Wrap stars in a spinning ring so only they rotate
  return (
    <div className="sparkle-ring" style={{ animationDuration: speed }}>
      {stars}
    </div>
  );
}

export default function Orbit() {
  return (
    <div className="orbit-container">
      {/* Center title */}
      <h1 className="center-text">
        Our Prestigious <br /><span>Firms</span>
      </h1>

      {/* Orbit 1 — innermost */}
      <div className="orbit orbit1">
        <SparkleStars count={3} speed="18s" />
        <ProfileCard name="Manvian" image={orbit0} angle={0} />
      </div>

      {/* Orbit 2 */}
      <div className="orbit orbit2">
        <SparkleStars count={4} speed="25s" />
        <ProfileCard name="Opptiverse" image={orbit6} angle={-45} />
        <ProfileCard name="x--x--x--" image={orbit3} angle={55} />
      </div>

      {/* Orbit 3 */}
      <div className="orbit orbit3">
        <SparkleStars count={5} speed="32s" />
        <ProfileCard name="x--x--x--" image={orbit2} angle={-60} />
        <ProfileCard name="Topackz" image={orbit7} angle={0} />
        <ProfileCard name="MSpace" image={orbit8} angle={60} />
      </div>

      {/* Orbit 4 — outermost */}
      <div className="orbit orbit4">
        <SparkleStars count={6} speed="40s" />
        <ProfileCard name="Artmount academy" image={orbit5} angle={-110} />
        <ProfileCard name="MBAS" image={orbit9} angle={110} />
      </div>

      {/* Bottom gradient fade overlay */}
      <div className="orbit-bottom-fade" />
    </div>
  );
}
