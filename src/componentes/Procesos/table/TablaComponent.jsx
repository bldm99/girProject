import React from 'react';
import './TablaComponent.css'; 

const TablaComponent = ({data, openModal}) => {
    return (
        <div className="process-container">
            <div className="process-header">
                <div className="process-header-left">
                    <h1 className="process-title">Procesos</h1>
                    <p className="process-description">Visualiza todos los procesos de tu organización</p>
                </div>
                <button className="process-create-button" onClick={openModal}>Crear Proceso</button>
            </div>
            <div className="process-navigation">
                <h2>Macroprocesos</h2>
            </div>
            <div className="process-table-container">
                <table className="process-table">
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Nombre del proceso</th>
                            <th>Tipo</th>
                            <th>Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((proceso, index) => (
                            <tr key={index}>
                                <td>{proceso._id_user}</td>
                                <td>{proceso.m_nombre}</td>
                                <td>{proceso.m_tipo}</td>
                                <td>{proceso.m_descripcion}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TablaComponent;
