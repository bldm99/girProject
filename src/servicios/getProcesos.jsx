import axios from 'axios';

//const URLdesarrollo = "https://girapi.bladimirchipana.repl.co/";
//const URLdesarrollo = "https://490fb1df-9627-4ae2-9252-7a7ddbeb5470-00-3j4e9qkfg6jac.picard.replit.dev/"
const URLdesarrollo = "https://girapi-dev-prxd.4.us-1.fl0.io/"
//const   URLdesarrollo = "http://localhost:3000/"

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




