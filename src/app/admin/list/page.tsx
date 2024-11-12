'use client';
import Link from "next/link";
export default function list() {
    return (
        // <div className="w-full h-screen grid grid-cols-2 items-center justify-center p-20">
        //     <div className="h-[250px] w-[300px] bg-white rounded-md sombra">

        //     </div>
            
        // </div>

        <div className="w-screen h-screen p-5 flex flex-col justify-center items-center gap-3 rounded-2xl shadow-2xl">
            <Link href='/admin/list/perritos'>
                <button className="flex items-center justify-center w-auto h-auto bg-blue-600 p-2 text-white rounded-md font-itim">
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                    </svg>
                    Lista de Perritos
                </button>
            </Link>
            <Link href='/admin/list/gatitos'>
                <button className="flex items-center justify-center w-auto h-auto bg-blue-600 p-2 text-white rounded-md font-itim" onClick={() => { window.location.href = '/admin/list/gatitos' }}>
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                    </svg>
                    Lista de Gatitos
                </button>
            </Link>
        </div>
    )
}