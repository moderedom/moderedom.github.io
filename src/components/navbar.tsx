import { useState } from "react";
import logo from '@/../public/assets/images/logo_in_work.png';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    // State to toggle the menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <nav className="container flex items-center py-4 mt-4 relative">
                {/* Logo */}
                <div className="py-1">
                    <Link href="/">
                        <Image src={logo} alt="Moderedom logo" width={100} />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-mdm-blue uppercase text-sm">
                    <li>
                        <Link href="/" className="hover:underline">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/features" className="hover:underline">
                            Features
                        </Link>
                    </li>
                    <li>
                        <Link href="/contacts" className="hover:underline">
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Hamburger Icon */}
                <div className="flex sm:hidden flex-1 justify-end">
                    <FontAwesomeIcon
                        className="text-2xl cursor-pointer"
                        icon={isMenuOpen ? faTimes : faBars}
                        onClick={toggleMenu}
                    />
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <ul className="absolute top-full right-0 bg-white w-full sm:hidden flex flex-col items-center gap-4 py-4 uppercase text-mdm-blue text-sm shadow-md">
                        <li>
                            <Link href="/" className="hover:underline" onClick={toggleMenu}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/features" className="hover:underline" onClick={toggleMenu}>
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link href="/contacts" className="hover:underline" onClick={toggleMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
};

export default Navbar;