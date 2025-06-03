import React from 'react'

const Header = () => {
  return (
    <div className='bg-blue-900 text-white'>
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div class="flex flex-col py-2 px-4">
                <div class="text-3xl font-bold">Booking.com</div>
                <nav class="flex flex-wrap gap-4 text-[14px] my-4">
                    <a href="#" class="hover:underline">Stays</a>
                    <a href="#" class="hover:underline">Flights</a>
                    <a href="#" class="hover:underline">Flights+Hotel</a>
                    <a href="#" class="hover:underline">Car Rentals</a>
                    <a href="#" class="hover:underline">Attractions</a>
                    <a href="#" class="hover:underline">Airport Taxis</a>
                </nav>
            </div>
            <div class="flex justify-end gap-2 md:items-center py-2 px-4">
                <img class="size-10 rounded-full border-2 object-fit" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww" alt="profile pic"/>
                <a href="#">Log Out</a>
            </div>
        </div>
    </div>
  )
}

export default Header
