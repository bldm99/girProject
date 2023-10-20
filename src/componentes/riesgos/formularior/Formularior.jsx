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

const Formularior = (props) => {

    const {objrSetriesgos} = props

    const postRiesgos = Datariesgo.postRiesgos
    const buscarRiesgos = Datariesgo.buscarRiesgos
  

    const [nombre, setNombre] = useState("")
    const [impacto_desc, setImpacto_desc] = useState("")
    //const [impacto_num, setImpacto_num] = useState("")
    //const [impacto_porc, setImpacto_porc] = useState("")
    const [probabilidad_desc, setProbabilidad_desc] = useState("")
    //const [probabilidad_num, setProbabilidad_num] = useState("")
    //const [probabilidad_porc, setProbabilidad_porc] = useState("")




    const registrarx = async (event) => {

        let impacto_num = 0;
        let impacto_porc = ""
        let probabilidad_num = 0
        let probabilidad_porc = ""

        if (impacto_desc === "Minima") {
            impacto_num = 1;
            impacto_porc = "20%";
        } else if (impacto_desc === "Menor") {
            impacto_num = 2;
            impacto_porc = "40%";
        } else if (impacto_desc === "Moderada") {
            impacto_num = 4;
            impacto_porc = "60%";
        } else if (impacto_desc === "Mayor") {
            impacto_num = 8;
            impacto_porc = "80%";
        } else {
            impacto_num = 16;
            impacto_porc = "100%";
        }

        if (probabilidad_desc === "Muy Baja") {
            probabilidad_num = 1;
            probabilidad_porc = "20%"
        } else if (probabilidad_desc === "Baja") {
            probabilidad_num = 2;
            probabilidad_porc = "40%"
        } else if (probabilidad_desc === "Media") {
            probabilidad_num = 3;
            probabilidad_porc = "60%"
        } else if (probabilidad_desc === "Alta") {
            probabilidad_num = 4;
            probabilidad_porc = "80%"
        } else {
            probabilidad_num = 5;
            probabilidad_porc = "100%"
        }

        const calificacion = impacto_num * probabilidad_num  

        var riesgo = ""

        if([6, 11, 16, 17, 21, 22, 23].includes(calificacion)){
            riesgo = "Bajo"
        }else if ([1,2,7,12,13,18,24].includes(calificacion)) {
            riesgo = "Medio"
        } else if ([3,8,14,19,25].includes(calificacion)) {
            riesgo = "Alto"
        } else {
            riesgo = "Extremo"
        }


        event.preventDefault()
        try {
            await postRiesgos(
                "6531d08612ec096c58717b97",
                nombre,
                impacto_desc,
                impacto_num.toString(),
                impacto_porc,
                probabilidad_desc,
                probabilidad_num.toString(),
                probabilidad_porc,
                calificacion.toString(),
                riesgo,
                "En espera"

            )
            await buscarRiesgos("6531d08612ec096c58717b97", objrSetriesgos)
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

    console.log(impacto_desc)
    console.log(probabilidad_desc)



    return (

        <div className='formularior'>
            <ToastContainer />
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
                            <label htmlFor="">Posible Consecuencia de Riesgo</label>
                            <div className='opcion-riesgo'>
                                <ColorButton onClick={() => { setImpacto_desc("Minima") }} variant="contained" col="#e65100" hov="#76ff03">Minina</ColorButton>
                                <ColorButton onClick={() => { setImpacto_desc("Menor") }} variant="contained" col="#e65100" hov="#ffee33">Menor</ColorButton>
                                <ColorButton onClick={() => { setImpacto_desc("Moderada") }} variant="contained" col="#e65100" hov="#ffa733">Moderada</ColorButton>
                                <ColorButton onClick={() => { setImpacto_desc("Mayor") }} variant="contained" col="#e65100" hov="#ff3d00">Mayor</ColorButton>
                                <ColorButton onClick={() => { setImpacto_desc("Maxima") }} variant="contained" col="#e65100" hov="#ff3d00">Maxima</ColorButton>
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
                                        value="Muy Baja"
                                        control={<Radio />}
                                        label="Muy Baja"
                                        labelPlacement="start"
                                        onClick={() => { setProbabilidad_desc("Muy Baja") }}
                                    />
                                    <FormControlLabel
                                        value="Baja"
                                        control={<Radio />}
                                        label="Baja"
                                        labelPlacement="start"
                                        onClick={() => { setProbabilidad_desc("Baja") }}
                                    />
                                    <FormControlLabel
                                        value="Media"
                                        control={<Radio />}
                                        label="Media"
                                        labelPlacement="start"
                                        onClick={() => { setProbabilidad_desc("Media") }}
                                    />
                                    <FormControlLabel
                                        value="Alta"
                                        control={<Radio />}
                                        label="Alta"
                                        labelPlacement="start"
                                        onClick={() => { setProbabilidad_desc("Alta") }}
                                    />
                                    <FormControlLabel
                                        value="Muy Alta"
                                        control={<Radio />}
                                        label="Muy Alta"
                                        labelPlacement="start"
                                        onClick={() => { setProbabilidad_desc("Muy Alta") }}
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