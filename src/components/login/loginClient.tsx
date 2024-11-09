'use client';
import Image from 'next/image'
import { useState, FormEvent } from 'react';
import { loginServer } from './loginServer';

interface userDataType {
	username: string | null;
	password: string | null;
}

export default function Login() {
	const [userData, setUserData] = useState<userDataType>({username:null,password:null});
	const [alert, setAlert] = useState<null | String>(null);

	//TODO: Inicializar el estado de userData con los valores del input de usuario y contraseña que pueden estar autorrellenados.
	function HandlerOnChange(event: React.ChangeEvent<HTMLInputElement>) {
		const value = event.target.value;
		setUserData({
			...userData,
			[event.target.name.toLowerCase()]: value
		});
	}

	async function HandlerSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		loginServer(userData).then((response) => {
			if(response === 200){
				setAlert('success');
				setTimeout(() => {
					window.location.href = '/admin';
				}, 2000);
			}else{
				setAlert('failed');
				setTimeout(() => {
					setAlert(null);
				}, 2000);
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
			<form className='flex flex-col gap-4 p-1 lg:items-center' onSubmit={HandlerSubmit}>
				<input onChange={HandlerOnChange} required type="text" name='username' placeholder='Correo' className='px-4 py-1 rounded-2xl font-ini font-semibold border-[1px] border-[#F6A700] focus:outline-none focus:ring-[2px] focus:ring-[#F6A700] lg:py-2 lg:px-5 lg:shadow-inner lg:min-w-[490px]'/>
				<input onChange={HandlerOnChange} required type="password" name='password' placeholder='Contraseña' className='px-4 py-1 rounded-2xl font-ini font-semibold border-[1px] border-[#F6A700] focus:outline-none focus:ring-[2px] focus:ring-[#F6A700] lg:py-2 lg:px-5 lg:shadow-inner lg:min-w-[490px]'/>
				<button className='bg-[#364090] text-white p-2 rounded-2xl font-ini text-sm font-semibold lg:w-[245px] lg:h-[40px] lg:rounded-xl' type='submit'>
					Iniciar Sesión
				</button>
				{alert==='failed' && (
					<div className='rounded-xl p-2 text-white bg-red-500'>Nombre de usuario o contraseña incorrectos.</div>
				)}
				{alert==='success' && (
					<div className='rounded-xl p-2 text-white bg-green-500'>Sí jaló manito</div>
				)}
			</form>
		</div>
	);
}