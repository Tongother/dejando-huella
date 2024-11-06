import NavBarAdmin from "../components/admin/NavBarAdmin";

const layout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div className="flex">
            <NavBarAdmin />
            {children}
        </div>
    )
}

export default layout;