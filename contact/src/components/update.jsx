import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const Update = () => {
  return (
  
      <div>
      <div class=" bg-gray-400 py-3 w-full flex flex-wrap justify-center items-center gap-20 ">
    <div class="flex flex-col mb-2 md:mb-0">
      <a class="hover:text-[#4b4849] text-[#393536] text-3xl font-bold">contacts</a>
    </div>
    <div class="pr-4 md:pr-8 lg:pr-96 pt-2">
      <a class="hover:text-[#625d5e] text-[#363233]" href="#Home">Home</a>
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
    <div className="flex flex-col items-center justify-center mt-12 gap-4 sm:flex-row sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24">
      <div>
        <p className='font-bold text-2xl'>Munezero Magnifique</p>
        <p>Phone: 0788287986</p>
        <p>Email: munezeromagnifique@20gmail.com</p>
        <p>Created on: Sat 17 Feb 2000</p>
        <p>Updated on: Sat 8 March 2024</p>
      </div>
      <div className='flex gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24'>
        <div className="bg-[#242424] text-white rounded-lg hover:bg-[#7d7b7b]">
          <button className='p-4'><a href='/Anotheracount'>Update</a></button>
        </div>
        <div className="bg-[#ef4343] text-white rounded-lg hover:bg-[#7d7b7b]">
          <button className='p-4'><a href='/'>Delete</a></button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Update
