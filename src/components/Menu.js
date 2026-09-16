import recipes from '../recipes';

function Menu() {
  return (
    <section className="menu">
      <h2>This Week's Specials!</h2>
      <div className="menu-list">
        {recipes.map((item) => (
          <div className="menu-card" key={item.id}>
            <h3>{item.name}</h3>
            <p className="price">{item.price}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
