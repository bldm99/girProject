
import React, { useState, createContext } from "react";

export const NombreContext = createContext()
export const MapaContext = createContext()


export const CounterProvider = ({ children }) => {
    //Para formulario de riesgos
    const [nombre, setNombre] = useState("")
    const [impacto_desc, setImpacto_desc] = useState("")
    const [probabilidad_desc, setProbabilidad_desc] = useState("")
    const [macroSeleccionados, setMacroSeleccionados] = useState([]);

    //Para formulario de causas
    const [nombreca, setNombreca] = useState("")
    const [tipoca, setTipoca] = useState("")
    const [categoriaca, setCategoriaca] = useState("")
    const [descripcionca, setDescripcionca] = useState("");
    const [riesgoSeleccionados, setRiesgoSeleccionados] = useState([]);
    const [causaSeleccionados, setCausaSeleccionados] = useState([]);


    //Para formulario de controles
    const [nombrecont, setNombrecont] = useState("")
    const [complejidad, setComplejidad] = useState("")
    const [tipoco, setTipoco] = useState("")
    const [descripcioncont, setDescripcioncont] = useState("");
    const [controlSeleccionados, setControlSeleccionados] = useState([]);
    


    const values = {
        nombre,
        setNombre,
        impacto_desc,
        setImpacto_desc,
        probabilidad_desc,
        setProbabilidad_desc,

        nombreca,
        setNombreca,
        tipoca,
        setTipoca,
        categoriaca,
        setCategoriaca,
        descripcionca,
        setDescripcionca,

        nombrecont, 
        setNombrecont,
        complejidad,
        setComplejidad,
        tipoco,
        setTipoco,
        descripcioncont,
        setDescripcioncont,

        borrarData() {
            setNombre("")
            setImpacto_desc("")
            setProbabilidad_desc("")
            setMacroSeleccionados("")

            setCausaSeleccionados("")
            setControlSeleccionados("")

        },
        borrarDatacausa() {
            setNombreca("")
            setTipoca("")
            setCategoriaca("")
            setDescripcionca("")
            setRiesgoSeleccionados("")
        },

        borrarDatacontrol() {
            setNombrecont("")
            setComplejidad("")
            setTipoco("")
            setDescripcioncont("")
            setRiesgoSeleccionados("")
        },

        macroSeleccionados,
        setMacroSeleccionados,
        riesgoSeleccionados,
        setRiesgoSeleccionados,
        causaSeleccionados,
        setCausaSeleccionados,
        controlSeleccionados,
        setControlSeleccionados
    }


    return (
        <NombreContext.Provider value={values}>
            {children}
        </NombreContext.Provider>
    )

}

export const MapaProvider = ({ children }) => {
    const [datoscuadrante , setDatoscuadrante] = useState([])
    const [xcantidad , setXcantidad] = useState([])
    const values = {
        datoscuadrante,
        setDatoscuadrante,
        xcantidad,
        setXcantidad
    }

    return (
        <MapaContext.Provider value={values}>
            {children}
        </MapaContext.Provider>
    )

}
