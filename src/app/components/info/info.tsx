import Image from "next/image";
import "./info.css"
import La_chona from "../../../../public/perritos/La_chona.png";
import gerry from "../../../../public/perritos/gerry.png";
const Info = ()=>{
	return <section className="bg-white">
		<article className="container flex flex-col lg:flex-row-reverse items-center justify-center lg:bg-[#6f7acf] lg:py-10">
			<div id="imagen" className="flex justify-center py-5">
				<div className="forma relative lg:ml-[120px]">
					<Image className="sombra" src={La_chona.src} alt="perrito" fill/>
				</div>
			</div>
			<div id="descripcion" className="h-[300px] w-full bg-[#6f7acf] text-[#ffff] lg:text-3xl lg:w-[520px] lg:p-0 flex flex-col justify-center px-8">
				<h1 className="text-center text-2xl lg:text-4xl mb-4 font-ramm lg:font-medium pb-5">¿Quienes pueden ser voluntarios?</h1>
				<h2 className="text-center font-ramm lg:text-xl">Todas las personas mayores de edad pueden asistir a las instalaciones para conocernos y ayudarnos a limpiar nuestras patitas.</h2>
			</div>
		</article>

		<article className="flex flex-col lg:flex-row items-center justify-center lg:bg-[#E88EEF] lg:py-10">
			<div id="imagen" className="flex justify-center py-5">
				<div className="forma2 relative lg:mr-[120px]">
					<Image className="sombra" src={gerry.src} alt="perrito" fill/>
				</div>
			</div>
			<div id="descripcion" className="h-[300px] w-full bg-[#E88EEF] text-[#ffff] lg:text-3xl lg:w-[520px] lg:p-0 flex flex-col justify-center px-8">
				<h1 className="text-center text-2xl lg:text-4xl mb-4 font-ramm lg:font-medium pb-5">¿Quienes pueden ser voluntarios?</h1>
				<h2 className="text-center lg:text-xl font-ramm">Todas las personas mayores de edad pueden asistir a las instalaciones para conocernos y ayudarnos a limpiar nuestras patitas.</h2>
			</div>
		</article>
	</section>
}
export default Info;