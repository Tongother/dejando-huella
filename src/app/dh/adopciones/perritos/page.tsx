import BannerAdopciones from "@/components/adopciones/banner_adopciones";
import HogarTemporal from "@/components/adopciones/hogar_temporal";
import MascotasDisponibles from "@/components/adopciones/mascotas_disponibles";

export default function Perritos() {
    // Lista de mascotas
    const mascotas = [
        {
            imagen: "/perritos/Neon.png",
            nombre: "Nerón",
            edad: "6 años",
            sexo: "Macho",
            personalidad: "Tranquilo",
            tamaño: "Grande",
        },
        {
            imagen: "/perritos/Luz.png",
            nombre: "Luz",
            edad: "5 años",
            sexo: "Hembra",
            personalidad: "Juguetona",
            tamaño: "Mediano",
        },
        {
            imagen: "/perritos/Mar.png",
            nombre: "Mar",
            edad: "3 años",
            sexo: "Hembra",
            personalidad: "Amorosa",
            tamaño: "Mediano",
        },
        {
            imagen: "/perritos/Gerry.png",
            nombre: "Gerry",
            edad: "8 años",
            sexo: "Macho",
            personalidad: "Protector",
            tamaño: "Mediano",
        },
        {
            imagen: "/perritos/Gerry.png",
            nombre: "Gerry",
            edad: "8 años",
            sexo: "Macho",
            personalidad: "Protector",
            tamaño: "Mediano",
        },
        {
            imagen: "/perritos/Gerry.png",
            nombre: "Gerry",
            edad: "8 años",
            sexo: "Macho",
            personalidad: "Protector",
            tamaño: "Mediano",
        },
        {
            imagen: "/perritos/Gerry.png",
            nombre: "Gerry",
            edad: "8 años",
            sexo: "Macho",
            personalidad: "Protector",
            tamaño: "Mediano",
        },
        {
            imagen: "/perritos/Gerry.png",
            nombre: "Gerry",
            edad: "8 años",
            sexo: "Macho",
            personalidad: "Protector",
            tamaño: "Mediano",
        },
        {
            imagen: "/perritos/Gerry.png",
            nombre: "Gerry",
            edad: "8 años",
            sexo: "Macho",
            personalidad: "Protector",
            tamaño: "Mediano",
        },
        {
            imagen: "/perritos/Gerry.png",
            nombre: "Gerry",
            edad: "8 años",
            sexo: "Macho",
            personalidad: "Protector",
            tamaño: "Mediano",
        },
        {
            imagen: "/perritos/Gerry.png",
            nombre: "Gerry",
            edad: "8 años",
            sexo: "Macho",
            personalidad: "Protector",
            tamaño: "Mediano",
        },
        {
            imagen: "/perritos/Gerry.png",
            nombre: "Gerry",
            edad: "8 años",
            sexo: "Macho",
            personalidad: "Protector",
            tamaño: "Mediano",
        },
        {
            imagen: "/perritos/Gerry.png",
            nombre: "Gerry",
            edad: "8 años",
            sexo: "Macho",
            personalidad: "Protector",
            tamaño: "Mediano",
        },
        {
            imagen: "/perritos/Gerry.png",
            nombre: "Gerry",
            edad: "8 años",
            sexo: "Macho",
            personalidad: "Protector",
            tamaño: "Mediano",
        },
        {
            imagen: "/perritos/Gerry.png",
            nombre: "Gerry",
            edad: "8 años",
            sexo: "Macho",
            personalidad: "Protector",
            tamaño: "Mediano",
        },
    ];

    return (
        <>
            <BannerAdopciones tipo="Perritos"/>
            <MascotasDisponibles mascotas={mascotas} />
            <HogarTemporal />
        </>
    );
}