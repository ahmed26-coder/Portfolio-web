"use client";
import { useRef, useState, useCallback } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { Send, Github, Linkedin, Mail } from "lucide-react";

function App() {
  const form = useRef();
  const [isFormValid, setIsFormValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: ""
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const sendEmail = useCallback(
    async (e) => {
      e.preventDefault();
      if (!formData.name || !formData.email || !formData.message || !formData.phone) {
        setIsFormValid(false);
        return;
      }
      setIsFormValid(true);
      setIsLoading(true);

      try {
        await emailjs.sendForm(
          "service_hsdpnzg",
          "template_pw9aw4e",
          form.current,
          "qHYF2CATMV9BARHIr"
        );
        
        setFormData({ name: "", email: "", message: "", phone: "" });
        setIsLoading(false);

        Swal.fire({
          icon: "success",
          title: "Submitted successfully!",
          text: "Your message has been sent, I will reply to you soon 😊",
          timer: 1500,
          timerProgressBar: true,
          showConfirmButton: false,
          position: "top",
          customClass: { popup: "swal-custom" }
        });
      } catch (error) {
        console.error("Failed to send email:", error.text);
        setIsLoading(false);
      }
    },
    [formData]
  );

  return (
    <div className="relative transition-colors duration-300">
      <div className="z-10 mx-auto px-4 min-h-screen flex items-center justify-center sm:min-h-0 sm:flex-none sm:items-start sm:justify-start">
        <div className="mx-auto">
          <div className="rounded-2xl sm:p-4 lg:gap-8 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-5 sm:space-y-8">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Let's Connect
                </h1>
                <p className="text-xl font-medium">
                I&#39;m always thrilled to dive into exciting new projects, explore bold and creative ideas, and seize incredible opportunities to collaborate and bring your unique visions to life in the most impactful way possible.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-blue-500" />
                    <a
                      href="https://mail.google.com/mail/u/0/#inbox"
                      target="_blank"
                      className="hover:text-blue-500 text-lg font-medium transition-colors"
                    >
                      ahmedadhem330@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Github className="w-6 h-6 text-blue-500" />
                    <a
                      href="https://github.com/ahmed26-coder"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 text-lg font-medium transition-colors"
                    >
                      github.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Linkedin className="w-6 h-6 text-blue-500" />
                    <a
                      href="https://www.linkedin.com/in/ahmed-adham-479334331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 text-lg font-medium transition-colors"
                    >
                      linkedin.com
                    </a>
                  </div>
                </div>
              </div>

              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      placeholder="Full Name"
                      onChange={handleChange}
                      disabled={isLoading}
                      className="w-full px-4 py-2 rounded-lg border bg-gray-100 dark:bg-black/30 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      placeholder="Your Email"
                      disabled={isLoading}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border bg-gray-100 dark:bg-black/30 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 outline-none transition-colors"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Your Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full px-4 py-2 rounded-lg border bg-gray-100 dark:bg-black/30 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    placeholder="Enter Your Message"
                    onChange={handleChange}
                    disabled={isLoading}
                    rows={8}
                    className="w-full px-4 py-2 rounded-lg border bg-gray-100 dark:bg-black/30 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 outline-none transition-colors"
                    required
                  />
                </div>
                <button
                  type="submit"
                  aria-label="Send Message"
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  {isLoading && <div className="loader" />}

                  <span className={isLoading ? "hidden" : "flex items-center space-x-2"}>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </span>
                </button>
                {!isFormValid && (
                  <p className="text-red-500 text-center mt-4">
                    Please fill in all fields before sending the message.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
