import axios from "axios";

interface userDataType {
	username: string | null,
	password: string | null
}

export const loginServer = async (user:userDataType) => {
    const autentication = await axios.post(`api/auth`, user);
    return autentication.data;
}