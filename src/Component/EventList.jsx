import React from 'react';
import EventItem from './EventItem';

function EventList({ newEvent }) {
  return (
    <div className='container mx-auto p-4 mt-10'>
      <h1 className='text-black text-4xl font-semibold underline underline-offset-8 decoration-green-700'>Upcoming Events</h1>
      {newEvent.length === 0 ? (
        <p className="text-center text-gray-500 ">No upcoming events.</p>
      ) : (
        <div className="mt-10 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {newEvent.map((event, index) => (
            <EventItem key={index} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}

export default EventList;
