import { Navbar } from "@/components";



export default function GeneralLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar/>

            <main className="flex flex-col items-center justify-between m-4 p-5">
                <h1>Hola Mundo</h1>

                {children}
            </main >
        </>
    );
}