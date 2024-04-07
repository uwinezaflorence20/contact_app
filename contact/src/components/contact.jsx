import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEllipsis} from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <div>
    <div className="py-10 flex justify-around items-center text-black  gap-20 mt-4">
    <div className='text-2xl' > 
    welcome to your contact
    </div>
    <div  class="bg-[#242424] text-white px-4 py-4 rounded-lg hover:bg-[#d8d2d2] ml-20">
    <button><a href="/addcontact"> add new</a></button>
    </div>
    </div>
    <button>
   <a href='/Update'>
   <div className="py-4 flex justify-between text-black bg-[#848484b3] rounded-lg mx-60  mt-4">
    <div className="pl-8">
    <p>Munezero Magnifique</p>
    <p> 0788287986</p>
    </div>
     <div className="pr-8 ">
        <  FontAwesomeIcon icon={faEllipsis} className='pl-60'/>
        <p>munezeromagnifique@20gmail.com</p>
     </div>
    </div>
    </a>
    </button>
    <div className="py-4 flex justify-between text-black bg-[#848484b3] rounded-lg mx-60  mt-4">
    <div className="pl-8">
    <p>Munezero Magnifique</p>
    <p> 0788287986</p>
    </div>
     <div className="pr-8 ">
        <  FontAwesomeIcon icon={faEllipsis} className='pl-60'/>
        <p>munezeromagnifique@20gmail.com</p>
     </div>
    </div>
    <div className="py-4 flex justify-between text-black bg-[#848484b3] rounded-lg mx-60  mt-4">
    <div className="pl-8">
    <p>Ganza Iris Ghislaine</p>
    <p> 0788287986</p>
    </div>
     <div className="pr-8 ">
        <  FontAwesomeIcon icon={faEllipsis} className='pl-60'/>
        <p>ganzairi@20gmail.com</p>
     </div>
    </div>
  </div>
  )
}

export default Contact
