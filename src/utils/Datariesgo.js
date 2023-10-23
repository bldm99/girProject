
import axios from "axios";
const URLdesrrolloLocal = "http://localhost:3000/"

const URLdesrrollo = "https://girapi.bladimirchipana.repl.co/"

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
        await axios.post(`${URLdesrrolloLocal}registromacro`, {
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

