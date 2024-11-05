import axios from "axios";

interface petDataType {
	especie: string | null,
    nombre: string | null,
    edad: string | null,
    sexo: string | null,
    personalidad: string | null,
    size: string | null,
    adoptado: boolean,
}
export const loginServer = async (pet:petDataType) => {
    try {
        const response = await axios.post(`api/crud`, pet);
        const status = response.data.status;
        return status;
    } catch (error:any) {
        console.log("Error: ",error);
        return error.response.data.status;
    }
}