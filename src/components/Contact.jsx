import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
  FaFileDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [message, setMessage] = useState(null);

  const iconSize = 22;

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt size={iconSize} className="text-accent-deep" />,
      title: "ADDRESS",
      value: "Bhairahawa, Rupandehi, Nepal",
    },
    {
      icon: <FaPhone size={iconSize} className="text-accent-deep" />,
      title: "CONTACT NUMBER",
      value: (
        <a href="tel:+9779847425468" className="hover:text-accent-deep">
          +977-9847425468
        </a>
      ),
    },
    {
      icon: <FaPaperPlane size={iconSize} className="text-accent-deep" />,
      title: "EMAIL ADDRESS",
      value: (
        <a
          href="mailto:khannishant84@gmail.com"
          className="hover:text-accent-deep break-all"
        >
          khannishant84@gmail.com
        </a>
      ),
    },
    {
      icon: <FaFileDownload size={iconSize} className="text-accent-deep" />,
      title: "DOWNLOAD RESUME",
      value: (
        <a
          href="/Mohammad_Shafique_Khan_Resume.docx"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="text-accent-deep font-semibold underline underline-offset-4"
        >
          Click Here
        </a>
      ),
    },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio enquiry from ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href = `mailto:khannishant84@gmail.com?subject=${subject}&body=${body}`;

    setMessage("Your email app should open with the message ready to send.");
    setForm({ name: "", email: "", message: "" });
    setShowForm(false);
  };

  return (
    <section
      id="contact"
      aria-label="Contact me"
      className="px-4 md:px-10 py-20 scroll-mt-24 relative overflow-hidden"
    >
      <p
        className="neu-watermark absolute top-6 left-1/2 -translate-x-1/2 text-6xl md:text-8xl font-extrabold uppercase pointer-events-none"
        aria-hidden="true"
      >
        Contact
      </p>

      <div className="max-w-6xl mx-auto relative text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-ink">Contact Me</h2>
        <div className="h-1 w-24 mx-auto mt-4 rounded-full bg-accent" />
        <p className="text-ink-soft mt-5 max-w-xl mx-auto">
          Open to pharmacist roles in the Middle East (GCC). The details below
          are the fastest way to reach me.
        </p>

        {/* Contact info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {contactInfo.map((item) => (
            <div
              key={item.title}
              className="neu rounded-3xl p-7 flex flex-col items-center transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="neu-inset-sm p-4 rounded-full mb-4">{item.icon}</div>
              <h4 className="text-xs font-bold text-ink mb-2 tracking-wider">
                {item.title}
              </h4>
              <p className="text-sm text-ink-soft break-words">{item.value}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-ink">Have a Question?</h3>
          <button
            type="button"
            onClick={() => {
              setShowForm(!showForm);
              setMessage(null);
            }}
            className="neu-accent mt-6 px-8 py-3 rounded-2xl font-bold text-ink transition-transform duration-200 hover:-translate-y-0.5"
          >
            {showForm ? "Close Form" : "Click Here"}
          </button>
        </div>

        {message && (
          <p className="mt-6 text-sm font-semibold text-emerald-700">{message}</p>
        )}

        {/* Form */}
        {showForm && (
          <motion.form
            onSubmit={handleSubmit}
            className="neu rounded-3xl max-w-xl mx-auto mt-12 flex flex-col gap-6 p-8 text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            aria-live="polite"
          >
            <label htmlFor="name" className="sr-only">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              aria-required="true"
              className="neu-input rounded-2xl p-4 text-ink placeholder-ink-faint"
            />

            <label htmlFor="email" className="sr-only">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              aria-required="true"
              className="neu-input rounded-2xl p-4 text-ink placeholder-ink-faint"
            />

            <label htmlFor="message" className="sr-only">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              required
              aria-required="true"
              className="neu-input rounded-2xl p-4 text-ink placeholder-ink-faint resize-none"
            />

            <button
              type="submit"
              className="neu-accent text-ink font-bold py-3 rounded-2xl"
            >
              Send Message
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default Contact;
