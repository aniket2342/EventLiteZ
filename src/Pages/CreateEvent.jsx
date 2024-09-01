import React from 'react';
import EventForm from '../Component/EventForm';

function CreateEvent({ onCreate }) {
  return (
    <div className="container mx-auto p-4">
      <EventForm onCreate={onCreate} />
    </div>
  );
}

export default CreateEvent;