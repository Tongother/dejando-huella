import Lista from "@/components/admin/Lista";
export default async function list() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/perros`, {
        cache: "no-store",
    });
    const mascotas = await res.json();
    return (
        <Lista pets={mascotas}/>
    )
}