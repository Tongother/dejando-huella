import NavBarAdmin from "@/components/admin/NavBarAdmin";

const layout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div className="flex h-auto bg-gray-100">
            <NavBarAdmin />

            <section className="w-full h-screen overflow-y-scroll p-12">
                {children}
            </section>
        </div>
    )
}

export default layout;

