import '../css/about.css';
import { FaNodeJs, FaReact, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiAxios } from 'react-icons/si';

function About() {
    return (
        <main className="about__container">
            <section className="about__intro">
                <h1 className="about__title">About BlogPedia</h1>
                <p>
                    BlogPedia is a modern full-stack blog platform built with the MERN stack.
                    Authors can write and share content across categories like Technology,
                    Food, Lifestyle, and Travel. The project focuses on simplicity, speed,
                    and empowering creators.
                </p>
            </section>

            <section className="about__owner">
                <img src="/profile.jpg" alt="Owner" className="owner__img" />
                <div className="owner__details">
                    <h2>👋 Hi, I’m Yograj Rijal</h2>
                    <p>
                        I’m a passionate developer and the sole creator of BlogPedia.
                        I built this project as a real-world application where I learned
                        multi-role access, blog moderation, API design, category filtering,
                        and chatbot integration.
                    </p>
                </div>
            </section>

            <section className="about__stack">
                <h2>🛠 Tech Stack</h2>
                <div className="stack__grid">
                    <div className="stack__item"><SiMongodb /> MongoDB</div>
                    <div className="stack__item"><SiExpress /> Express.js</div>
                    <div className="stack__item"><FaNodeJs /> Node.js</div>
                    <div className="stack__item"><FaReact /> React.js</div>
                    <div className="stack__item"><SiAxios /> Axios</div>
                    <div className="stack__item"><FaDatabase /> Mongoose</div>
                </div>
            </section>

            <section className="about__future">
                <h2>🚀 Future Goals</h2>
                <ul>
                    <li>Implement authentication with JWT</li>
                    <li>Add comments and like system</li>
                    <li>Integrate chatbot assistant</li>
                    <li>Improve responsiveness and mobile UX</li>
                </ul>
            </section>
        </main>
    );
}

export default About;
