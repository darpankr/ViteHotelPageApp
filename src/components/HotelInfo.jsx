import React from 'react'

const HotelInfo = () => {
  return (
    <>
        <div class="flex flex-col gap-2 md:flex-row">
                <img class="rounded" src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D" alt="Hotel pic one"/>
                <img class="rounded" src="https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8fDA%3D" alt="Hotel pic two"/>
            </div>
            {/* <!-- Hotel Name --> */}
             <div class="py-4">
                <h1 class="font-medium text-2xl">Valentines Retreat - Near Candolim Beach</h1>
                <p class="text-gray-600">S-167, Uppal Southend, Sector 49, Gurgaon</p>
                <div class="py-2">
                    <span class="font-semibold">5.0</span> <span class="text-sm"> Check-in rating • Delightful experience</span>
                </div>
             </div>

             {/* <!-- Hotel Amenties --> */}
              <div class="space-y-3">
                <p class="text-red-400 text-sm">Located Less Than 5 Km From Medanta Hospital | 3 Kms From Omaxe Mall</p>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-3 text-blue-600">
                    <p>AC</p>
                    <p>Free WIFI</p>
                    <p>TV</p>
                    <p>Daily Housekeeping</p>
                    <p>Power Backup</p>
                    <p>Elevator</p>
                    <p>Geysur</p>
                </div>
              </div>

              {/* <!-- About the OyO --> */}
               <div class=" space-y-2 mt-4">
                <h1 class="font-semibold text-xl">About this OYO</h1>
                <p class="text-sm text-gray-600">OYO Townhouse is based on the needs of the millennial traveler. Every single element of the hotel – from the bathtub to the booking process – has been re-engineered for comfort, efficiency, convenience and affordability.</p>
               </div>

               {/* <!-- Choose Room --> */}
                <div class="mt-4 space-y-2">
                    <h1 class="text-xl font-semibold">Choose your room</h1>
                    <div class="flex flex-col gap-2">
                        <div class="grid grid-cols-3 justify-items-stretch rounded border py-2 px-4 bg-gray-100">
                            <div class="justify-self-start flex flex-col justify-center gap-2">
                                <div>
                                    <h1 class="font-semibold">Deluxe</h1>
                                    <p class="text-sm">Room size: 16 sqm</p>
                                </div>
                                <h1><span class="text-green-500">RS-1029</span> <span class="text-red-500 line-through">RS-3139</span></h1>
                            </div>
                            <div class="justify-self-center w-40 flex justify-center items-center">
                                <img class="rounded object-fit" src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8fDA%3D" alt="Room 1"/>
                            </div>
                            <div class="justify-self-end flex justify-center items-center">
                                <h1 class="text-green-400">SELECTED</h1>
                            </div>
                        </div>
                        <div class="grid justify-items-stretch grid-cols-3 rounded border py-2 px-4 bg-gray-100">
                            <div class="justify-self-start flex flex-col justify-center gap-2">
                                <div>
                                    <h1 class="font-semibold">Clasic</h1>
                                    <p class="text-sm">Room size: 10 sqm</p>
                                </div>
                                <h1><span class="text-green-500">RS-1029</span> <span class="text-red-500 line-through">RS-3139</span></h1>
                            </div>
                            <div class="justify-self-center w-40 flex justify-center items-center">
                                <img class="rounded object-fit" src="https://plus.unsplash.com/premium_photo-1678297269980-16f4be3a15a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsfGVufDB8fDB8fHww" alt="Room 2"/>
                            </div>
                            <div class="justify-self-end flex justify-center items-center">
                                <h1 class="text-red-400">SELECT</h1>
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default HotelInfo
