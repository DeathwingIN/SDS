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
import { services } from "@/data/services";
import type { EmblaCarouselType } from 'embla-carousel';

const Services = () => {
  const [api, setApi] = useState<EmblaCarouselType | null>(null);

  return (
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of hardware and finishes solutions, crafted for reliability and excellence.
            </p>
          </div>
          <div className="relative">
            <Carousel
                setApi={setApi}
                className="w-full"
                plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}
                opts={{
                  align: "start",
                  loop: true,
                }}
            >
              <CarouselContent className="-ml-1 md:-ml-4">
                {services.map((service, index) => (
                    <CarouselItem
                        key={index}
                        className="pl-1 md:pl-4 md:basis-1/3 basis-full"
                    >
                      <div className="bg-white rounded-lg shadow-sm overflow-hidden fade-in hover:shadow-md transition-shadow h-full transform transition-transform duration-300 hover:scale-[1.02]">
                        <div className="aspect-video">
                          <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
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
                          {/*<Button variant="outline" className="w-full group">*/}
                          {/*  Learn More*/}
                          {/*  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />*/}
                          {/*</Button>*/}
                        </div>
                      </div>
                    </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block ">
                <CarouselPrevious className="-left-10 hover:bg-primary hover:text-white" />
                <CarouselNext className="-right-10 hover:bg-primary hover:text-white" />
              </div>
            </Carousel>
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="group">
                View All Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
  );
};

export default Services;