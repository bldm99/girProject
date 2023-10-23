
import React from "react";
import { useState, useEffect } from "react";

import * as Da from '../utils/Datariesgo'


const Pruebas = () => {

    const buscarRiesgos = Da.buscarRiesgos
    const macro = Da.postMacroproceso

    const [datoriesgo, setDatoriesgo] = useState([])
    const [mriesgoarray, setMriesgoarray] = useState([])


    useEffect(() => {
        const obtenerdata = async () => {
            try {
                const x = await buscarRiesgos("6531d08612ec096c58717b97", setDatoriesgo)
                const primerosTresRiesgos = x.slice(0, 3);
                //setMriesgoarray(primerosTresRiesgos)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerdata()

    }, []);

    console.log(datoriesgo)
    console.log(mriesgoarray)

    const regis = async () => {
        try {
            await macro(
                "6530d9efa6497abacc5a450e",
                "ulti",
                "esdmksdmsmd",
                "testing",
                mriesgoarray

            )
            console.log("registro exitoso")

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <button onClick={regis} >Registrarmacroproceso</button>
        </div>
    );
}

export default Pruebas;