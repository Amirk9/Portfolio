import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
  FaFileDownload,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const iconSize = 22;

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt size={iconSize} className="text-accent-deep" />,
      title: "ADDRESS",
      value: "Bengaluru, India",
    },
    {
      icon: <FaPhone size={iconSize} className="text-accent-deep" />,
      title: "CONTACT NUMBER",
      value: "+91-9019781278",
    },
    {
      icon: <FaPaperPlane size={iconSize} className="text-accent-deep" />,
      title: "EMAIL ADDRESS",
      value: "mdamirkhanj89@gmail.com",
    },
    {
      icon: <FaFileDownload size={iconSize} className="text-accent-deep" />,
      title: "DOWNLOAD RESUME",
      value: (
        <a
          href="/Mohammad_Amir_Khan_Resume.pdf"
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

  const socialIcons = [
    {
      icon: <FaYoutube size={iconSize} />,
      url: "https://youtube.com",
      label: "YouTube",
    },
    {
      icon: <FaLinkedin size={iconSize} />,
      url: "https://www.linkedin.com/in/mohammad-amir-khan",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter size={iconSize} />,
      url: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <FaFacebook size={iconSize} />,
      url: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: <FaInstagram size={iconSize} />,
      url: "https://instagram.com",
      label: "Instagram",
    },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      const response = await fetch("https://formspree.io/f/xjkwzklg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setMessage("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
        setShowForm(false);
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } catch (err) {
      console.error("Error sending message:", err);
      setError("Failed to send message.");
    } finally {
      setLoading(false);
    }
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
          Have a role in mind, or want to talk about a project? The details below
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
              setError(null);
            }}
            className="neu-accent mt-6 px-8 py-3 rounded-2xl font-bold text-ink transition-transform duration-200 hover:-translate-y-0.5"
          >
            {showForm ? "Close Form" : "Click Here"}
          </button>
        </div>

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
              disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
              className="neu-input rounded-2xl p-4 text-ink placeholder-ink-faint resize-none"
            />

            {message && <p className="text-sm font-semibold text-emerald-700">{message}</p>}
            {error && <p className="text-sm font-semibold text-red-700">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="neu-accent text-ink font-bold py-3 rounded-2xl disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        )}

        {/* Socials */}
        <div className="mt-16">
          <p className="mb-6 text-ink-soft font-medium">Find me on</p>
          <div className="flex justify-center gap-5">
            {socialIcons.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="neu p-4 rounded-full text-ink-soft transition-transform duration-200 hover:-translate-y-1 hover:text-accent-deep"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
