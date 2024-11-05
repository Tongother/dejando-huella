"use client"
import { cookies } from "next/headers";
import FormLocalStorage from "../components/FormLocalStorage"
export default function Admin () {
    // const HandleCookie = await cookies()
    // const userCookie = HandleCookie.get('userToken');
    // const username = userCookie?.value
    return (
        <div>
            <FormLocalStorage title="CRUD">
            </FormLocalStorage>
        </div>
    )
}