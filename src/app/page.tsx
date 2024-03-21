'use client';
import Filter from '@/components/filter';
import { AddRentModal } from '@/components/add_rent_modal';
import { useState } from 'react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
  return (
    <main className="w-4/5 px-2 sm:px-6 lg:px-8">
      <div className="flex-grow gap-x-20 flex h-[500px]">
        <Filter />
        <div className="flex-grow bg-gray-800 p-4">
          <div className="w-[800px]">
            <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
              onClick={toggleModal}>
                Добавить
            </button>
          </div>
            {/* Контент для календаря */}
            {isModalOpen && <AddRentModal onClose={toggleModal} />}
          </div>
        </div>
    </main>
  );
}
