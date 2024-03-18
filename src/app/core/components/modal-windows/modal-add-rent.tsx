interface ModalAddRentProps {
    onClose: () => void;
  };

export const ModalAddRent = ({ onClose }: ModalAddRentProps) => {
    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-8 max-w-md">
                <h2 className="text-xl font-bold mb-4">Модальное окно</h2>
                <p>Это модальное окно.</p>
                <button
                    className="mt-4 bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
                    onClick={onClose}
                >
                    Закрыть
                </button>
            </div>
        </div>
    );
};