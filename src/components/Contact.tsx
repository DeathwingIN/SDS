import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import Map from "./Map";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-8 max-w-md">
              Have questions about our products? We're here to help. Fill out the
              form below and we'll get back to you shortly.
            </p>
            <div className="space-y-4 w-full max-w-md">
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
          <div className="bg-white p-6 rounded-lg shadow-sm max-w-md mx-auto w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone
                </label>
                <Input id="phone" type="tel" placeholder="Your phone number" />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
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
        <div className="w-full">
          <Map />
        </div>
      </div>
    </section>
  );
};

export default Contact;