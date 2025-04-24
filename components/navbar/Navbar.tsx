import Link from "next/link"
import { HomeIcon } from '@primer/octicons-react'
import { ActiveLink } from '../active-link/ActiveLink';


const navItems = [
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/pricing', label: 'Pricing' }
]

export const Navbar = () => {

    return (

        <nav className='flex justify-between bg-blue-500 bg-opacity-30 text-white m-2 p-2 rounded-sm'>
            <div>
                <Link href='/' className="flex items-center">
                    <HomeIcon size={24} />
                    <span className="ml-4 font-bold">Home</span>
                </Link>
            </div>
            <div>

                {
                    navItems.map((item) => (
                        <ActiveLink key={item.path} {...item} />
                    ))
                }

            </div>

        </nav>
    )
}



