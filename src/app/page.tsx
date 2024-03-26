'use client';
import Filter from '@/components/filter';
import { useState } from 'react';
import SchedulerComponent from '@/components/scheduler';
import AddRentModal from '@/components/add_rent_modal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <main className="w-4/5 px-2 sm:px-6 lg:px-8 ">
      <div className="flex-grow gap-x-20 flex h-[600px]">
        <Filter />
        <div className="flex-grow bg-gray-800">
          <div className="w-[1011px]">
            <div className='relative w-full h-[600px]'>
              <SchedulerComponent />
            </div>
            <button className="bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white font-bold py-2 px-4 rounded"
              onClick={toggleModal}>
                Добавить
            </button>
          </div>
          
        </div>
      </div>
      {isModalOpen && <AddRentModal onClose={toggleModal} />}
    </main>
  );
}
