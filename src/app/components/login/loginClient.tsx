'use client';
import Image from 'next/image'
import { useState,useRef, FormEvent } from 'react';
import { loginServer } from './loginServer';
import { redirect } from 'next/dist/server/api-utils';

interface userDataType {
	username: string | null;
	password: string | null;
}

export default function Login() {
	const [userData, setUserData] = useState<userDataType>({username:null,password:null});
	const [alert, setAlert] = useState<null | String>(null);

	const input1 = useRef<HTMLInputElement | null>(null);
	const input2 = useRef<HTMLInputElement | null>(null);

	async function HandlerSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if(input1.current && input2.current){
			console.log(input1.current.value)
			console.log(input2.current.value)
		}
		loginServer(userData).then((response) => {
			if(response === 'success'){
				setAlert('success');
				setTimeout(() => {
					window.location.href = '/home';
				}, 3000);
			}else{
				setAlert('failed');
			}
		});
	}

	return (
		<div className=' my-5 px-10 pb-5 flex flex-col items-center justify-center rounded-lg shadow-md shadow-slate-400 lg:w-[850px] lg:h-[560px] lg:gap-3'>
			<h1 className='hidden lg:block text-[#F6A700] font-ini font-bold text-4xl -mt-5'>Bienvenido</h1>
			<div className='w-40 h-40 relative rounded-full lg:w-32 lg:h-32'>
				<Image src={"/logos/logo_morado_naranja.png"} alt="Perfil" fill sizes='128px'></Image>
			</div>
			<h1 className='text-sm font-ini font-semibold hidden lg:block'>Cada adopción es una nueva historia</h1>
			<h1 className='text-sm font-ini font-semibold'>¿Eres nuevo usuario? Regístrate</h1>
			<form className='flex flex-col gap-4 p-1 lg:items-center' onSubmit={HandlerSubmit}>
				<input ref={input1} type="text" placeholder='Correo' className='px-4 py-1 rounded-2xl font-ini font-semibold border-[1px] border-[#F6A700] focus:outline-none focus:ring-[2px] focus:ring-[#F6A700] lg:py-2 lg:px-5 lg:shadow-inner lg:min-w-[490px]'/>
				<input ref={input2}type="password" placeholder='Contraseña' className='px-4 py-1 rounded-2xl font-ini font-semibold border-[1px] border-[#F6A700] focus:outline-none focus:ring-[2px] focus:ring-[#F6A700] lg:py-2 lg:px-5 lg:shadow-inner lg:min-w-[490px]'/>
				<button className='bg-[#364090] text-white p-2 rounded-2xl font-ini text-sm font-semibold lg:w-[245px] lg:h-[40px] lg:rounded-xl' type='submit'>
					Iniciar Sesión
				</button>
				{alert==='failed' && (
					<div className='rounded-xl p-2 text-white bg-red-500'>Chupaste mano</div>
				)}
				{alert==='success' && (
					<div className='rounded-xl p-2 text-white bg-green-500'>Sí jaló manito</div>
				)}
			</form>
		</div>
	);
}