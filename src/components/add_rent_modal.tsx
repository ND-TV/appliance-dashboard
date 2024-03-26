import React, { useState } from 'react';

interface AddRentModalProps {
  onClose: () => void;
}

export default function AddRentModal(props: AddRentModalProps) {
    const [equipmentFields, setEquipmentFields] = useState<string[]>(['']);

    const handleAddEquipment = () => {
        setEquipmentFields([...equipmentFields, '']);
    };

    const handleEquipmentChange = (index: number, value: string) => {
        const updatedFields = [...equipmentFields];
        updatedFields[index] = value;
        setEquipmentFields(updatedFields);
    };

    const equipmentOptions = [
        'Экскаватор',
        'Бульдозер',
        'Кран',
        'Самосвал',
        'Погрузчик',
      ];

    return (
    <div>
        <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
        <dialog className="fixed w-[380px] p-2 inset-0 z-50 overflow-auto rounded-lg bg-opacity-50 flex items-center justify-center">
            <form className="bg-white rounded-lg p-4 w-full">
                <div className="flex justify-between items-center pb-2">
                    <h2 className=" text-2xl font-bold flex-1">Новая запись</h2>
                    <button type="button"
                    className="block bg-gray-800 hover:bg-gray-700 text-white font-bold rounded"
                    onClick={props.onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className='border-y divide-solid border-slate-800 py-2'>
                    <div className='mb-2'>
                        <input className='w-1/2 focus:outline-none border-b-solid border-b-2 border-b-gray-800' placeholder="Дата от" type="date"/>
                        <input className='w-1/2 focus:outline-none border-b-solid border-b-2 border-b-gray-800' placeholder="Дата до" type="date" />
                    </div>
                    {equipmentFields.map((field, index) => (
                    <div className='py-1' key={index}>
                        <input
                        className='w-full border-b-solid border-b-2 border-b-gray-800'
                        placeholder="Оборудование"
                        type="text"
                        value={field}
                        onChange={(e) => handleEquipmentChange(index, e.target.value)}
                        list={`equipmentOptions${index}`}
                        />
                        <datalist id={`equipmentOptions${index}`}>
                        {equipmentOptions.map((option) => (
                            <option key={option} value={option} />
                        ))}
                        </datalist>
                    </div>
                    ))}
                    <div className='flex items-center justify-between'>
                        <p className=''>Дополнительное оборудование</p>
                        <button
                            type="button"
                            className=" right-auto block mt-2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-1 rounded-xl"
                            onClick={handleAddEquipment}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>

                        </button>
                    </div>
                </div>
                
                <div className='flex justify-between'>
                    <button
                        type="button"
                        className="block mt-4 border-solid border-slate-900 border-2 bg-white hover:bg-gray-300 active:bg-gray-400 text-black font-bold py-2 px-4 rounded"
                        onClick={props.onClose}>
                        Отменить
                    </button>
                    <button
                        type="button"
                        className="block mt-4  bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white font-bold py-2 px-4 rounded"
                        onClick={props.onClose}>
                        Сохранить
                    </button>
                </div>
            </form>
        </dialog>
    </div>
    
  );
}