import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState, useRef, useEffect } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(
      null
  );
  const formRef = useRef<HTMLFormElement>(null); // Reference to the form

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 5000); // Auto-hide after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [message]);

  // Function to validate email format
  const isValidEmailFormat = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form fields
    const formData = new FormData(e.currentTarget);
    const companyName = formData.get("companyName")?.toString().trim();
    const name = formData.get("name")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const messageText = formData.get("message")?.toString().trim();

    if (!companyName && !name) {
      setMessage({
        type: "error",
        text: "Please provide either a company name or your name.",
      });
      return;
    }

    if (!phone) {
      setMessage({
        type: "error",
        text: "Phone number is required.",
      });
      return;
    }

    if (!email || !isValidEmailFormat(email)) {
      setMessage({
        type: "error",
        text: "Please provide a valid email address.",
      });
      return;
    }


    if (!messageText) {
      setMessage({
        type: "error",
        text: "Message field cannot be empty.",
      });
      return;
    }

    setIsLoading(true);

    // Send email using EmailJS
    emailjs
        .sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            e.currentTarget,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
            () => {
              setMessage({ type: "success", text: "Message sent successfully!" });
              setIsLoading(false);
              // Reset the form fields
              if (formRef.current) {
                formRef.current.reset();
              }
            },
            (error) => {
              console.error("Error sending email:", error);
              setMessage({
                type: "error",
                text: "Failed to send message. Please try again later.",
              });
              setIsLoading(false);
            }
        );
  };

  return (
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Section: Get in Touch */}
            <div className="flex flex-col h-full">
              <div className="text-center md:text-left mb-8">
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Have questions about our services? We're here to help.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-center md:justify-start">
                    <Phone className="w-5 h-5 text-primary mr-3" />
                    <span>0433 855 820</span>
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
                <div className="relative pt-[75%]">
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
            {/* Right Section: Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              {/* Message Notification */}
              {message && (
                  <div
                      className={`absolute bottom-4 left-0 right-0 mx-auto w-full max-w-xs py-2 px-4 rounded-md shadow-md transition-opacity duration-300 ${
                          message.type === "success"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                      }`}
                  >
                    <span>{message.text}</span>
                  </div>
              )}
              <form
                  ref={formRef} // Attach the form reference
                  onSubmit={handleSubmit}
                  className="space-y-4"
              >
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <Input id="companyName" name="companyName" placeholder="Your company name" />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium mb-2">
                    Address
                  </label>
                  <Input id="address" name="address" placeholder="Your address" />
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input id="name" name="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <Input id="phone" name="phone" type="tel" placeholder="Your phone number" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="Your email" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help?"
                      className="min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;