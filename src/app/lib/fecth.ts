import axios from "axios"

// interface userDataType {
//     username: string | null,    
//     password: string | null
// }

export const getElements = async (slug:string) => {
    const data = await axios.get(`api/${slug}`);
    return data.data;
}