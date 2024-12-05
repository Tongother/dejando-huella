import { FormInsertPets } from "@/components/admin/adopciones/FormInsert";


export default async function FormInsert({ params }: { params: { especie: string; } }) {
    const { especie } = params;
    return (
        <FormInsertPets especie={especie} />
    )
}

