export default function Location() {
  return (
    <div className="location-page">
      <h1>Our Location</h1>

      <section className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218.74647915326096!2d76.929026473172!3d28.69133170323511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d095273b64ed1%3A0x3f81d3042a92ad4f!2sAR%20ROHILLA%20GRAPHICS%20(%20CSC%20CENTER%20)!5e0!3m2!1sen!2sin!4v1779799169761!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{
            border: 0,
            borderRadius: "15px",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="AR Rohilla Graphics Location"
        />
      </section>
    </div>
  );
}