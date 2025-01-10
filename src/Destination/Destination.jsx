
import toast, { Toaster } from 'react-hot-toast';
import seaBeach from '../assets/images/Rectangle 1.png';

const Destination = () => {
   const TouristSpot = ["Cox's Bazar", "Sundarbans", "Saint Martin's Island", "Rangamati", "Bandarban", "Sylhet", "Kuakata", "Srimangal", "Paharpur", "Mahasthangarh", "Jaflong", "Ahsan Manzil", "Lalbagh Fort", "Sonargaon", "Patenga Beach"
   ];
   const handleBooking = () => {
      toast.success('Booking Successful')
   }
   return (
      <div style={{ backgroundImage: `url(${seaBeach})` }} className='bg-cover bg-center h-screen'>
         <div className="lg:grid grid-cols-5 justify-between items-center lg:gap-x-5 bg-black bg-opacity-70 h-full text-white">
            <div className='space-y-4 p-8 col-span-3'>
               <h1 className='uppercase text-7xl font-semibold'>Cox&apos;s bazar</h1>
               <p className=' font-light text-gray-300 text-justify'>Cox&apos;s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
            </div>
            <div className='bg-white col-span-2 p-4 m-4 md:me-4 rounded text-black'>
               {/* date picker */}
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Origin</span>
                  </label>
                  <select className=" select w-full bg-gray-300  border border-gray-300">
                     <option disabled selected>Dhaka</option>
                     {
                        TouristSpot.map((spot, index) => (
                           <option key={index} className='bg-gray-300 text-black'>{spot}</option>
                        ))
                     }
                  </select>
               </div>
               <div>
                  <label className="label">
                     <span className="label-text">Destination</span>
                  </label>
                  <select className="select select-ghost w-full bg-gray-300  border border-gray-300 ">
                     <option disabled selected>Cox&apos;s Bazar</option>
                     {
                        TouristSpot.map((spot, index) => (
                           <option key={index} className='bg-gray-300 text-black'>{spot}</option>
                        ))
                     }
                  </select>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div className='form-control'>
                     <label htmlFor="destination" className='label'>From</label>
                     <input type="date" name="destination" className='input input-bordered w-full text-white bg-gray-500' />
                  </div>
                  <div className='form-control'>
                     <label htmlFor="destination" className='label'>To</label>
                     <input type="date" name="destination" className='input input-bordered w-full text-white bg-gray-500' />
                  </div>
               </div>
               <button onClick={handleBooking} className='bg-yellow-500 p-4 w-full mt-7 rounded-lg text-lg'>Start Booking</button>
            </div>
         </div>
         <Toaster position="top-right"
            reverseOrder={true} />
      </div>
   );
};

export default Destination;