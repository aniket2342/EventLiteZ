import React from 'react';

function EventItem({ event }) {
  return (
    <div className="border p-4 rounded-lg shadow-2xl">
      <h2 className="text-2xl font-bold mb-2">{event.name}</h2>
      <p className="text-gray-700">Date: {event.date}</p>
      <p className="text-gray-700">Time: {event.time}</p>
      <p className="text-gray-700">Location: {event.location}</p>
    </div>
  );
}

export default EventItem;
