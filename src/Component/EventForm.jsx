import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function EventForm({ onCreate }) {
  const [eventText, setEventText] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!eventText || !eventDate || !eventTime || !eventLocation) {
      alert("Please fill in all fields before submitting the form.");
    } else {
      alert("Your Form is Submitted");
      
      const newEvent = {
        name: eventText,
        date: eventDate,
        time: eventTime,
        location: eventLocation,
      };

      if (typeof onCreate === 'function') {
        onCreate(newEvent);
      } else {
        console.error('onCreate is not a function');
      }

      navigate('/');
      
    }
  };

  return (
    <div className="mt-10 container mx-auto py-10 px-4 sm:px-6 lg:px-8 max-w-3xl">
      <h1 className="text-black text-4xl font-semibold text-center underline underline-offset-8 decoration-green-700">
        Create Event
      </h1>
      <form className="mt-10" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="eventText" className="block text-black text-2xl mb-2">
            Enter Event Name:
          </label>
          <input
            type="text"
            id="eventText"
            value={eventText}
            onChange={(e) => setEventText(e.target.value)}
            className="w-full border rounded py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-700"
            placeholder="Enter Your Event Name"
            
          />
        </div>

        <div className="mb-6">
          <label htmlFor="eventDate" className="block text-black text-2xl mb-2">
            Enter Event Date:
          </label>
          <input
            type="date"
            id="eventDate"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="w-full border rounded py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-700"
            
          />
        </div>

        <div className="mb-6">
          <label htmlFor="eventTime" className="block text-black text-2xl mb-2">
            Enter Event Time:
          </label>
          <input
            type="time"
            id="eventTime"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
            className="w-full border rounded py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-700"
           
          />
        </div>

        <div className="mb-6">
          <label htmlFor="eventLocation" className="block text-black text-2xl mb-2">
            Location:
          </label>
          <input
            type="text"
            id="eventLocation"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
            className="w-full border rounded py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-700"
            placeholder="Enter the location"
            
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-700 text-black font-semibold py-3 px-4 rounded-md hover:text-white transition-colors duration-300"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default EventForm;
