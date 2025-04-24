import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Contact Page',
    description: 'Esta es la pagina de contacto del sitio XX',
}

const Contact = () => {
    return (
        <div className='text-5xl text-center text-amber-400 mt-10'>
            Contact Page
        </div>
    )
}

export default Contact