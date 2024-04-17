import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { AddContact } from '../api/contact';
const Addscontact = () => {
 const navigate = useNavigate();
 const [message, setMessage] = useState({
    type: '',
    content: ''
 });
 const [contact, setContact] = useState({
  fullName:'',
  email:'',
  phone:'',
 });
  const handleSubmitContact =  (e) => {
    e.preventDefault();
    console.log(contact);
    AddContact(contact)
      .then((response) => {
        setMessage ({
          type: 'success',
          content: response
      })
        setContact({
          fullName:'',
          phone:'',
          email:'',
        });
        console.log('set contact')
        setTimeout(() => {
            navigate('/');
        }, 2000)
    })
    .catch(() => {
      alert('Error occured !')
    })
};
  const handleInput = (event) =>{
    setContact({...contact,[event.target.name]: event.target.value});
  };
  return (
    <>
    <div className='text-center flex  mt-10  justify-center'>
      <h2 className='font-bold text-2xl text-bold'> contact</h2>
    </div>
    <div className='flex items-center justify-center mt-10 mr-10'>
         <div className='max-w-md w-full px-6'>
    <form onSubmit={handleSubmitContact}>
    <div className='flex-col p-3 mb-3 mx-auto  '>
      <input className=' p-2 border-2 rounded-2xl' size={50} type="text" placeholder="Name" name='fullName' value={contact.fullName} onChange={handleInput} required />
      </div>
      <div className=' flex-col p-3 mb-3 mx-auto '>
      <input className='p-2 border-2 rounded-2xl' size={50}  type="email" placeholder="Email" name='email' value={contact.email} onChange={handleInput} required />
      </div>
      <div className=' flex-col p-3 mb-3 mx-auto'>
      <input className='p-2 border-2 rounded-2xl' size={50} type="text" placeholder="Phone" name='phone' value={contact.phone} onChange={handleInput}  required/>
      </div>
      <div className=' flex-col p-3 mx-auto'>
            <button type='submit' className="bg-black text p-3 cursor-pointer align-middle" onClick={handleSubmitContact} >Add contact</button>
            </div>
    </form>
    </div>
    </div>
    </>
  );
};
export default Addscontact;











