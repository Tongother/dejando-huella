import NavBarAdmin from "@/components/admin/NavBarAdmin";

const layout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div className="flex bg-slate-100 w-full h-full">
            <NavBarAdmin />
            {children}
        </div>
    )
}

export default layout;