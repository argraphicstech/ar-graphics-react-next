import ServiceCard from "../components/ServiceCard";
import services from "../data/servicesData";

export default function Home() {
  return (
    <>
      <header id="home">
        <div className="tagline">
          | All Printing & Digital Services in One Place
        </div>
      </header>

      {/* About Us Section */}
      <section id="about" className="about-section">
        <h2 className="title">About Us</h2>
        <p className="about-text">
          AR Rohilla Graphics is your one-stop destination for Printing,
          Designing, Online Forms, Visiting Cards, Flex Printing, Lamination,
          and Digital Services. We are committed to providing quality services
          at affordable prices with customer satisfaction as our priority.
        </p>
      </section>

      <h2 className="title">Our Services</h2>

      <section className="services" id="services">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            details={service.details}
          />
        ))}
      </section>
    </>
  );
}
