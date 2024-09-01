import React from 'react';
import EventList from '../Component/EventList';

function Home({ events }) {  // Use 'events' to match what is passed from App.jsx
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6 underline underline-offset-8 decoration-green-700">Welcome to EventLiteZ</h1>
      <EventList newEvent={events} />  {/* Pass 'events' as 'newEvent' to EventList */}
    </div>
  );
}

export default Home;
