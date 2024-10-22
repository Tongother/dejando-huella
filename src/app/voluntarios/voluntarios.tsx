import React from "react";

const Formulario = () => {
    return (
        <form className="md:grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 flex-row">
            <div className="form-group flex flex-col mb-4">
                <label className="text-black text-sm mb-1">Nombre Completo</label>
                <input type="text" className="p-2 border border-gray-300 rounded-lg bg-white text-black placeholder-gray-500 shadow-[0_4px_2px_-2px_rgba(0,0,0,0.5)] focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="form-group flex flex-col mb-4">
                <label className="text-black text-sm mb-1">Colonia donde vives</label>
                <input type="text"  className="p-2 border border-gray-300 rounded-lg bg-white text-black placeholder-gray-500 shadow-[0_4px_2px_-2px_rgba(0,0,0,0.5)] focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="form-group flex flex-col mb-4">
                <label className="text-black text-sm mb-1">Fecha de cumpleaños</label>
                <input type="date" className="p-2 border border-gray-300 rounded-lg bg-white text-black placeholder-gray-500 shadow-[0_4px_2px_-2px_rgba(0,0,0,0.5)] focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="form-group flex flex-col mb-4">
                <label className="text-black text-sm mb-1">Lugar de residencia</label>
                <input type="text"  className="p-2 border border-gray-300 rounded-lg bg-white text-black placeholder-gray-500 shadow-[0_4px_2px_-2px_rgba(0,0,0,0.5)] focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="form-group flex flex-col mb-4">
                <label className="text-black text-sm mb-1">Edad</label>
                <input type="number"  className="p-2 border border-gray-300 rounded-lg bg-white text-black placeholder-gray-500 shadow-[0_4px_2px_-2px_rgba(0,0,0,0.5)] focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="form-group flex flex-col mb-4">
                <label className="text-black text-sm mb-1">Cuenta de Instagram (url)</label>
                <input type="url" placeholder="(url)" className="p-2 border border-gray-300 rounded-lg bg-white text-black placeholder-gray-500 shadow-[0_4px_2px_-2px_rgba(0,0,0,0.5)] focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="form-group flex flex-col mb-4">
                <label className="text-black text-sm mb-1">Teléfono Celular</label>
                <input type="tel" className="p-2 border border-gray-300 rounded-lg bg-white text-black placeholder-gray-500 shadow-[0_4px_2px_-2px_rgba(0,0,0,0.5)] focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="form-group flex flex-col mb-4">
                <label className="text-black text-sm mb-1">Cuenta de Facebook (url)</label>
                <input type="url" placeholder="Cuenta de Facebook (url)" className="p-2 border border-gray-300 rounded-lg bg-white text-black placeholder-gray-500 shadow-[0_4px_2px_-2px_rgba(0,0,0,0.5)] focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="form-group flex flex-col col-span-2 mb-4">
                <label className="text-black text-sm mb-1 text-center">Elige el área de tu preferencia</label>
                <select id="opciones" name="opciones" className="p-2 border border-gray-300 rounded-lg bg-white text-black placeholder-gray-500 shadow-[0_4px_2px_-2px_rgba(0,0,0,0.5)] focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="opcion1">Cuidado de perros</option>
                    <option value="opcion2">Limpiar baños</option>
                    <option value="opcion3">Sacar a pasear</option>
                </select>
            </div>
            <button type="submit" className="col-span-2 p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all z-10 mx-auto w-full md:w-auto">
            Registrar
            </button>

        </form>
    );
}

export default Formulario;

