import { Droplet } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="text-3xl font-bold mb-6">About AquaFlow</h2>
            <p className="text-gray-600 mb-6">
              We're an Australian company dedicated to providing high-quality taps and
              pumping solutions for your home. With years of experience and a
              commitment to excellence, we ensure every product meets the highest
              standards of durability and performance.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <Droplet className="text-primary mb-2" size={24} />
                <h3 className="font-semibold mb-1">Quality First</h3>
                <p className="text-sm text-gray-600">
                  Premium materials and rigorous testing
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <Droplet className="text-primary mb-2" size={24} />
                <h3 className="font-semibold mb-1">Expert Support</h3>
                <p className="text-sm text-gray-600">
                  Professional guidance and service
                </p>
              </div>
            </div>
          </div>
          <div className="relative fade-in">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
                alt="Modern industrial design"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;