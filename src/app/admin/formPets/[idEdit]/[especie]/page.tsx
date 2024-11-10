import FormPets from "@/components/formPets/FormPets";

export default function formPets({params} : {params: any}) {
    console.log("first: " + params.idEdit + " second: " + params.especie);
    const {idEdit, especie} = params;
    return (
        <FormPets idEdit={idEdit == 0 ? null : idEdit} especie={especie == 0 ? null : especie}/>
    )
}