import React from 'react';
import imgProcess from '../../../assets/images-process/process.png';
import './ProcesoComponent.css';

const ProcesoComponent = ({ openModal}) => {
    return (
        <div className="container-process">
            <div className="column-process">
                <div className="content-column">
                    <div className='content-title'>
                        <h2>Optimiza tus procesos organizativos</h2>
                    </div>
                    <div className='content-subtitle'>
                        <h3>Encuentra áreas de trabajo y tareas recurrentes en tu organización para aumentar la eficiencia.</h3>
                    </div>
                    <div className='content-button'>
                        <button onClick={openModal}>Crear Proceso</button>
                    </div>
                </div>
            </div>
            <div className="image-container">
                <img src={imgProcess} alt="Proceso" />
            </div>
        </div>
    );
}

export default ProcesoComponent;
