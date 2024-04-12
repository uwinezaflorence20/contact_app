import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";


const AddContact = () => {
    return (
      <div>
        <div class=" bg-gray-400 py-3 w-full flex flex-wrap justify-center items-center gap-20 ">
        <div class="flex flex-col mb-2 md:mb-0">
      <a class="hover:text-[#4b4849] text-[#393536] text-3xl font-bold">contacts</a>
    </div>
    <div class="pr-4 md:pr-8 lg:pr-96 pt-2">
      <a class="hover:text-[#625d5e] text-[#363233]" href="/">Home</a>
    </div>
    <div class="flex flex-wrap text-black items-center gap-1 bg-[#848484b3] px-2 py-1 rounded-lg pr-8 sm:px-4 sm:py-2">
    <div class="text-4xl">
        <FontAwesomeIcon icon={faUser} />
      </div>
    <div>
        <p>uwineza</p>
        <p>florence@gmail.com</p>
      </div>
      <div class="bg-[#242424] text-white px-2 py-1 rounded-lg hover:bg-[#7d7b7b]">
        <button><a href="">sign out</a></button>
      </div>
    </div>
    
        </div>
        <div className=" flex justify-around items-center mt-8 ">
            <form>
              <div className="mb-4">
                <label className='text-xl' > Full name</label><br></br>
                <input className="shadow appearance-none border  py-4 px-96 text-white leading-tight " id="name" type="text" placeholder="Enter your name" />
              </div>
              <div className="mb-4">
              <label className='text-xl'> Your Email</label><br></br>
                <input className="shadow appearance-none border  py-4 px-96 text-white leading-tight" id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="mb-4">
              <label className='text-xl'> Phone Number</label><br></br>
                <input className="shadow appearance-none border rounded  py-4 px-96 text-white leading-tight " id="phone" type="tel" placeholder="Enter your telephone number" />
              </div>
              
              <div className="flex items-center justify-around">
                <button className="bg-[#171415] text-white px-96 py-4 rounded-sm hover:bg-[#cdb2b6] text-xl"><a href='/' >Create</a> </button>
              </div>
            </form>
        </div>
      </div>
    );
  };
  
  

export default AddContact;





















































