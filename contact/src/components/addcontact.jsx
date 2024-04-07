import React from 'react'
import Navbars from './navbars';


const AddContact = () => {
    return (
      <div>
        <p className='pl-72 text-xl font-bold'>Add new contact</p>
        <div className=" flex justify-around items-center mt-8 ">
            <form>
              <div className="mb-4">
                <input className="shadow appearance-none border  py-4 px-96 text-white leading-tight " id="name" type="text" placeholder="Enter your name" />
              </div>
              <div className="mb-4">
                <input className="shadow appearance-none border  py-4 px-96 text-white leading-tight" id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="mb-4">
                <input className="shadow appearance-none border rounded  py-4 px-96 text-white leading-tight " id="phone" type="tel" placeholder="Enter your telephone number" />
              </div>
              
              <div className="flex items-center justify-around">
                <input type="submit"  className="bg-[#171415] text-white px-96 py-2 rounded-sm hover:bg-[#cdb2b6]" />
              </div>
            </form>
          
        </div>
      </div>
    );
  };
  
  

export default AddContact;


