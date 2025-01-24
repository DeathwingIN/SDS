import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "Premium Kitchen Tap",
      category: "Taps",
      image: "https://images.unsplash.com/photo-1584507305093-a4e12d1b4d80?auto=format&fit=crop&w=800&q=80",
      description: "Modern design with flexible spout and ceramic disc technology",
    },
    {
      title: "Industrial Water Pump",
      category: "Pumps",
      image: "https://images.unsplash.com/photo-1635048424329-a9bfb146d7aa?auto=format&fit=crop&w=800&q=80",
      description: "High-performance pump for residential water systems",
    },
    {
      title: "Bathroom Mixer",
      category: "Taps",
      image: "https://images.unsplash.com/photo-1584507305068-e52a1a58c612?auto=format&fit=crop&w=800&q=80",
      description: "Temperature-controlled mixer with modern finish",
    },
  ];

  return (
    <section id="products" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of high-quality taps and pumps, designed for
            durability and performance
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden fade-in hover:shadow-md transition-shadow"
            >
              <div className="aspect-video">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-primary font-medium">
                  {product.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Button variant="outline" className="w-full group">
                  Learn More
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" className="group">
            View All Products
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;