import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";
import { services } from "@/data/services";

const Services = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  // const products = [
  //   {
  //     title: "Premium Kitchen Tap",
  //     category: "Taps",
  //     image: "https://images.unsplash.com/photo-1584507305093-a4e12d1b4d80?auto=format&fit=crop&w=800&q=80",
  //     description: "Modern design with flexible spout and ceramic disc technology",
  //     price: "$299.99",
  //   },
  //   {
  //     title: "Industrial Water Pump",
  //     category: "Pumps",
  //     image: "https://images.unsplash.com/photo-1635048424329-a9bfb146d7aa?auto=format&fit=crop&w=800&q=80",
  //     description: "High-performance pump for residential water systems",
  //     price: "$499.99",
  //   },
  //   {
  //     title: "Bathroom Mixer",
  //     category: "Taps",
  //     image: "https://images.unsplash.com/photo-1584507305068-e52a1a58c612?auto=format&fit=crop&w=800&q=80",
  //     description: "Temperature-controlled mixer with modern finish",
  //     price: "$249.99",
  //   },
  //
  // ];

  const filteredProducts = services.filter((service) => {
    const matchesSearch = service.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || service.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our complete collection of high-quality taps and pumps
          </p>
        </div>

        {/*/!* Search and Filter Section *!/*/}
        {/*<div className="flex flex-col md:flex-row gap-4 mb-8">*/}
        {/*  <div className="relative flex-1">*/}
        {/*    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />*/}
        {/*    <Input*/}
        {/*      type="text"*/}
        {/*      placeholder="Search products..."*/}
        {/*      value={searchQuery}*/}
        {/*      onChange={(e) => setSearchQuery(e.target.value)}*/}
        {/*      className="pl-10"*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*  <Select value={categoryFilter} onValueChange={setCategoryFilter}>*/}
        {/*    <SelectTrigger className="w-full md:w-[180px]">*/}
        {/*      <SelectValue placeholder="Category" />*/}
        {/*    </SelectTrigger>*/}
        {/*    <SelectContent>*/}
        {/*      <SelectItem value="all">All Categories</SelectItem>*/}
        {/*      <SelectItem value="Taps">Taps</SelectItem>*/}
        {/*      <SelectItem value="Pumps">Pumps</SelectItem>*/}
        {/*    </SelectContent>*/}
        {/*  </Select>*/}
        {/*</div>*/}

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
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
                {/*<p className="text-lg font-semibold text-primary mb-4">*/}
                {/*  {service.price}*/}
                {/*</p>*/}
                {/*<Button variant="outline" className="w-full group">*/}
                {/*  Learn More*/}
                {/*  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />*/}
                {/*</Button>*/}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;