import React from 'react'

const BookingSIdeBar = () => {
  return (
    <div class="bg-gray-100 rounded space-y-4 px-4 py-2">
        <div class="pt-2">
            <h1 class="text-blue-600 font-semibold text-xl">Rs 9399 <span class="text-gray-500 line-through text-sm">Rs 12,399</span></h1>
            <p class="text-green-700 font-semibold">8% off</p>
        </div>
        <div class="flex flex-col gap-2">
            <input class="rounded border p-2" type="date"/>
            <input class="rounded border p-2" type="date"/>
            <select class="rounded border p-2" name="" id="">
                <option value="1">1 Room</option>
            </select>
            <select class="rounded border p-2" name="" id="">
                <option value="deluxe">Select a Room</option>
            </select>
        </div>

        <div>
            <p class="text-sm text-gray-600">Your Savings: Rs 448</p>
            <p class="text-sm text-gray-600">Total Price: Rs 1299</p>
        </div>

        <div>
            <button class="bg-blue-600 text-white py-2 w-full rounded">Continue to Book</button>
        </div>
        <p class="text-red-500 text-sm">1k+ people booked this OYO in last 6 months</p>
        <a class="text-blue-600 underline text-sm pb-2" href="#">Cancellation Policy</a>
    </div>
  )
}

export default BookingSIdeBar
