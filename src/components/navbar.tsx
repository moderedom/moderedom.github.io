import logo from "@/../public/logo_in_work.png";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <header>
            <nav className="container flex items-center py-4 mt-4">
                <div className="py-1">
                    <Image src={logo} alt="Moderedom logo" width={60}/>
                </div>
                <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-mdm-blue uppercase text-sm">
                    <li><Link href="/" className="hover:underline">Home</Link></li>
                    <li><Link href="/features" className="hover:underline">Features</Link></li>
                    <li><Link href="/contacts" className="hover:underline">Contact</Link></li>
                    <button type="button" className="btn bg-mdm-red text-white px-7 py-3 uppercase">Login
                    </button>
                </ul>
                <div className="flex sm:hidden flex-1 justify-end">
                    <FontAwesomeIcon className="text-2xl" icon={faBars}></FontAwesomeIcon>
                </div>
            </nav>

        </header>
    );
}

export default Navbar;