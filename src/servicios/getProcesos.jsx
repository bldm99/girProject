import axios from 'axios';

//const URLdesarrollo = "https://girapi.bladimirchipana.repl.co/";
const   URLdesarrollo = "http://localhost:3000/"

export const getProcesos = async (idUsuario) => {
    try {
        const response = await axios.get(`${URLdesarrollo}registromacro?_id=${idUsuario}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getRiesgos = async (idUsuario) => {
    try {
        const response = await axios.get(`${URLdesarrollo}registroriesgo?_id=${idUsuario}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const postMacroproceso = async (data) => {
    try {
        await axios.post(`${URLdesarrollo}registromacro`, data)
    } catch (error) {
        console.log(error)
    }
}




