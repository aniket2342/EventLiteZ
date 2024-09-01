import './App.css';
import { lazy, Suspense } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';

const Home = lazy(() => import("./Pages/Home"));
const  CreateEvent = lazy(()=> import('./Pages/CreateEvent'))

function App() {
  const [events, setEvents] = useState([]);

  const handleCreateEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <>
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home events={events} />} />
          <Route path="/create-event" element={<CreateEvent onCreate={handleCreateEvent} />} />
        </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;