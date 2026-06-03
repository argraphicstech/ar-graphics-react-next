export default function ServiceCard({ image, title, details }) {
  return (
    <div className="card">
      <img src={image} alt={title} />

      <div className="card-content">
        <h2>{title}</h2>

        {details.map((item, index) => (
          <p key={index}>✓ {item}</p>
        ))}
      </div>
    </div>
  );
}