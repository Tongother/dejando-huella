import axios from "axios";

interface petDataType{
    especie: number | undefined,
    nombre: string | undefined,
    edad: number | undefined,
    sexo: number,
    personalidad: number,
    tamano: number,
    adoptado: boolean,
}
export const postPerros =async (pet:petDataType) => {
    try {
        const response = await axios.post(`api/crud`, pet);
        const status = response.data.status;
        return status;
        } catch (error:any) {
        console.log("Error: ",error);
        return error.response.data.status;
    }
}