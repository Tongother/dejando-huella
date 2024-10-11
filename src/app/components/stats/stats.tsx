import Stat from "./stat/stat";
const Stats = ()=>{
    return(
        <section className="flex flex-col w-full py-[50px] px-[50px] gap-9">
            <Stat estadistica="12.200" desc="Perros rescatados en los últimos años."/>
            <Stat estadistica="10.700" desc="Perros alimentados y atendidos actualmente."/>
            <Stat estadistica="10.700" desc="Perros alimentados y atendidos actualmente."/>
            <Stat estadistica="10.700" desc="Perros alimentados y atendidos actualmente."/>
        </section>
    )
}
export default Stats;