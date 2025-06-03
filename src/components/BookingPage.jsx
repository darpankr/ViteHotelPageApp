

import React from 'react'
import Header from './Header'
import BookingSIdeBar from './BookingSIdeBar'
import RecomendHotels from './RecomendHotels'
import SearchBar from './SearchBar'
import HotelInfo from './HotelInfo'

const BookingPage = () => {
  return (
    <div>
      <Header/>
      <SearchBar/>
      <main className='grid grid-cols-3 container mx-auto gap-6 py-4 px-4'>
        <section className='col-span-2'>
          <HotelInfo />
        </section>
        <section className='space-y-6'>
          <BookingSIdeBar/>
          <h1 class="text-2xl font-semibold">Recomended</h1>
          <RecomendHotels/>
        </section>
      </main>
    </div>
  )
}

export default BookingPage

