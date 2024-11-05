import React from "react"
import ResponsiveHeader from "../components/header"
import Footer from "../components/footer/Footer"

const LandigLayout = ({ children }: 
    { children: React.ReactNode; }
) => {
    return (
        <>
            <ResponsiveHeader />
            <main>
                {children}
            </main>
            <Footer/>
        </>
    );
}

export default LandigLayout;