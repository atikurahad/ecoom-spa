
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
     <div className='bg-black'>
    <div className='flex justify-between items-center h-24  max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Ecoom.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Category</li>
        <li className='p-4'>Products</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Know More</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Category</li>
          <li className='p-4 border-b border-gray-600'>Products</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
    </div>
  );
};

export default Navbar;











// import React from 'react';

// const Navbar = () => {
//   return (
//     <>
//     <div className='bg-black '>
//    <div className='mx-6 my-auto flex h-[3rem]'>
//      <h1 className='text-2xl text-blue-500 font-bold flex-1'>Ecoom.</h1>
//     <section>
//       <ul className='text-white  text-2xl flex flex-1'>
//         <li className='mx-2'>Home</li>
//         <li className='mx-2'>Products</li>
//         <li className='mx-2'>About</li>
//         <li className='mx-2'>Contact</li>
//       </ul>
//     </section>
//    </div>
//     </div>
//     </>

//   );
// };

// export default Navbar;
