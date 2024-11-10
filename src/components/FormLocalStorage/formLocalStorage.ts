import axios from "axios";

interface petDataType{
    idEdit: number | undefined,
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
        const {idEdit,especie,nombre,edad,sexo,personalidad,tamano,adoptado} = pet;
        let res
        if(!idEdit){
            res = await axios.post(`api/insert`, pet); 
        }else{
            res = await axios.post(`api/insert`, pet);
        }
        const status = res.data.status;
        return status;
        } catch (error:any) {
        console.log("Error: ",error);
        return error.response.data.status;
    }
}