import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEllipsis} from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <div>

<div class="bg-gray-100 p-8">
<div className="py-10 flex justify-around items-center px-56 text-black  gap-20 mt-4">
    <div className='text-2xl' > 
    welcome to your contact
    </div>
    <div  class="bg-[#242424] text-white px-4 py-4 rounded-lg hover:bg-[#d8d2d2] ml-20">
    <button><a href="/addcontact"> add new</a></button>
    </div>
    </div>
        <div class="space-y-4 py-5 w-full px-56 items-center justify-center">
            <div class="bg-white p-4 rounded-md shadow">
                <a href='/Update'>
                <div class="flex justify-between items-center">
                    <div>
                        <h2 class="text-xl font-semibold">Uwimeza florence</h2>
                        <p class="text-gray-500">0791348662</p>
                    </div>
                    <button class=" text-black py-2 px-4 rounded "> < FontAwesomeIcon icon={faEllipsis} className='pl-60'/>
        <p>uwineza@20gmail.com</p></button>
                </div></a>
            </div>
            <div class="bg-white p-4 rounded-md shadow">
            <a href='/Update'>
                <div class="flex justify-between items-center">
                    <div>
                        <h2 class="text-xl font-semibold">munezeromagnifique</h2>
                        <p class="text-gray-500">0791348662</p>
                    </div>
                    <button class=" text-black py-2 px-4 rounded "> <FontAwesomeIcon icon={faEllipsis} className='pl-60'/>
        <p>munezeromagnifique@20gmail.com</p></button>
                </div>
                </a>
            </div>
            <div class="bg-white p-4 rounded-md shadow">
            <a href='/Update'>
                <div class="flex justify-between items-center">
                    <div>
                        <h2 class="text-xl font-semibold">ganza iris</h2>
                        <p class="text-gray-500">07904570120</p>
                    </div>
                    <button class=" text-black py-2 px-4 rounded "> <  FontAwesomeIcon icon={faEllipsis} className='pl-60'/>
        <p>ganzairs@gmail.com</p></button>
                </div>
                </a>
            </div>
            <div class="bg-white p-4 rounded-md shadow">
            <a href='/Update'>
                <div class="flex justify-between items-center">
                    <div>
                        <h2 class="text-xl font-semibold">pacifique nyirishema</h2>
                        <p class="text-gray-500">0788570120</p>
                    </div>
                    <button class=" text-black py-2 px-4 rounded "> <  FontAwesomeIcon icon={faEllipsis} className='pl-60'/>
        <p>mcpac@20gmail.com</p></button>
                </div>
                </a>
            </div>
        </div>
    </div>
   
  </div>
  )
}

export default Contact
