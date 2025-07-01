import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gnj3ffn",
        "template_ncphp0p",
        form.current!,
        "jthFHlJHS0kzfDUs6"
      )
      .then(() => {
        setSent(true);
        form.current?.reset();
      })
      .catch((err) => console.error(err));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-8">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input name="name" required placeholder="Your Name" className="w-full p-3 border rounded" />
          <input name="email" required type="email" placeholder="Your Email" className="w-full p-3 border rounded" />
          <textarea name="message" required placeholder="Your Message" className="w-full p-3 border rounded h-32" />
          <button type="submit" className="w-full bg-teal-600 text-white p-3 rounded hover:bg-teal-700">
            {sent ? "Sent ✅" : "Send Message"}
          </button>
        </form>
        <div className="text-center mt-6 text-gray-600">
          📞 +880123456789 <br />
          📧 piyash@example.com
        </div>
      </div>
    </section>
  );
};

export default Contact;
