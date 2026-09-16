import { useState } from 'react';

function BookingForm({ availableTimes, onSubmit }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ date, time, guests, occasion });
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <label htmlFor="time">Choose time</label>
      <select id="time" value={time} onChange={(e) => setTime(e.target.value)}>
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit" className="btn-reserve">Make Your Reservation</button>
    </form>
  );
}

export default BookingForm;
