import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Pricing Page',
    description: 'Esta es la pagina deel precio de los productos de la empresa XX',
}

const Pricing = () => {
    return (
        <div className='text-5xl text-center text-amber-400 mt-10'>
            Pricing page
        </div>
    )
}

export default Pricing