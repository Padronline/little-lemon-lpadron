const testimonials = [
  { id: 1, name: 'Carlos Ramirez', rating: 5, text: 'Great food and even better service, we will be back soon.' },
  { id: 2, name: 'Sofia Martinez', rating: 5, text: 'The bruschetta was amazing, definitely recommend this place.' },
  { id: 3, name: 'Daniel Lee', rating: 4, text: 'Nice atmosphere and friendly staff, food came out fast.' },
  { id: 4, name: 'Emma Wilson', rating: 5, text: 'Best Mediterranean food I have had in Chicago so far.' },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-list">
        {testimonials.map((t) => (
          <div className="testimonial-card" key={t.id}>
            <p className="stars">{'★'.repeat(t.rating)}</p>
            <p className="testimonial-name">{t.name}</p>
            <p>{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
