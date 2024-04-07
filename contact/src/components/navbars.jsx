import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";


const Navbars = () => {
  return (
    <div class="py-5 w-full flex flex-wrap justify-center bg-slate-200 items-center gap-20 lg:flex-row md:flex-row sm:flex-row">
    <div class="flex flex-col mb-2 md:mb-0">
      <a class="hover:text-[#fb153b] text-[#393536] text-3xl font-bold">contacts</a>
    </div>
    <div class="pr-4 md:pr-8 lg:pr-96 pt-2"> {/* Adjust padding as needed */}
      <a class="hover:text-[#fb153b] text-[#363233]" href="#Home">Home</a>
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
        <button>sign out</button>
      </div>
    </div>
  </div>
  

  
  );
};

export default Navbars;
