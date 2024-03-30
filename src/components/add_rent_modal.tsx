import React, { useState } from 'react';

interface AddRentModalProps {
  onClose: () => void;
}

export default function AddRentModal(props: AddRentModalProps) {
    const [equipmentFields, setEquipmentFields] = useState<string[]>(['']);
    
    const handleAddEquipment = () => {
        if (equipmentFields.length < 12) {
            console.log(equipmentFields)
            setEquipmentFields([...equipmentFields, '']);
        }
    };

    const handleEquipmentChange = (index: number, value: string) => {
        const updatedFields = [...equipmentFields];
        updatedFields[index] = value;
        setEquipmentFields(updatedFields);
    };

    const handleEquipmentRemove = (index: number) => {
        const updatedFields = [...equipmentFields];
        updatedFields.splice(index, 1);
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
                </div>
                <div className='py-2'>
                    <div className='mb-2'>
                        <input className='w-1/2 focus:outline-none border-b-solid border-b-2 border-b-gray-800' placeholder="Дата от" type="date"/>
                        <input className='w-1/2 focus:outline-none border-b-solid border-b-2 border-b-gray-800' placeholder="Дата до" type="date" />
                    </div>
                    <div className='py-1'>
                        {equipmentFields.map((field, index) => (
                            <div className='py-1' key={index}>
                                <div className='flex'>
                                    <input
                                        className='w-full focus:outline-none border-b-solid border-b-2 border-b-gray-800'
                                        placeholder={index === 0 ? 'Оборудование' : 'Дополнительное оборудование'}
                                        type="text"
                                        value={field}
                                        onChange={(e) => handleEquipmentChange(index, e.target.value)}
                                        list={`equipmentOptions${index}`}
                                    />
                                    {index !== 0 && (
                                        <button
                                            type="button"
                                            className='ml-2 py-1 px-1 rounded-xl'
                                            onClick={() => handleEquipmentRemove(index)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" text-red-500 w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                                <datalist id={`equipmentOptions${index}`}>
                                    {equipmentOptions.map((option) => (
                                        <option key={option} value={option} />
                                    ))}
                                </datalist>
                            </div>
                        ))}
                    </div>
                    <div className='flex items-center justify-between'>
                        {equipmentFields.length < 12 && (<p className=''>Дополнительное оборудование</p>)}
                        {equipmentFields.length < 12 && (
                            <button
                                type="button"
                                className=" right-auto block mt-2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-1 rounded-xl"
                                onClick={handleAddEquipment}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </button>)}   
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