
import axios from "axios";
const URLdesrrolloLocal = "http://localhost:3000/"

const URLdesrrollo = "https://girapi.bladimirchipana.repl.co/"

const net = "http://localhost:5251/prueba/listar"

export const postRiesgos = async (_id, nombre, impacto_desc, impacto_num, impacto_porc,
    probabilidad_desc, probabilidad_num, probabilidad_porc, calificacion, riesgo, proceso_asignado,
    r_causas , r_controles) => {
    try {
        await axios.post(`${URLdesrrollo}registroriesgo`, {
            _id,
            nombre,
            impacto_desc,
            impacto_num,
            impacto_porc,
            probabilidad_desc,
            probabilidad_num,
            probabilidad_porc,
            calificacion,
            riesgo,
            proceso_asignado,
            r_causas,
            r_controles 
        });

    } catch (error) {
        console.log(error)
    }
}

export const postCausas = async (_id, nombre, categoria, descripcion) => {
    try {
        await axios.post(`${URLdesrrollo}causas`, {
            _id,
            nombre,
            categoria,
            descripcion
        });
    } catch (error) {
        console.log(error)
    }
}

export const postControles = async (_id, nombre, complejidad, tipo, descripcion) => {
    try {
        await axios.post(`${URLdesrrollo}controles`, {
            _id,
            nombre,
            complejidad,
            tipo,
            descripcion
        });
    } catch (error) {
        console.log(error)
    }
}


////Bucar todos los riegos del usario que esta logueado
export const buscarRiesgos = async (_id, xset) => {
    try {
        const response = await axios.get(`${URLdesrrollo}registroriesgo`, {
            params: {
                _id
            }
        });
        xset(response.data)
        return response.data
    } catch (error) {
        console.log(error)
    }

}

export const postMacroproceso = async (_id, m_nombre, m_tipo, m_descripcion, m_riesgos) => {
    try {
        await axios.post(`${URLdesrrollo}registromacro`, {
            _id,
            m_nombre,
            m_tipo,
            m_descripcion,
            m_riesgos
        });

    } catch (error) {
        console.log(error)
    }
}

export const pushMacro = async (_idUsuario, _idMacroproceso, nuevosRiesgos) => {
    try {
        await axios.post(`${URLdesrrollo}pushmacro`, {
            _idUsuario,
            _idMacroproceso,
            nuevosRiesgos
        });

    } catch (error) {
        console.log(error)
    }
}

//Actualizar campo causas de Riesgo
export const pushRiesgocausa = async (_idUsuario, _idRiesgo, nuevasCausas) => {
    try {
        await axios.post(`${URLdesrrollo}pushriesgocausa`, {
            _idUsuario,
            _idRiesgo,
            nuevasCausas
        });

    } catch (error) {
        console.log(error)
    }
}

//Actualizar campo consecuencias de Riesgo


//Actualizar campo controles de Riesgo
export const pushRiesgocontrol = async (_idUsuario, _idRiesgo, nuevasControles) => {
    try {
        await axios.post(`${URLdesrrollo}pushriesgocontrol`, {
            _idUsuario,
            _idRiesgo,
            nuevasControles
        });

    } catch (error) {
        console.log(error)
    }
}


export const BuscarMacroprocesosx = async (_id, xset) => {
    try {
        const response = await axios.get(`${URLdesrrollo}registromacro`, {
            params: {
                _id
            }
        });
        xset(response.data)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const BuscarMacroriesgo = async (_id, macroprocesoId, xset) => {
    try {
        const response = await axios.get(`${URLdesrrollo}macroriesgo`, {
            params: {
                _id,
                macroprocesoId //this date is sililar in postman
            }
        });
        xset(response.data)
        return response.data
    } catch (error) {
        console.log(error)
    }
}


export const BuscarMacroprocesosnet = async (_id, xset) => {
    try {
        const response = await axios.get(`${net}`, {
            params: {
                _id
            }
        });
        xset(response.data)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const BuscarCausasx = async (_id, xset) => {
    try {
        const response = await axios.get(`${URLdesrrollo}causas`, {
            params: {
                _id
            }
        });
        xset(response.data)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const BuscarControlesx = async (_id, xset) => {
    try {
        const response = await axios.get(`${URLdesrrollo}controles`, {
            params: {
                _id
            }
        });
        xset(response.data)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const Opimpacto = [
    { "id": 1, "name": "Insignificante", "porc": "20" },
    { "id": 2, "name": "Menor", "porc": "40" },
    { "id": 3, "name": "Moderado", "porc": "60" },
    { "id": 4, "name": "Mayor", "porc": "80" },
    { "id": 5, "name": "Catastrofico", "porc": "100" }
]
export const Opprobabilidad = [
    { "id": 1, "name": "Improbable", "porc": "20" },
    { "id": 2, "name": "Posible", "porc": "40" },
    { "id": 3, "name": "Ocasional", "porc": "60" },
    { "id": 4, "name": "Probable", "porc": "80" },
    { "id": 5, "name": "Frecuente", "porc": "100" }
]
export const Optipo = [
    { "id": 1, "name": "Causa" },
    { "id": 2, "name": "Consecuencia" }
]

export const Opcategoriaca = [
    { "id": 1, "name": "Procesos" },
    { "id": 2, "name": "Infraestructura" },
    { "id": 3, "name": "Tecnologia" },
    { "id": 4, "name": "Factores externos" },
    { "id": 5, "name": "Recursos humanos" }
]

export const Opcomplejidad = [
    { "id": 1, "name": "1" },
    { "id": 2, "name": "2" },
    { "id": 3, "name": "3" },
    { "id": 4, "name": "4" },
    { "id": 5, "name": "5" },
    { "id": 6, "name": "6" },
    { "id": 7, "name": "7" },
    { "id": 8, "name": "8" },
    { "id": 6, "name": "9" },
    { "id": 10, "name": "10" }
]

export const Optipocont = [
    { "id": 1, "name": "Correctivo" },
    { "id": 2, "name": "Detectivo" },
    { "id": 3, "name": "Preventivo" },
    
]

