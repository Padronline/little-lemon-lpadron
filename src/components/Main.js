import Menu from './Menu';
import Testimonials from './Testimonials';
import About from './About';

function Main() {
  return (
    <main>
      <section className="hero">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <a href="/booking" className="btn-reserve">Reserve a Table</a>
        </div>
        <div className="hero-image"></div>
      </section>
      <Menu />
      <Testimonials />
      <About />
    </main>
  );
}

export default Main;
