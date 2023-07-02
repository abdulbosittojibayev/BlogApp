import {Navbar, Footer} from "../components";

export default function BaseLayout({children}) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}