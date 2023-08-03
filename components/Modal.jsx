import React from 'react';

const Modal = ({ isOpen, closeModal, title, description }) => {
    const modalClasses = isOpen
        ? ' opacity-100 pointer-events-auto'
        : 'opacity-0 pointer-events-none';

    return (
        <div className={`${modalClasses} transition duration-500 fixed inset-0 flex items-center justify-center z-50 px-4 `}>
            <div className={`modal-bg fixed inset-0 bg-black/50 backdrop-blur-lg`} />
            <div className={`bg-gray-100 dark:bg-trueGray-800 w-full max-w-xl p-6 rounded-lg transform transition-transform ease-in-out duration-500 ${isOpen ? "scale-100" : "scale-75"}`}>
                <div className='mb-4 flex justify-center'>
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    <button
                        onClick={closeModal}
                        className="ml-auto text-red-500 text-2xl font-bold rounded"
                    >
                        X
                    </button>

                </div>
                <p className="text-gray-700 dark:text-gray-400 py-2.5 h-[350px] overflow-y-scroll overscroll-contain">{description}
                </p>
            </div>
        </div>
    );
};

export default Modal;
