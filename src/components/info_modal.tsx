import React from 'react'

interface InfoModalProps {
    onClose: () => void;
    objectInfo: {
        id: any;
        type?: string;
        startDate?: any;
        endDate?: any;
    };
  }

export default function InfoModal(props: InfoModalProps) {
  return (
    <div>
        <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
        <dialog className="fixed w-[380px] p-2 inset-0 z-50 overflow-auto rounded-lg bg-opacity-50 flex items-center justify-center">
            <form className="bg-white rounded-lg p-4 w-full">
                <div className="flex justify-between items-center pb-2">
                    <h2 className=" text-2xl font-bold flex-1">Информация:</h2>
                    <button type="button"
                    className="block bg-gray-800 hover:bg-gray-700 text-white font-bold rounded"
                    onClick={props.onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className='border-y-2 divide-solid border-slate-800 py-2'>
                    <div className='mb-2'>
                        <h3 className="text-lg font-semibold">{props.objectInfo.id}</h3>
                        <p>{props.objectInfo.type}</p>
                        {/* Проверяем наличие дополнительных полей и выводим их, если они есть */}
                        {props.objectInfo.startDate && <p>Начало: {props.objectInfo.startDate.toLocaleDateString()}</p>}
                        {props.objectInfo.endDate && <p>Окончание: {props.objectInfo.endDate.toLocaleDateString()}</p>}
                    </div>
                </div>
                
                <div className='flex justify-between'>
                    <button
                        type="button"
                        className="block mt-4 border-solid border-slate-900 border-2 bg-white hover:bg-gray-300 active:bg-gray-400 text-black font-bold py-2 px-4 rounded"
                        onClick={props.onClose}>
                        Закрыть
                    </button>
                </div>
            </form>
        </dialog>
    </div>
  )
}
