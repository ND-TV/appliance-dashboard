import React from 'react'

interface InfoModalProps {
    onClose: () => void;
    objectInfo: {
        id: any;
        type?: string;
        startDate?: any;
        endDate?: any;
        subtitle?: any;
        description?: any;
    };
  }

export default function InfoModal(props: InfoModalProps) {
  return (
    <div>
        <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
        <dialog className="fixed w-[380px] p-2 inset-0 z-50 overflow-auto rounded-lg bg-opacity-50 flex items-center justify-center">
            <form className="bg-white rounded-lg p-4 w-full">
                <div className="flex justify-between items-center pb-2">
                    <h2 className=" text-2xl font-bold flex-1">Информация</h2>
                </div>
                <div className='py-2'>
                    <div className='mb-2'>
                        {/* Проверяем наличие полей и выводим их, если они есть */}
                        {props.objectInfo.type && <p>{props.objectInfo.type}</p>}
                        {props.objectInfo.startDate && <p>Начало: {props.objectInfo.startDate.toLocaleDateString()}</p>}
                        {props.objectInfo.endDate && <p>Окончание: {props.objectInfo.endDate.toLocaleDateString()}</p>}
                        {props.objectInfo.subtitle && <p>{props.objectInfo.subtitle}</p>}
                        {props.objectInfo.description && <p>Описание: {props.objectInfo.description}</p>}
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
