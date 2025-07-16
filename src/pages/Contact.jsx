// src/pages/Contact.jsx
import axios from 'axios';
import '../css/contact.css';
const API_URL = import.meta.env.VITE_API_URL;

function Contact() {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const contactData = {
            Name: formData.get('fullName'),
            Email: formData.get('email'),
            Message: formData.get('message')
        }

        await axios.post(`${API_URL}/api/v1/contact`, contactData)
            .then((res) => {
                console.log("Message Send Successfully:", res.data);
                alert("Message Send Successfully!");
                event.target.reset();
            })
            .catch((err) => {
                console.error("Error sending messsage:", err);
                alert("Failed to send message. Please try again.");
            })
    }
    return (
        <main className="contact__container">
            <section className="contact__intro">
                <h1>📬 Contact Me</h1>
                <p>
                    Have a question, suggestion, or just want to say hello? I’d love to hear from you!
                    Fill out the form or connect with me through the links below.
                </p>
            </section>

            <section className="contact__form-section">
                <form className="contact__form" onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name='fullName' placeholder="Your full name" required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name='email' placeholder="your@email.com" required />
                    </label>
                    <label>
                        Message:
                        <textarea rows="5" name='message' placeholder="Your message..." required></textarea>
                    </label>
                    <button type="submit">Send Message</button>
                </form>

                <div className="contact__info">
                    <h2>📞 Contact Info</h2>
                    <p>Email: <a href="mailto:yograj@example.com">yograj@example.com</a></p>
                    <p>Location: Kathmandu, Nepal</p>
                    <div className="social__links">
                        <a href="https://github.com/Yograj47" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://linkedin.com/in/yograj" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Contact;
