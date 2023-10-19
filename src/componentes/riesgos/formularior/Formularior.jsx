import React, { useState, useEffect } from 'react';
import './formularior.css'

import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';

import Imputx from '../../imputx/Imputx';
//importando fuciones para para dar colr aun boton
import * as Botones from '../../../colors/Btncolor'
import * as Datariesgo from '../../../utils/Datariesgo'

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Formularior = () => {

    const postProductos = Datariesgo.postRiesgos

    const [nombre, setNombre] = useState("")
    const [impacto_desc, setImpacto_desc] = useState("")
    const [impacto_num, setImpacto_num] = useState("")
    const [impacto_porc, setImpacto_porc] = useState("")


    const registrarx = async (event) => {
        event.preventDefault()
        try {
          await postProductos( "6530d9efa6497abacc5a450e" ,nombre)
          toast.success('¡Nuevo producto registrado de manera exitosa!');
          console.log("Producto registrado")
        } catch (error) {
          console.log(error)
        }
      }
    

    const ColorButton = Botones.ColorButton
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, []);

    const [nombreriesgo, setNombreriesgo] = useState("")



    return (

        <div className='formularior'>
            <ToastContainer/>
            <div className='box-for-cont'>
                <div className='for-title'>
                    Generar nuevo riesgo
                </div>
                <div className='box-for'>
                    <div className='riesgo-descripcion'>
                        <h2>Riesgo</h2>
                        <p>
                            Posibilidad
                            de que ocurra un evento o situación que
                            pueda causar daño, pérdida o impacto
                            negativo en una organización
                            o un proyecto.
                        </p>

                    </div>

                    <div className='riesgo-datos'>
                        <div className='text-titulo'>
                            <Imputx
                                xlabel={"Nombre del riesgo:"}
                                xoutline={"#e65100"}
                                valor={nombre}
                                xplaceholder={"Riesgo de ..."}
                                required
                                actualizarvalor={setNombre}
                                tipo={'input'}
                            />

                        </div>

                        <div className='text-titulo'>
                            <label htmlFor="">Posible impacto de Riesgo</label>
                            <div className='opcion-riesgo'>
                                <ColorButton variant="contained" col="#e65100" hov="#76ff03">R. Bajo</ColorButton>
                                <ColorButton variant="contained" col="#e65100" hov="#ffee33">R. Medio</ColorButton>
                                <ColorButton variant="contained" col="#e65100" hov="#ffa733">R Alto</ColorButton>
                                <ColorButton variant="contained" col="#e65100" hov="#ff3d00">R Total</ColorButton>
                            </div>
                        </div>

                        <div className='text-titulo'>

                            <label htmlFor="">Posible impacto de Riesgo</label>
                            <FormControl>

                                <RadioGroup
                                    row
                                    aria-labelledby="demo-form-control-label-placement"
                                    name="position"
                                    defaultValue="top"
                                >

                                    <FormControlLabel
                                        value="Improbable"
                                        control={<Radio />}
                                        label="Improbable"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        value="Posible"
                                        control={<Radio />}
                                        label="Posible"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        value="Ocasional"
                                        control={<Radio />}
                                        label="Ocasional"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        value="Probable"
                                        control={<Radio />}
                                        label="Probable"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        value="Frecuente"
                                        control={<Radio />}
                                        label="Frecuente"
                                        labelPlacement="start"
                                    />



                                </RadioGroup>
                            </FormControl>
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


                    </div>

                </div>

                <div className='for-save'>
                    <div className='for-botones'>
                        <button onClick={registrarx} >Registar</button>
                        <button >Cancelar</button>
                    </div>
                </div>

            </div>

        </div>

    );
}
export default Formularior;