import React, { useState, useEffect, useContext } from 'react';
import './updateriesgo.css'


import Imputx from '../imputx/Imputx';
import * as Datariesgo from './../../utils/Datariesgo'
import { color } from '@mui/system';
import { NombreContext } from '../../utils/Context';

const Updateriesgo = (props) => {

    const FormData = useContext(NombreContext)

    const { unicoriesgo , funActualizarRiesgo } = props

    const Opimpacto = Datariesgo.Opimpacto
    const Opprobabilidad = Datariesgo.Opprobabilidad

    //esto solo temporal de prueba
    const [desriesgo, setDesriesgo] = useState("")

    

    useEffect(() => {
        FormData.setNombre(unicoriesgo.nombre)
        FormData.setImpacto_desc(unicoriesgo.impacto_desc)
        FormData.setProbabilidad_desc(unicoriesgo.probabilidad_desc)

    }, []);

    const manejarCambio = (event) => {
        FormData.setImpacto_desc(event.target.value)
    }
    const manejarCambio2 = (event) => {
        FormData.setProbabilidad_desc(event.target.value)
    }


    const registrarx = async (event) => {
        event.preventDefault()
        let impacto_num = 0;
        let impacto_porc = ""
        let probabilidad_num = 0
        let probabilidad_porc = ""

        if (FormData.impacto_desc === "Insignificante") {
            impacto_num = 1;
            impacto_porc = "20%";
        } else if (FormData.impacto_desc === "Menor") {
            impacto_num = 2;
            impacto_porc = "40%";
        } else if (FormData.impacto_desc === "Moderado") {
            impacto_num = 4;
            impacto_porc = "60%";
        } else if (FormData.impacto_desc === "Mayor") {
            impacto_num = 8;
            impacto_porc = "80%";
        } else {
            impacto_num = 16;
            impacto_porc = "100%";
        }

        if (FormData.probabilidad_desc === "Improbable") {
            probabilidad_num = 1;
            probabilidad_porc = "20%"
        } else if (FormData.probabilidad_desc === "Posible") {
            probabilidad_num = 2;
            probabilidad_porc = "40%"
        } else if (FormData.probabilidad_desc === "Ocasional") {
            probabilidad_num = 3;
            probabilidad_porc = "60%"
        } else if (FormData.probabilidad_desc === "Probable") {
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


        //const causasSinId = Array.isArray(causaSeleccionados) ? causaSeleccionados.map(({ _id, ...resto }) => resto) : [];
        //const controlesSinId = Array.isArray(controlSeleccionados) ? controlSeleccionados.map(({ _id, ...resto }) => resto) : [];


        try {
            let valoresForm = {
                idriesgo: unicoriesgo._id,
                nombre: FormData.nombre,
                impacto_desc: FormData.impacto_desc,
                impacto_num: impacto_num.toString(),
                impacto_porc,
                probabilidad_desc: FormData.probabilidad_desc,
                probabilidad_num: probabilidad_num.toString(),
                probabilidad_porc,
                calificacion: calificacion.toString(),
                riesgo
                /*proceso_asignado: "En espera",
                r_causas: causasSinId,
                r_controles: controlesSinId*/
            }
            funActualizarRiesgo(valoresForm)


        } catch (error) {
            console.log(error)
        }


    }



    return (
        <form onSubmit={registrarx} className='updateriesgo'>
            <div className='text-titulo'>

                <Imputx
                    xlabel={"Nombre del riesgo:"}
                    xoutline={"#e65100"}
                    valor={FormData.nombre}
                    xplaceholder={"Riesgo de ..."}
                    obligatorio={true}
                    actualizarvalor={FormData.setNombre}
                    tipo={'input'}
                />
                <div className='text-titulo'>
                    <label> <strong style={{ color: '#666666' }}>Impacto de riesgo</strong></label>
                    <div className="lista-opciones">
                        <select name="" id="" value={FormData.impacto_desc} onChange={manejarCambio} >

                            <option value="" disabled defaultValue="" hidden  ></option>
                            {Opimpacto.map((x, index) =>
                                <option key={index} value={x.name} className='ry'  >
                                    {x.name}
                                </option>
                            )}
                        </select>
                    </div>
                </div>
                

                <div className='text-titulo'>
                    <label> <strong style={{ color: '#666666' }}>Cafilicar frecuencia de riesgo</strong></label>
                    <div className="lista-opciones">
                        <select name="" id="" value={FormData.probabilidad_desc} onChange={manejarCambio2} >
                            <option value="" disabled defaultValue="" hidden  >Selecionar Probabilidad</option>
                            {Opprobabilidad.map((x, index) =>
                                <option key={index} value={x.name} className='ry'  >
                                    {x.name}
                                </option>
                            )}
                        </select>
                    </div>

                </div>
                <Imputx
                    xlabel={"Descripcion o notas riesgo:"}
                    xoutline={"#e65100"}
                    valor={desriesgo}
                    xplaceholder={"Riesgo de ..."}
                    obligatorio={true}
                    actualizarvalor={setDesriesgo}
                    tipo={'textarea'}
                />
            </div>

            <div>
                <button >Actualizar</button>
            </div>


        </form>
    );
}

export default Updateriesgo;
