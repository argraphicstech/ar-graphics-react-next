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
