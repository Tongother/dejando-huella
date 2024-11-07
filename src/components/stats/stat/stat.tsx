import './stat.css'
interface StatProps{
    estadistica: string,
    desc: string
}
const Stat = ({estadistica, desc}:StatProps)=>{
    return( 
        <div className="shadow-inner rounded-[40px] flex flex-col justify-center items-center w-full lg:h-44 p-5 bg-white stat">
            <h1 className="text-center font-coda font-semibold text-[36px] text-[#0099FF]">{estadistica}</h1>
            <h2 className="text-center font-com text-[22px]">{desc}</h2>
        </div>
    );
}
export default Stat;