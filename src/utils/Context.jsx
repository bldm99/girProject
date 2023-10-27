
import React, { useState, createContext } from "react";

export const NombreContext = createContext()


export const CounterProvider = ({ children }) => {

    const [nombre, setNombre] = useState("")
    const [impacto_desc, setImpacto_desc] = useState("")
    const [probabilidad_desc, setProbabilidad_desc] = useState("")
    const [macroSeleccionados, setMacroSeleccionados] = useState([]);
    const values = {
        nombre,
        setNombre,
        impacto_desc,
        setImpacto_desc,
        probabilidad_desc,
        setProbabilidad_desc,

        borrarData() {
            setNombre("")
            setImpacto_desc("")
            setProbabilidad_desc("")
            setMacroSeleccionados("")
        },

        macroSeleccionados,
        setMacroSeleccionados
    }


    return (
        <NombreContext.Provider value={values}>
            {children}
        </NombreContext.Provider>
    )

}
