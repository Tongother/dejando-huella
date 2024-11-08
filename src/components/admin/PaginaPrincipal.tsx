import FormLocalStorage from "../FormLocalStorage";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Lista from "@/components/admin/Lista";

export default function PaginaPrincipal ({mascotas}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    // const HandleCookie = await cookies()
    // const userCookie = HandleCookie.get('userToken');
    // const username = userCookie?.value

    return (
        <div className="flex flex-col items-center flex-auto min-w-screen min-h-screen">
            <Lista pets={mascotas}></Lista>
            <FormLocalStorage idEdit={1}/>
        </div>
    )
}

export const getServerSideProps = (async () => {
    const response = await fetch('http://localhost:3000/api/mascotas');
    const data = await response.json();
    const mascotas = data;

    return { 
        props: mascotas 
    }
}) satisfies GetServerSideProps<{ repo: any }>