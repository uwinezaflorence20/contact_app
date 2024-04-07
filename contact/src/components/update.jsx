import React from 'react'

const Update = () => {
  return (
    <div className="flex flex-row justify-around">
    <div>
    <p className='font-bold text-2xl'>Munezero Magnifique</p>
    <p> 0788287986</p>
    <p>munezeromagnifique@20gmail.com</p>
      </div>
      <div className='flex flex-row space-between gap-4'>
      <div class="bg-[#242424] text-white px-1 py-2 rounded-lg hover:bg-[#7d7b7b]">
        <button><a href="">update</a></button>
      </div>
      <div class="bg-[#ef4343] text-white  px-1 py-1 rounded-lg hover:bg-[#7d7b7b]">
        <button><a href="">Delete</a></button>
      </div>
      </div>
    </div>
  )
}

export default Update
