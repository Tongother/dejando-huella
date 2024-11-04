import axios from "axios";

interface userDataType {
	username: string | null,
	password: string | null
}
export const loginServer = async (user:userDataType) => {
    const response = await axios.post(`api/login`, user);
    const status = response.data.status;
    return status;
}