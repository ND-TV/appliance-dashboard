import React from 'react';
import NavigationLinks from '@/components/navigation_links';

const Navbar = () => {
  return (
    <nav className="bg-black w-4/5 h-14 px-2 flex flex-grow gap-x-[216px] sm:px-6 lg:px-8 ">
        <div className="bg-blue-700 w-48 flex items-center justify-center">
            <span className="text-white font-bold text-3xl">ND-TV</span>
        </div>
       <div className="flex gap-x-4 basis-3/4">
            <NavigationLinks />
       </div>
    </nav>
  );
};

export default Navbar;