import React from 'react'

const RecomendHotels = () => {
  return (
    <div className='flex flex-col gap-2'>
        <div class="rounded border bg-gray-50 p-3 grid grid-cols-3 gap-2">
                    <div class="col-span-1">
                        <img class="rounded" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsfGVufDB8fDB8fHww" alt="suggect 1"/>
                    </div>
                    <div class="col-span-2 space-y-2">
                        <div>
                            <h1 class=" font-semibold">Hotel O Odumpur</h1>
                            <p class="text-sm text-gray-600">udhampur, Patanam . 4.1 km</p>
                        </div>
                        <div className='flex flex-col justify-center items-start gap-2'>
                            <div class="flex flex-wrap gap-0">
                                <div class="bg-green-500 w-8 flex justify-center items-center rounded">
                                    <p class="text-white">4.2</p>
                                </div>
                                <p class="text-sm text-gray-500">(2 Ratings)</p>
                                <p class="text-sm text-gray-500">Very Good</p>
                            </div>
                            <div class="flex flex-row flex-wrap gap-0">
                                <p class="text-gray-700 text-sm">Free Wifi</p>
                                <p class="text-gray-700 text-sm">Geysur</p>
                                <p class="text-gray-700 text-sm">Power Backup</p>
                                <p class="text-gray-700 text-sm">+2 more</p>
                            </div>
                        </div>  
                    </div>
                    <div class="col-span-3 flex justify-between items-center">
                        {/* <!-- price details --> */}
                        <div>
                            <div class="flex justify-start items-center gap-2">
                                <h1 class="text-xl font-semibold">Rs 841</h1>
                                <p class="text-sm text-gray-500 line-through">Rs 3682</p>
                                <p class="text-sm text-orange-400">72% off</p>
                            </div>
                            <div>
                                <span class="text-sm text-gray-600">+ Rs 190 taxes and fees . per room per night</span>
                            </div>
                        </div>
                        {/* <!-- buttons --> */}
                        <div>
                            <button class="bg-gray-200 border-black border-2 rounded py-1 px-2 hover:bg-green-400 hover:border-green-400">View Details</button>
                        </div>
                    </div>
                </div>
                <div class="rounded border bg-white p-3 grid grid-cols-3 gap-2">
                    <div class="col-span-1">
                        <img class="rounded" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsfGVufDB8fDB8fHww" alt="suggect 1"/>
                    </div>
                    <div class="col-span-2 space-y-2">
                        <div>
                            <h1 class=" font-semibold">Hotel O Odumpur</h1>
                            <p class="text-sm text-gray-600">udhampur, Patanam . 4.1 km</p>
                        </div>
                        <div>
                            <div class="flex gap-2">
                                <div class="bg-green-500 w-8 flex justify-center items-center rounded">
                                    <p class="text-white">4.2</p>
                                </div>
                                <p class="text-sm text-gray-500">(2 Ratings)</p>
                                <p class="text-sm text-gray-500">Very Good</p>
                            </div>
                            <div class="flex gap-2">
                                <p class="text-gray-700 text-sm">Free Wifi</p>
                                <p class="text-gray-700 text-sm">Geysur</p>
                                <p class="text-gray-700 text-sm">Power Backup</p>
                                <p class="text-gray-700 text-sm">+2 more</p>
                            </div>
                        </div>  
                    </div>
                    <div class="col-span-3 flex justify-between items-center">
                        {/* <!-- price details --> */}
                        <div>
                            <div class="flex justify-start items-center gap-2">
                                <h1 class="text-xl font-semibold">Rs 841</h1>
                                <p class="text-sm text-gray-500 line-through">Rs 3682</p>
                                <p class="text-sm text-orange-400">72% off</p>
                            </div>
                            <div>
                                <span class="text-sm text-gray-600">+ Rs 190 taxes and fees . per room per night</span>
                            </div>
                        </div>
                        {/* <!-- buttons --> */}
                        <div>
                            <button class="bg-gray-200 border-black border-2 rounded py-1 px-2 hover:bg-green-400 hover:border-green-400">View Details</button>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default RecomendHotels
