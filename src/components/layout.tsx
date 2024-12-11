import Navbar from './navbar'
import Footer from './footer'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: ['400', '700'], // Specify the weights you want to include
    subsets: ['latin'],     // Specify subsets
    fallback: ['sans-serif'], // Fallback fonts
    variable: '--font-Poppins',
});


// @ts-expect-error Reason: This directive suppresses a specific issue due to an anomaly in type checking.
export default function Layout({children}) {
    return (
        <div className={poppins.className}>
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}