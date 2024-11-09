import axios from "axios";

interface userDataType {
	username: string | null,
	password: string | null
}
export const loginServer = async (user:userDataType) => {
    try {
        const response = await axios.post(`../api/login`, user);
        const status = response.data.status;
        return status;
    } catch (error:any) {
        console.log("Error: ",error);
        return error.response.data.status;
    }
}