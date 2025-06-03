import { useState } from 'react';
import BookingPage from './components/BookingPage.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BookingPage />
    </>
  );
}

export default App;
