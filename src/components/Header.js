import Nav from './Nav';

function Header() {
  return (
    <header className="header">
      <div className="logo-group">
        <img src="https://placehold.co/40x40/f4ce14/495e57?text=LL" alt="Little Lemon logo" className="logo-img" />
        <h1 className="logo">Little Lemon</h1>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
