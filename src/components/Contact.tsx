import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";

const Contact = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<google.maps.Map | null>(null);
  const marker = useRef<google.maps.Marker | null>(null);

  useEffect(() => {
    const initMap = () => {
      if (!mapContainer.current) return;

      const sydney = { lat: -33.8688, lng: 151.2093 };
      map.current = new google.maps.Map(mapContainer.current, {
        zoom: 15,
        center: sydney,
        mapId: 'YOUR_MAP_ID'
      });

      marker.current = new google.maps.Marker({
        position: sydney,
        map: map.current,
        title: "Our Location"
      });
    };

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    script.defer = true;
    window.initMap = initMap;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our services? We're here to help. Fill out the
              form below and we'll get back to you shortly.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="w-5 h-5 text-primary mr-3" />
                <span>1300 123 456</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="w-5 h-5 text-primary mr-3" />
                <span>info@aquaflow.com.au</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <MapPin className="w-5 h-5 text-primary mr-3" />
                <span>123 Business Street, Sydney NSW 2000</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium mb-2">
                  Company Name
                </label>
                <Input id="companyName" placeholder="Your company name" />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium mb-2">
                  Address
                </label>
                <Input id="address" placeholder="Your address" />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone
                </label>
                <Input id="phone" type="tel" placeholder="Your phone number" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="How can we help?"
                  className="min-h-[120px]"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-12 h-[400px] rounded-lg overflow-hidden">
          <div ref={mapContainer} className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default Contact;