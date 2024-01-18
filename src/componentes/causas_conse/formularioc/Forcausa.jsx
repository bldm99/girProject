import React, { useState, useEffect, useContext } from 'react';
import './forcausa.css'

import { NombreContext } from '../../../utils/Context';
import Imputx from '../../imputx/Imputx';
import * as Datariesgo from '../../../utils/Datariesgo'


const Forcausa = (props) => {

    const Optipo = Datariesgo.Optipo
    const Opcategoriaca = Datariesgo.Opcategoriaca


    const FormData = useContext(NombreContext)

    const { nombreca, setNombreca,
        tipoca, setTipoca,
        categoriaca, setCategoriaca,
        descripcionca, setDescripcionca
    } = FormData

    const { registroCausa} = props

    


    const manejarCambio = (event) => {
        setTipoca(event.target.value)
    }
    const manejarCambio2 = (event) => {
        setCategoriaca(event.target.value)
    }



    const registrarx = async (event) => {
        event.preventDefault()
        try {
            let valoresForm = {
                idusuario: "6531d08612ec096c58717b97",
                nombre: nombreca,
                categoria: categoriaca,
                descripcion: descripcionca
            }
            registroCausa(valoresForm)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <form onSubmit={registrarx} className='forriesgo'>
            <div className='text-titulo'>
                <Imputx
                    xlabel={"Nombre de la causa:"}
                    xoutline={"#e65100"}
                    valor={nombreca}
                    xplaceholder={"Causa de ..."}
                    obligatorio={true}
                    actualizarvalor={setNombreca}
                    tipo={'input'}
                />
            </div>

            <div className='text-titulo'>
                <label> <strong>Tipo</strong></label>
                <div className="lista-opciones">
                    <select name="" id="" value={tipoca} onChange={manejarCambio} >
                        <option value="" disabled defaultValue="" hidden  >Selecionar Causa o Consecuencia</option>
                        {Optipo.map((x, index) =>
                            <option key={index} value={x.name} className='ry'  >
                                {x.name}
                            </option>
                        )}
                    </select>
                </div>
            </div>
            <div className='text-titulo'>
                <label> <strong>Categoria</strong></label>
                <div className="lista-opciones">
                    <select name="" id="" value={categoriaca} onChange={manejarCambio2} >
                        <option value="" disabled defaultValue="" hidden  >Selecionar Categoria</option>
                        {Opcategoriaca.map((x, index) =>
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
                valor={descripcionca}
                xplaceholder={"Desc..."}
                obligatorio={true}
                actualizarvalor={setDescripcionca}
                tipo={'textarea'}
            />


            <div>
                <button >Registrar</button>
            </div>

        </form>
    );
}

export default Forcausa;

