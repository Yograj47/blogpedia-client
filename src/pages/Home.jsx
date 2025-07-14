import Blog from '../components/blogSection';
import Hero from '../components/heroSection';
import '../css/home.css';
import '../css/navbar.css';

function Home() {

    return (
        <>
            < Hero />
            <main className="home-main">
                <div className="hero-spacer"></div>
                <section className="home-content">
                    <Blog />
                    <aside className="sidebar">
                        <h1>Will be available soon...</h1>
                    </aside>
                </section>
            </main>

        </>
    );
}

export default Home;
