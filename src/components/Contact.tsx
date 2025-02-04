import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col h-full">
            {/* Get in Touch Section */}
            <div className="text-center md:text-left mb-8">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our services? We're here to help.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-center md:justify-start">
                  <Phone className="w-5 h-5 text-primary mr-3" />
                  <span>0433 855 820 </span>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Mail className="w-5 h-5 text-primary mr-3" />
                  <span>info@sdsffe.com.au</span>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <MapPin className="w-5 h-5 text-primary mr-3" />
                  <span>3 Valrena Way, Pakenham, VIC 3810</span>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="flex-grow rounded-lg overflow-hidden">
              <div className="relative pt-[75%]"> {/* 450/600 = 0.75 (4:3 aspect ratio) */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194778.38595481924!2d145.15220899116193!3d-38.08114063596082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad61e013e4e6a13%3A0x65c65dd7bee42942!2s3%20Valrena%20Way%2C%20Pakenham%20VIC%203810%2C%20Australia!5e1!3m2!1sen!2slk!4v1738653559901!5m2!1sen!2slk"
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium mb-2">
                  Company Name
                </label>
                <Input id="companyName" placeholder="Your company name"/>
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
      </div>
    </section>
  );
};

export default Contact;