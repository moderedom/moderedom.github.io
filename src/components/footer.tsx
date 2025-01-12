import Image from "next/image";
import logo from "../../public/assets/images/logo_in_work.png";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTelegram} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="bg-mdm-almost-black py-8">
            <div className="container flex flex-col md:flex-row items-center">
                <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
                    <Link href="/">
                        <Image src={logo} alt="Moderedom logo" width={100}/>
                    </Link>
                    <ul className="flex text-white uppercase gap-12 text-xs">
                        <li><Link href="/" className="hover:underline">Home</Link></li>
                        <li><Link href="/features" className="hover:underline">Features</Link></li>
                        <li><Link href="/contacts" className="hover:underline">Contact</Link></li>
                    </ul>
                </div>
                <div className="flex gap-10 mt-12 md:mt-0">
                    <ul className="flex text-white text-2xl gap-12">
                        <li>
                            <a href="https://t.me/moderedom_bot" target="_blank" rel="noopener noreferrer" >
                                <FontAwesomeIcon className="text-2xl" icon={faTelegram}/>
                            </a>

                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;