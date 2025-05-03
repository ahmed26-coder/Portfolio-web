import Contac from "../Components/Contact";

function Contact() {
  return (
    <section className=" relative min-h-screen pt-[25%] sm:pt-[13%] lg:pt-[5%] pb-[10%] sm:pb-0 sm:py-[5%] w-full px-5 ">
      <div className="xl:max-w-[1800px] mx-auto ">
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 z-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
          }}
        />
        <div className="text-center mb-5 sm:mb-3 lg:mb-10">
          <h5 className="text-gray-500 text-lg">Get In Touch</h5>
          <h2 className="text-3xl font-bold">Contact Me</h2>
        </div>
        <Contac />
      </div>
    </section>
  );
}

export default Contact;
