
import React from 'react'
import { Link } from 'react-router-dom'
import { FetchContactById } from '../api/contact'
const Contactcard = ({ contact }) =>{
  return (
    <Link
  className='border-2 border-black bg-black text-white  p-3 mr-7 ml-5'>
  <div className='sm:flex '>
    <div className=''>
      <h3 className='text-lg'>
        {contact.fullName}
      </h3>
      <p className='mt-1'>{contact.email}</p>
    </div>
  </div>
  <div className=' w-40 mt-2'>
    <Link to={`/ContactList/${contact._id}`} className='text-white bg-red-600'> More details </Link>
  </div>
</Link>
  )
}
export default Contactcard