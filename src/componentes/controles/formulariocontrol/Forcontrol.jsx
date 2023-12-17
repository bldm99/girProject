
import React, { useState, useEffect, useContext } from 'react';
import { NombreContext } from '../../../utils/Context';
import Imputx from '../../imputx/Imputx';
import * as Datariesgo from '../../../utils/Datariesgo'

export const Forcontrol = (props) => {

    const Opcomplejidad= Datariesgo.Opcomplejidad
    const Optipocont = Datariesgo.Optipocont

    const FormData = useContext(NombreContext)

    const { nombrecont, setNombrecont,
        complejidad, setComplejidad,
        tipoco, setTipoco,
        descripcioncont, setDescripcioncont
    } = FormData

    const {registroControl} = props




    const manejarCambio = (event) => {
        setComplejidad(event.target.value)
    }
    const manejarCambio2 = (event) => {
        setTipoco(event.target.value)
    }



    const registrarx = async (event) => {
        event.preventDefault()
        try {
            let valoresForm = {
                idusuario: "6531d08612ec096c58717b97",
                nombre: nombrecont,
                complejidad : complejidad,
                tipo: tipoco,
                descripcion: descripcioncont
            }
            registroControl(valoresForm)
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <form onSubmit={registrarx}  className='forriesgo'>
            <div className='text-titulo'>
                <Imputx
                    xlabel={"Nombre del control:"}
                    xoutline={"#e65100"}
                    valor={nombrecont}
                    xplaceholder={"Control de ..."}
                    obligatorio={true}
                    actualizarvalor={setNombrecont}
                    tipo={'input'}
                />
            </div>

            <div className='text-titulo'>
                <label htmlFor=""> <strong>Complejidad</strong></label>
                <div className="lista-opciones">
                    <select name="" id="" value={complejidad} onChange={manejarCambio} >
                        <option value="" disabled defaultValue="" hidden  >Selecionar Complejidad de 1 a 10</option>
                        {Opcomplejidad.map((x, index) =>
                            <option key={index} value={x.name} className='ry'  >
                                {x.name}
                            </option>
                        )}
                    </select>
                </div>
            </div>
            <div className='text-titulo'>
                <label htmlFor=""> <strong>Tipo</strong></label>
                <div className="lista-opciones">
                    <select name="" id="" value={tipoco} onChange={manejarCambio2} >
                        <option value="" disabled defaultValue="" hidden  >Selecionar tipo</option>
                        {Optipocont.map((x, index) =>
                            <option key={index} value={x.name} className='ry'  >
                                {x.name}
                            </option>
                        )}
                    </select>
                </div>
            </div>

            <Imputx
                xlabel={"Descripcion:"}
                xoutline={"#e65100"}
                valor={descripcioncont}
                xplaceholder={"Desc..."}
                obligatorio={true}
                actualizarvalor={setDescripcioncont}
                tipo={'textarea'}
            />


            <div>
                <button >Registrar</button>
            </div>

        </form>
  )
}
