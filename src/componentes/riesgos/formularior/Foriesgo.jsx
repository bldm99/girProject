import React, { useState, useEffect, useContext } from 'react';
import './foriesgo.css'

import { NombreContext } from '../../../utils/Context';

import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import Imputx from '../../imputx/Imputx';
import * as Botones from '../../../colors/Btncolor'

import * as Datariesgo from '../../../utils/Datariesgo'


const Foriesgo = (props) => {

    const Opimpacto = Datariesgo.Opimpacto
    const Opprobabilidad = Datariesgo.Opprobabilidad

    const FormData = useContext(NombreContext)

    const { impacto_desc, setImpacto_desc, probabilidad_desc, setProbabilidad_desc, causaSeleccionados, controlSeleccionados } = FormData
    const { registroRiesgo } = props



    const manejarCambio = (event) => {
        setImpacto_desc(event.target.value)
    }
    const manejarCambio2 = (event) => {
        setProbabilidad_desc(event.target.value)
    }



    const registrarx = async (event) => {
        event.preventDefault()
        let impacto_num = 0;
        let impacto_porc = ""
        let probabilidad_num = 0
        let probabilidad_porc = ""

        if (impacto_desc === "Insignificante") {
            impacto_num = 1;
            impacto_porc = "20%";
        } else if (impacto_desc === "Menor") {
            impacto_num = 2;
            impacto_porc = "40%";
        } else if (impacto_desc === "Moderado") {
            impacto_num = 4;
            impacto_porc = "60%";
        } else if (impacto_desc === "Mayor") {
            impacto_num = 8;
            impacto_porc = "80%";
        } else {
            impacto_num = 16;
            impacto_porc = "100%";
        }

        if (probabilidad_desc === "Improbable") {
            probabilidad_num = 1;
            probabilidad_porc = "20%"
        } else if (probabilidad_desc === "Posible") {
            probabilidad_num = 2;
            probabilidad_porc = "40%"
        } else if (probabilidad_desc === "Ocasional") {
            probabilidad_num = 3;
            probabilidad_porc = "60%"
        } else if (probabilidad_desc === "Probable") {
            probabilidad_num = 4;
            probabilidad_porc = "80%"
        } else {
            probabilidad_num = 5;
            probabilidad_porc = "100%"
        }

        const calificacion = impacto_num * probabilidad_num

        var riesgo = ""

        //Require modificacion
        if ([1, 2, 3, 4].includes(calificacion)) {
            riesgo = "Bajo"
        } else if ([5, 6, 8, 10, 12].includes(calificacion)) {
            riesgo = "Medio"
        } else if ([16, 20, 24].includes(calificacion)) {
            riesgo = "Alto"
        } else {
            riesgo = "Extremo"
        }

        //const causasSinId = causaSeleccionados.map(({ _id, ...resto }) => resto);
        //const controlesSinId = controlSeleccionados.map(({ _id, ...resto }) => resto);
        const causasSinId = Array.isArray(causaSeleccionados) ? causaSeleccionados.map(({ _id, ...resto }) => resto) : [];
        const controlesSinId = Array.isArray(controlSeleccionados) ? controlSeleccionados.map(({ _id, ...resto }) => resto) : [];


        try {
            let valoresForm = {
                idusuario: "6531d08612ec096c58717b97",
                nombre: FormData.nombre,
                impacto_desc: impacto_desc,
                impacto_num: impacto_num.toString(),
                impacto_porc,
                probabilidad_desc: probabilidad_desc,
                probabilidad_num: probabilidad_num.toString(),
                probabilidad_porc,
                calificacion: calificacion.toString(),
                riesgo,
                proceso_asignado: "En espera",
                r_causas: causasSinId,
                r_controles: controlesSinId
            }
            registroRiesgo(valoresForm)


        } catch (error) {
            console.log(error)
        }


    }



    const ColorButton = Botones.ColorButton

    const [nombreriesgo, setNombreriesgo] = useState("")





    return (
        <form onSubmit={registrarx} className='forriesgo'>
            <div className='text-titulo'>
                {impacto_desc}{probabilidad_desc}
                <Imputx
                    xlabel={"Nombre del riesgo:"}
                    xoutline={"#e65100"}
                    valor={FormData.nombre}
                    xplaceholder={"Riesgo de ..."}
                    obligatorio={true}
                    actualizarvalor={FormData.setNombre}
                    tipo={'input'}
                />

            </div>

            <div className='text-titulo'>
                <label> <strong>Impacto de riesgo</strong></label>
                <div className="lista-opciones">
                    <select name="" id="" value={impacto_desc} onChange={manejarCambio} >
                        <option value="" disabled defaultValue="" hidden  >Selecionar Consecuencia</option>
                        {Opimpacto.map((x, index) =>
                            <option key={index} value={x.name} className='ry'  >
                                {x.name}
                            </option>
                        )}
                    </select>
                </div>

            </div>

            <div className='text-titulo'>
                <label > <strong>Cafilicar frecuencia de riesgo</strong></label>
                <div className="lista-opciones">
                    <select name="" id="" value={probabilidad_desc} onChange={manejarCambio2} >
                        <option value="" disabled defaultValue="" hidden  >Selecionar Probabilidad</option>
                        {Opprobabilidad.map((x, index) =>
                            <option key={index} value={x.name} className='ry'  >
                                {x.name}
                            </option>
                        )}
                    </select>
                </div>

                <Imputx
                    xlabel={"Descripcion o notas riesgo:"}
                    xoutline={"#e65100"}
                    valor={nombreriesgo}
                    xplaceholder={"Riesgo de ..."}
                    obligatorio={true}
                    actualizarvalor={setNombreriesgo}
                    tipo={'textarea'}
                />
            </div>

            <div>
                <button >Registrar</button>
            </div>


        </form>
    );
}

export default Foriesgo;

/*
<ColorButton onClick={() => { setImpacto_desc("Minima") }} variant="contained" col="#e65100" hov="#76ff03">Minina</ColorButton>
                    <ColorButton onClick={() => { setImpacto_desc("Menor") }} variant="contained" col="#e65100" hov="#ffee33">Menor</ColorButton>
                    <ColorButton onClick={() => { setImpacto_desc("Moderada") }} variant="contained" col="#e65100" hov="#ffa733">Moderada</ColorButton>
                    <ColorButton onClick={() => { setImpacto_desc("Mayor") }} variant="contained" col="#e65100" hov="#ff3d00">Mayor</ColorButton>
                    <ColorButton onClick={() => { setImpacto_desc("Maxima") }} variant="contained" col="#e65100" hov="#ff3d00">Maxima</ColorButton>
*/