"use client";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [isFormValid, setIsFormValid] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setIsFormValid(false);
      return;
    }
    setIsFormValid(true);

    emailjs
      .sendForm("service_hsdpnzg", "template_pw9aw4e", form.current, "qHYF2CATMV9BARHIr")
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          
          // 🔹 تفريغ الحقول بعد الإرسال
          setFormData({ name: "", email: "", message: "" });

          Swal.fire({
            icon: "success",
            title: "تم الإرسال بنجاح!",
            text: "تم إرسال رسالتك، وسأرد عليك قريبًا 😊",
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false,
            position: "top",
            customClass: {
              popup: "swal-custom",
            },
          });
        },
        (error) => {
          console.error("Failed to send email:", error.text);
        }
      );
  };

  const ContactData = [
    {
      id: 1,
      icon: <MdOutlineEmail className="text-4xl text-blue-500 mx-auto mb-2" />,
      title: "Email",
      info: "ahmadadham330@gmail.com",
      link: "mailto:ahmadadham330@gmail.com",
    },
    {
      id: 2,
      icon: <RiMessengerLine className="text-4xl text-blue-600 mx-auto mb-2" />,
      title: "Messenger",
      info: "Ahmad Shrara",
      link: "https://m.me/AhmadShrara",
    },
    {
      id: 3,
      icon: <BsWhatsapp className="text-4xl text-green-500 mx-auto mb-2" />,
      title: "WhatsApp",
      info: "+20101626452",
      link: "https://api.whatsapp.com/send?phone=201016626452",
    },
  ];

  return (
    <section className="py-[25%] sm:py-[5%] w-full max-w-[12500px] mx-auto px-5">
      <div className="text-center mb-10">
        <h5 className="text-gray-500 text-lg">Get In Touch</h5>
        <h2 className="text-3xl font-bold">Contact Me</h2>
      </div>

      <div className="container flex flex-col md:flex-row gap-10">
        <div className="flex flex-col gap-4 w-full md:w-3/5">
          {ContactData.map(({ id, icon, title, info, link }) => (
            <div
              key={id}
              className="shadow-md p-5 rounded-lg text-center transition hover:shadow-lg border border-[#999999] hover:border-blue-400"
            >
              {icon}
              <h4 className="text-xl font-semibold">{title}</h4>
              <h5 className="text-gray-600">{info}</h5>
              <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 inline-block">
                Send Message
              </a>
            </div>
          ))}
        </div>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 w-full shadow-md p-6 rounded-lg">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={10}
            placeholder="Enter Your Message"
            required
            className="p-3 w-full border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 w-full text-white py-3 px-6 rounded-lg font-semibold text-lg transition hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>

      {!isFormValid && (
        <p className="text-red-500 text-center mt-4">Please fill in all fields before sending the message.</p>
      )}
    </section>
  );
}

export default Contact;
