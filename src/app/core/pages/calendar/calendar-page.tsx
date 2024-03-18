'use client';
import { useState } from "react";
import Filter from "../../components/filter";
import { ModalAddRent } from "../../components/modal-windows/modal-add-rent";


export default function CalendarPage(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };


    return(
        <div className="flex-grow flex px-4 sm:px-6 lg:px-8">
        <Filter />
            <div className="flex-grow ml-[72px] bg-gray-800 p-4">
                <div className="w-4/5">
                    <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
                    onClick={toggleModal}>
                        Добавить
                    </button>
                </div>
                {/* Контент для календаря */}
                {isModalOpen && <ModalAddRent onClose={toggleModal} />}
            </div>
        </div>
    );   
}