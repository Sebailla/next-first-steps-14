import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'About Page',
    description: 'En esta pagina se habla de nosotros',
    robots: ' index, follow',
}

const AboutPage = () => {
    return (
        <div className='text-5xl text-center text-amber-400 mt-10'>
            About Page
            <p>{new Date().toLocaleTimeString()}</p>
        </div>
    )
}

export default AboutPage