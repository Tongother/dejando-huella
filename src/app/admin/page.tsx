import FormPets from "../../components/formPets/FormPets";

export default async function Admin() {
    // const HandleCookie = await cookies()
    // const userCookie = HandleCookie.get('userToken');
    // const username = userCookie?.value

    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/perros`, {
    //     cache: "no-store",
    // });
    // const mascotas = await res.json();

    return (
        <div className="flex flex-col items-center justify-center flex-auto min-w-screen min-h-screen p-10 gap-10">
            {/* <Lista pets={mascotas}/> */}
            <FormPets idEdit={null} especie={null}/>
        </div>
    )
}
