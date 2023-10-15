import React, { useState } from 'react';
import './preceso.css'
import Modal from './Modal';

const Proceso = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }
    return (
        <div className="container">
            <div className="colum">
                <div className="conten-column1">
                    <div className='content-title'>
                        <h2>Optimiza tus procesos organizativos</h2>
                    </div>
                    <div className='content-subtitle'>
                        <h3>Encuentra áreas de trabajo y tareas recurrentes en tu organización para aumentar la eficiencia.</h3>
                    </div>
                    <div className='content-btn'>
                        <button onClick={openModal}>Crear Proceso</button>
                    </div>
                </div>

            </div>
            <div className="colum">
                <div className='content-column2'>
                    <h3>Process....</h3>
                </div>
            </div>
            {/*Modal */}
            <Modal isOpen={modalOpen} onClose={closeModal} />
        </div>
    );
};

export default Proceso;
