import Stat from "./stat/stat";
const Stats = ()=>{
    return(
        <section className="grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 w-full lg:px-[150px] py-[50px] px-[50px] gap-5 lg:flex-shrink bg-transparent lg:gap-x-20 gap-y-10">
            <Stat estadistica="12.200" desc="Perros rescatados en los últimos años."/>
            <Stat estadistica="10.700" desc="Perros alimentados y atendidos actualmente."/>
            <Stat estadistica="10.700" desc="Perros alimentados y atendidos actualmente."/>
            <Stat estadistica="10.700" desc="Perros alimentados y atendidos actualmente."/>
        </section>
    )
}
export default Stats;