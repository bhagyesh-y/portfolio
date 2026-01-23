import { useState } from "react";
import api from "../api/axios";
import SEO from "../components/SEO";
const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("idle"); // idle | loading | success | error

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            await api.post("/contact/", formData);
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch (err) {
            setStatus("error");
        }
    };

    return (
        <section className="contact-page fade-section visible">
            <SEO
                title="Contact | Bhagyesh"
                description="Get in touch with Bhagyesh for full stack development opportunities or collaborations."
            />
            <h1 className="section-title">Contact Me</h1>

            <p className="contact-intro">
                Have a project, opportunity, or question? Feel free to reach out.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />

                <button type="submit" disabled={status === "loading"}>
                    {status === "loading" ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                    <p className="success-msg">Message sent successfully.</p>
                )}

                {status === "error" && (
                    <p className="error-msg">
                        Something went wrong. Please try again.
                    </p>
                )}
            </form>
        </section>
    );
};

export default Contact;
