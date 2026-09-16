import Menu from './Menu';

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
      </section>
      <Menu />
    </main>
  );
}

export default Main;
