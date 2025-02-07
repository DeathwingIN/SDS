import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import hero2 from '/Hero02.jpg'
import hero1 from '/hero01.jpg'


const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: hero1,
      title: "Fixtures and Fittings Supply Solutions",
      subtitle: "Delivering premium quality service with industry-leading products for commercial projects",
    },
    {
      image: hero2,
      title: "Professional Services",
      subtitle: "Reviewing the tender documents is a key responsibility of our estimating team",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
      <div className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
            <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentSlide
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                }`}
            >
              <div className="absolute inset-0 bg-black/50" />
              <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
              />
            </div>
        ))}

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight md:leading-normal">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto px-4 md:px-0">
                {slides[currentSlide].subtitle}
              </p>
              {/*<div className="flex justify-center">*/}
              {/*  <Button*/}
              {/*      size="lg"*/}
              {/*      className="group transform transition-all hover:scale-105 bg-primary/90 hover:bg-primary"*/}
              {/*      onClick={() => navigate("/services")}*/}
              {/*  >*/}
              {/*    Explore Solutions*/}
              {/*    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />*/}
              {/*  </Button>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
              <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      index === currentSlide
                          ? "bg-white w-8 scale-125"
                          : "bg-white/50 hover:bg-white/70"
                  }`}
              />
          ))}
        </div>
      </div>
  );
};

export default Hero;