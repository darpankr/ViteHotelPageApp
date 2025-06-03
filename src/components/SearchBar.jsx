import React from 'react'

const SearchBar = () => {
  return (
    <div className='bg-gray-100'>
      <div class="container mx-auto flex flex-col gap-2 p-4 md:flex-row">
            <input type="text" placeholder="New Delhi" class="rounded border flex-1 p-2"/>
            <input type="date" class="rounded p-2 border"/>
            <input type="date" class="rounded p-2 border"/>
            <select name="" id="" class="border p-2 rounded">
                <option value="1">1 Room</option>
            </select>
            <button class="bg-amber-300 w-20 rounded font-medium">Search</button>
        </div>
    </div>
  )
}

export default SearchBar
