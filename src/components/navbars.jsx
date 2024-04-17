// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faUser} from "@fortawesome/free-solid-svg-icons";
// import Contact from "./contact";

// const Navbars = () => {
//   return (
//     <div>
//       <header class="bg-white">
//   <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
//     <div class="flex h-16 items-center justify-between">
//       <div class="md:flex md:items-center md:gap-12">
//         <a  href="#">
//          <p className="text-xl"> Contact</p>
//         </a>
//       </div>

//       <div class="hidden md:block">
//         <nav aria-label="Global">
//           <ul class="flex items-center gap-6 text-sm">
//             <li>
//               <a class="text-gray-500 transition hover:text-gray-500/75" href="#"> Home</a>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       <div class="flex items-center gap-4">
//         <div class="sm:flex sm:gap-4">
//         <div class="text-4xl">
//         <FontAwesomeIcon icon={faUser} />
//       </div>
//       <div>
//         <p>uwineza</p>
//         <p>florence@gmail.com</p>
//       </div>
//       <div class="bg-[#242424] text-white rounded-lg hover:bg-[#7d7b7b]">
//         <button><a href="/">sign out</a></button>
//       </div>
//         </div>
        

//         <div class="block md:hidden">
//           <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               class="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               stroke-width="2"
//             >
//               <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// </header>

//   <Contact/>
  
//   </div>
//   );
// };

// export default Navbars;



import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Contactcard from './Contactcard';
const Navbars = () => {
const [data, setData] = useState([]);
const[error, setError] = useState([]);
const [contacts, setContacts] = useState([]);
useEffect(() => {
    fetchContacts();
}, []);
const fetchContacts = () => {
    axios.get('https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/contact/list')
        .then((res) => {
            setContacts(res.data.contacts);
        })
        .catch((err) => {
            console.log(err);
            alert("Fetching contacts failed");
        });
};
  return (
        <div className=''>
      <div className=''>
        <div className='flex justify-center lg:gap-x-60 md:gap-x-32 mt-10  mb-10 items-center'>
         <p className='text-xl '>ContactList</p>
         <button className="bg-red-600 rounded-md text-white p-4"><a href="/Addscontact">Add new</a></button>
        </div>
     <div>
     </div>
      </div>
      <div className='grid rounded-lg lg:p-7 gap-2 md:mt-16 md:grid-cols-2 md:gap-10 lg:grid-cols-3'>
        {contacts && contacts.map((contact) => (
          <Contactcard key={contact._id} contact={contact}/>
        ))}
      </div>
    </div>
  );
};
export default Navbars;