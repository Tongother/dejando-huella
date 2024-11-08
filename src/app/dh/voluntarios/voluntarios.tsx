import React from "react";

const Formulario = () => {
    return (
        <div className="flex flex-col items-center justify-center my-6 px-6 pb-5 mx-auto rounded-lg shadow-md shadow-slate-400 lg:w-[850px] lg:h-auto lg:gap-3">
            <form className="flex flex-col lg:grid lg:grid-cols-2 gap-5 w-full max-w-[850px]" >
                <div className="form-group flex flex-col">
                    <label className="text-black text-sm mb-1">Nombre Completo</label>
                    <input type="text" className="px-4 py-2 rounded-2xl font-semibold border-[1px] border-[#F6A700] focus:outline-none focus:ring-[2px] focus:ring-[#F6A700] lg:shadow-inner p-20" />
                </div>
                <div className="form-group flex flex-col">
                    <label className="text-black text-sm mb-1">Colonia donde vives</label>
                    <input type="text" className="px-4 py-2 rounded-2xl font-semibold border-[1px] border-[#F6A700] focus:outline-none focus:ring-[2px] focus:ring-[#F6A700] lg:shadow-inner" />
                </div>
                <div className="form-group flex flex-col">
                    <label className="text-black text-sm mb-1">Fecha de cumpleaños</label>
                    <input type="date" className="px-4 py-2 rounded-2xl font-semibold border-[1px] border-[#F6A700] focus:outline-none focus:ring-[2px] focus:ring-[#F6A700] lg:shadow-inner" />
                </div>
                <div className="form-group flex flex-col">
                    <label className="text-black text-sm mb-1">Lugar de residencia</label>
                    <input type="text" className="px-4 py-2 rounded-2xl font-semibold border-[1px] border-[#F6A700] focus:outline-none focus:ring-[2px] focus:ring-[#F6A700] lg:shadow-inner" />
                </div>
                <div className="form-group flex flex-col">
                    <label className="text-black text-sm mb-1">Edad</label>
                    <input type="number" className="px-4 py-2 rounded-2xl font-semibold border-[1px] border-[#F6A700] focus:outline-none focus:ring-[2px] focus:ring-[#F6A700] lg:shadow-inner" />
                </div>
                <div className="form-group flex flex-col">
                    <label className="text-black text-sm mb-1">Cuenta de Instagram (url)</label>
                    <input type="url" placeholder="(url)" className="px-4 py-2 rounded-2xl font-semibold border-[1px] border-[#F6A700] focus:outline-none focus:ring-[2px] focus:ring-[#F6A700] lg:shadow-inner" />
                </div>
                <div className="form-group flex flex-col">
                    <label className="text-black text-sm mb-1">Teléfono Celular</label>
                    <input type="tel" className="px-4 py-2 rounded-2xl font-semibold border-[1px] border-[#F6A700] focus:outline-none focus:ring-[2px] focus:ring-[#F6A700] lg:shadow-inner" />
                </div>
                <div className="form-group flex flex-col">
                    <label className="text-black text-sm mb-1">Cuenta de Facebook (url)</label>
                    <input type="url" placeholder="Cuenta de Facebook (url)" className="px-4 py-2 rounded-2xl font-semibold border-[1px] border-[#F6A700] focus:outline-none focus:ring-[2px] focus:ring-[#F6A700] lg:shadow-inner" />
                </div>
                <div className="form-group flex flex-col col-span-2">
                    <label className="text-black text-sm mb-1">Elige el área de tu preferencia</label>
                    <select id="opciones" name="opciones" className="px-4 py-2 rounded-2xl font-semibold border-[1px] border-[#F6A700] focus:outline-none focus:ring-[2px] focus:ring-[#F6A700] lg:shadow-inner">
                        <option value="opcion1">Cuidado de perros</option>
                        <option value="opcion2">Limpiar baños</option>
                        <option value="opcion3">Sacar a pasear</option>
                    </select>
                </div>
                <button type="submit" className="col-span-2 p-4 bg-[#364090] text-white rounded-2xl hover:bg-blue-700 transition-all w-full lg:w-auto mx-auto lg:mx-0 lg:rounded-xl">
                    Registrar
                </button>
            </form>
        </div>
    );
}

export default Formulario;


