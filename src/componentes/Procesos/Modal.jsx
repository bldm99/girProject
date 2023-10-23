import React from 'react';
import './modal.css'

const Modal = ({ isOpen, onClose }) => {
    return (
        isOpen && (
            <div className="modal-overlay">
                <div className="modal">
                    <div className='modal-title'>
                        <h2>Crear Proceso</h2>
                    </div>
                    <div className="model-form">
                        <div className='modal-description'>
                            <h2>Información</h2>
                            <p>Escribe la información general de este proceso.</p>
                        </div>
                        <form className="modal-form">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" id="nombre" placeholder='Escribe el nombre' />
                            <label htmlFor="tipo">Tipo</label>
                            <select name="tipo" id="tipo" defaultValue="" >
                                <option hidden value="">Seleccionar</option>
                                <option value="0">Misional</option>
                                <option value="1">Estrategico</option>
                                <option value="2">De apoyo</option>
                            </select>
                            <label htmlFor="categoria">Categoría</label>
                            <select name="categoria" id="categoria" defaultValue="">
                                <option hidden value="">Seleccionar</option>
                                <option value="0">Macroproceso</option>
                            </select>
                            <label htmlFor="descripcion">Descripción</label>
                            <textarea id="descripcion" rows="4" maxLength="4000" placeholder="Escribe una corta descripción de no más de 4.000 caracteres." disabled={false}></textarea>
                            <div className="file-upload">
                                <label htmlFor="archivo">Adjuntar evidencia</label>
                                <input type="file" id="archivo"/>
                            </div>
                            <div className='button-container'>
                                <button type="submit" className='save-button'>Guardar</button>
                                <button onClick={onClose} className="close-button">Cerrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    );
};

export default Modal;
