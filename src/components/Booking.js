import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';

const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

function Booking() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  function handleSubmit(booking) {
    setBookings([...bookings, booking]);
    navigate('/confirmed');
  }

  return (
    <section className="booking">
      <h2>Reserve a Table</h2>
      <BookingForm availableTimes={availableTimes} onSubmit={handleSubmit} />
    </section>
  );
}

export default Booking;
