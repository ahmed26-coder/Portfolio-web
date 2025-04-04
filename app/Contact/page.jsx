"use client";
import { useRef, useState, useCallback } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { socialLinks } from "../Components/Constent";

function Contact() {
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
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const sendEmail = useCallback(
    (e) => {
      e.preventDefault();
      if (
        !formData.name ||
        !formData.email ||
        !formData.message ||
        !formData.phone
      ) {
        setIsFormValid(false);
        return;
      }
      setIsFormValid(true);
      setIsLoading(true);

      emailjs
        .sendForm(
          "service_hsdpnzg",
          "template_pw9aw4e",
          form.current,
          "qHYF2CATMV9BARHIr"
        )
        .then(
          () => {
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
          },
          (error) => {
            console.error("Failed to send email:", error.text);
            setIsLoading(false);
          }
        );
    },
    [formData]
  );

  return (
    <section className="py-[25%] sm:py-[5%] w-full sm:max-w-[12500px] mx-auto px-5">
      <div className="text-center mb-10">
        <h5 className="text-gray-500 text-lg">Get In Touch</h5>
        <h2 className="text-3xl font-bold">Contact Me</h2>
      </div>

      <div className=" sm:flex rounded-lg items-center space-y-8">
        <Image
          className=""
          src="/contact.webp"
          width={700}
          height={450}
          alt="Contact"
          priority
        />
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-5 w-full sm:p-6 rounded-lg"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            disabled={isLoading}
            className="p-3 w-full border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-50"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            disabled={isLoading}
            className="p-3 w-full border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-50"
          />
          <input
            type="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone"
            required
            disabled={isLoading}
            className="p-3 w-full border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-50"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={10}
            placeholder="Enter Your Message"
            required
            disabled={isLoading}
            className="p-3 w-full border border-gray-300 rounded-lg resize-none outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-50/5"
          ></textarea>
          <button
            type="submit"
            aria-label="Send Message"
            className="bg-blue-500 flex items-center justify-center gap-4 w-full text-white py-3 px-6 rounded-lg font-semibold text-lg transition hover:bg-blue-600"
            disabled={isLoading}
          >
            {isLoading && <div className="loader"></div>}
            Send Message
          </button>
        </form>
        <div className="flex sm:hidden gap-5 justify-center">
          {socialLinks.map((item) => (
            <article key={item.id} className=" flex gap-5">
              <a
                href={item.href}
                aria-label={item.title}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
              >
                <p className="text-3xl text-[#666666] dark:text-[#666666]">
                  {item.icon}
                </p>
              </a>
            </article>
          ))}
        </div>
      </div>

      {!isFormValid && (
        <p className="text-red-500 text-center mt-4">
          Please fill in all fields before sending the message.
        </p>
      )}
    </section>
  );
}

export default Contact;
