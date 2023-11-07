
import axios from "axios";
const URLdesrrolloLocal = "http://localhost:3000/"

const URLdesrrollo = "https://girapi.bladimirchipana.repl.co/"

const net = "http://localhost:5251/prueba/listar"

export const postRiesgos = async (_id, nombre, impacto_desc, impacto_num, impacto_porc,
    probabilidad_desc, probabilidad_num, probabilidad_porc, calificacion, riesgo, proceso_asignado) => {
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
            proceso_asignado
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

export const BuscarMacroriesgo= async (_id, macroprocesoId , xset) => {
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

export const Opimpacto = [
    { "id": 1, "name": "Insignificante", "porc": "20" },
    { "id": 2, "name": "Menor", "porc": "40" },
    { "id": 3, "name": "Moderado", "porc": "60" },
    { "id": 4, "name": "Mayor", "porc": "80" },
    { "id": 5, "name": "Catastrofico", "porc": "100" }
]
export const Opprobabilidad= [
    { "id": 1, "name": "Improbable", "porc": "20" },
    { "id": 2, "name": "Posible", "porc": "40" },
    { "id": 3, "name": "Ocasional", "porc": "60" },
    { "id": 4, "name": "Probable", "porc": "80" },
    { "id": 5, "name": "Frecuente", "porc": "100" }
]
/*export const Opimpacto = [
    { "id": 1, "name": "Minima", "porc": "20" },
    { "id": 2, "name": "Menor", "porc": "40" },
    { "id": 3, "name": "Moderada", "porc": "60" },
    { "id": 4, "name": "Mayor", "porc": "80" },
    { "id": 5, "name": "Maxima", "porc": "100" }
]
export const Opprobabilidad= [
    { "id": 1, "name": "Muy Baja", "porc": "20" },
    { "id": 2, "name": "Baja", "porc": "40" },
    { "id": 3, "name": "Media", "porc": "60" },
    { "id": 4, "name": "Alta", "porc": "80" },
    { "id": 5, "name": "Muy Alta", "porc": "100" }
]*/

