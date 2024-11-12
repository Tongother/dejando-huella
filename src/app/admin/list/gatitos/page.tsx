import Lista from "@/components/admin/Lista";
export default async function list() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/gatos`, {
        cache: "no-store",
    });
    const mascotas = await res.json();
    return (
        <div className="w-screen h-screen p-5 flex flex-col justify-center items-center gap-3 rounded-2xl shadow-2xl">
            <Lista pets={mascotas} especie={"gatos"} />
        </div>
    )
}