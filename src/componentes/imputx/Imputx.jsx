
import React, { useState, useEffect } from 'react';
import './imputx.css'

const Imputx = (props) => {

    const {xlabel , valor , xplaceholder, actualizarvalor,xoutline , obligatorio , tipo} = props

    const manejarCambio = (event) => {
        actualizarvalor(event.target.value)
    }

    //tipo es el nombre de la etiqueta perzonalizada
    const Customtag = tipo

    const mystyle = {
        outlineColor: xoutline,
    }
    return ( 
        <div className= {`imputx imputx-${tipo} `  }>

            <label>{xlabel}</label>

            <Customtag   style={mystyle}
                value={valor}
                placeholder={xplaceholder}
                required={obligatorio}
                onChange={manejarCambio}
                type={'tipo'}
                
                
            />

        </div>
     );
}
 
export default Imputx;