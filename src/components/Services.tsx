import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const Services = () => {
  const [api, setApi] = useState<any>(null);

  const services = [
    {
      title: "Premium Kitchen Tap",
      category: "Installation",
      image: "https://images.unsplash.com/photo-1584507305093-a4e12d1b4d80?auto=format&fit=crop&w=800&q=80",
      description: "Professional installation of high-end kitchen taps with modern design and flexible spout technology",
    },
    {
      title: "Industrial Water Pump",
      category: "Maintenance",
      image: "https://images.unsplash.com/photo-1635048424329-a9bfb146d7aa?auto=format&fit=crop&w=800&q=80",
      description: "Regular maintenance and repair services for industrial-grade water pumps",
    },
    {
      title: "Bathroom Renovation",
      category: "Renovation",
      image: "https://images.unsplash.com/photo-1584507305068-e52a1a58c612?auto=format&fit=crop&w=800&q=80",
      description: "Complete bathroom renovation services including plumbing and fixtures",
    },
    {
      title: "Emergency Plumbing",
      category: "Emergency",
      image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80",
      description: "24/7 emergency plumbing services for residential and commercial properties",
    },
    {
      title: "Water Treatment",
      category: "Maintenance",
      image: "https://images.unsplash.com/photo-1615147342761-9238e15d8b96?auto=format&fit=crop&w=800&q=80",
      description: "Installation and maintenance of water treatment and filtration systems",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of plumbing services, designed for
            reliability and excellence
          </p>
        </div>
        <Carousel
          setApi={setApi}
          className="w-full"
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {services.map((service, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3 basis-full">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden fade-in hover:shadow-md transition-shadow h-full">
                  <div className="aspect-video">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-primary font-medium">
                      {service.category}
                    </span>
                    <h3 className="text-xl font-semibold mt-2 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Button variant="outline" className="w-full group">
                      Learn More
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="text-center mt-12">
          <Link to="/services">
            <Button size="lg" className="group">
              View All Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;