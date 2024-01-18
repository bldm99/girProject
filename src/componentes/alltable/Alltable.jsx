import React, { useState } from 'react';
import './alltable.css'

const Alltable = (props) => {

    const { cabezeraTable, valores, propiedadesobj, funcionalidad, idvalor, rgetColor } = props
    //Usos de props
    //cabezeraTable  son los valores de la cabezera de la tabla
    //valores son array de objetos o tnm un json etc
    //propiedadesobj son las prpiedades que puedan tener los objetos
    //idvalor es us Set de useState  sirve para identificar cada fila por sus id ,

    


    return (
        <div className='alltable' style={{ maxHeight: '340px', overflowY: 'auto', borderRadius: '10px' }}>
            <table className="table-riesgos" >
                <thead className="table-riesgos-header">
                    <tr>
                        {cabezeraTable.map((desc, index) => (
                            <th key={index}>{desc.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {valores.map((item, index) => (
                        <tr key={item._id} onClick={() => { funcionalidad && funcionalidad(); idvalor(item) }} >

                            {propiedadesobj.map((x, propIndex) => (
                                <td key={propIndex}
                                    //Si x.propiedad es igual riesgo entonces en mombre de la clase sera td-unico
                                    className={x.propiedad === 'riesgo' ? 'td-unico' : ''}
                                    
                                >
                                 
                                    <span style={x.propiedad === 'riesgo' && rgetColor ? { backgroundColor: rgetColor(item.riesgo) } : null}>
                                        {/* 
                                            El item[x.propiedad] puede ser representado como:
                                            item.id
                                            item.nombre
                                            item.descripcion 
                                            etc
                                        
                                        */}
                                        {item[x.propiedad]}
                                    </span>

                                </td>
                            ))}

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Alltable;
