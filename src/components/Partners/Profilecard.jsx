import "./Profilecard.css";

export default function ProfileCard({ name, image, angle = 0 }) {
  return (
    <div
      className="profile"
      style={{
        "--angle": `${angle}deg`,
      }}
    >
      <div className="capsule">
        <img src={image || "src/assets/orbit-0.png"} alt={name} />
        <div className="profile-details">
          <span className="name">{name}</span>
          <a className="view-link" href="#" onClick={(e) => e.preventDefault()}>
            View Website &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}