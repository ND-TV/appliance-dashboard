import React from 'react';
import NavigationLinks from '@/ui/NavigationLinks';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex">
                    <div className="bg-blue-900 w-48 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xl">ND-TV</span>
                    </div>
                    <div className="items-center ml-[200px] sm:flex sm:space-x-8">
                        <NavigationLinks />
                    </div>
                </div>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;