import Image from "next/image";
import "./info.css"
import chonapng from "../../../../public/info/La chona.png";
import gerry from "../../../../public/info/gerry.png";
const Info = ()=>{
	return <section className="lg:py-[100px]">
		<article className="flex flex-col lg:flex-row-reverse items-center justify-center lg:bg-[#6f7acf] lg:mb-[150px] lg:py-10">
			<div id="imagen" className="flex justify-center py-5">
				<div className="forma relative lg:ml-[120px]">
					<Image src={chonapng.src} alt="perrito" fill/>
				</div>
			</div>
			<div id="descripcion" className="h-[300px] w-full bg-[#6f7acf] text-[#ffff] lg:text-3xl lg:w-[520px] lg:p-0 flex flex-col justify-center px-8">
				<h1 className="text-center text-xl mb-4 font-ramme"><strong>¿Quienes pueden ser voluntarios?</strong></h1>
				<h2 className="text-center text-l font-ramme">Todas las personas mayores de edad pueden asistir a las instalaciones para conocernos y ayudarnos a limpiar nuestras patitas.</h2>
			</div>
		</article>

		<article className="flex flex-col lg:flex-row items-center justify-center lg:bg-[#E88EEF] lg:py-10">
			<div id="imagen" className="flex justify-center py-5">
				<div className="forma2 relative lg:mr-[120px]">
					<Image src={gerry.src} alt="perrito" fill/>
				</div>
			</div>
			<div id="descripcion" className="h-[300px] w-full bg-[#E88EEF] text-[#ffff] lg:text-3xl lg:w-[520px] lg:p-0 flex flex-col justify-center px-8">
				<h1 className="text-center text-xl mb-4"><strong>¿Quienes pueden ser voluntarios?</strong></h1>
				<h2 className="text-center text-l">Todas las personas mayores de edad pueden asistir a las instalaciones para conocernos y ayudarnos a limpiar nuestras patitas.</h2>
			</div>
		</article>
	</section>
}
export default Info;