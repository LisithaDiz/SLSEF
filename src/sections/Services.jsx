import { services } from "../constants";
import { ServiceCard } from "../components";

const Services = () => {
  return (
    <section className="relative z-20 flex justify-center gap-20 max-container">
      <div className="w-full p-8 bg-[rgba(97,108,165,0.5)] border border-gray-300 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <a key={service.label} href={service.link} target="_blank" rel="noopener noreferrer">
              <ServiceCard {...service} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
