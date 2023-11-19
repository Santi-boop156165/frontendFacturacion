import axios from 'axios'

export const guardarFactura = async (factura) => {
    try {
        let url = "http://localhost:8083/api/v1/factura";
        const response = await axios.post(url, factura);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const obtenerFacturas = async () => {
    try {
        let url = "http://localhost:8083/api/v1/facturas";
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}