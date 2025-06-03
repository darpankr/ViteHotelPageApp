import { useState } from 'react';
import BookingPage from './components/BookingPage';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BookingPage/>
    </>
  );
}

export default App;
