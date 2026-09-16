const testimonials = [
  { id: 1, name: 'Carlos Ramirez', rating: 5, text: 'Great food and even better service, we will be back soon.', avatar: 'https://placehold.co/80x80/ee9972/ffffff?text=CR' },
  { id: 2, name: 'Sofia Martinez', rating: 5, text: 'The bruschetta was amazing, definitely recommend this place.', avatar: 'https://placehold.co/80x80/f4ce14/333333?text=SM' },
  { id: 3, name: 'Daniel Lee', rating: 4, text: 'Nice atmosphere and friendly staff, food came out fast.', avatar: 'https://placehold.co/80x80/495e57/ffffff?text=DL' },
  { id: 4, name: 'Emma Wilson', rating: 5, text: 'Best Mediterranean food I have had in Chicago so far.', avatar: 'https://placehold.co/80x80/fbdabb/333333?text=EW' },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-list">
        {testimonials.map((t) => (
          <div className="testimonial-card" key={t.id}>
            <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
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
