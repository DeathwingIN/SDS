import {ShieldCheck , Briefcase} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in ">
            <h2 className=" text-3xl text-center md:text-start font-bold mb-6">Who We Are</h2>
            <p className="text-gray-600 mb-6 ">
              We are a company who specialises in delivering comprehensive fixtures and fittings packages tailored for commercial construction projects throughout Victoria.<br/>
              Our extensive expertise allows us to meticulously analyse architectural drawings and detailed specifications, ensuring we have a clear understanding of the specific scope of work involved.
              This process empowers us to identify and source high-quality products from the market's leading suppliers, all while maintaining competitive pricing.<br/>
              By streamlining this aspect of the construction process, we enable builders to save valuable time and focus on successfully completing their projects.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div
                  className="group p-4 bg-white rounded-lg shadow-sm hover:bg-primary transition-all duration-300 ease-in-out cursor-pointer">
                <ShieldCheck  className="text-primary mb-2 transition-colors duration-300 group-hover:text-white"
                            size={24}/>
                <h3 className="font-semibold mb-1 transition-colors duration-300 group-hover:text-white">Quality
                  First</h3>
                <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-white/90">
                  Premium products from the market's leading suppliers.
                </p>
              </div>
              <div
                  className="group p-4 bg-white rounded-lg shadow-sm hover:bg-primary transition-all duration-300 ease-in-out cursor-pointer">
                <Briefcase className="text-primary mb-2 transition-colors duration-300 group-hover:text-white"
                            size={24}/>
                <h3 className="font-semibold mb-1 transition-colors duration-300 group-hover:text-white">Expert Support</h3>
                <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-white/90">
                  Professional guidance and service from our team.
                </p>
              </div>
            </div>
          </div>
          <div className="relative fade-in">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                  src="./About.jpg"
                  alt="Modern industrial design"
                  className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-lg -z-10"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;