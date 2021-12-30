import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
    return (

        <nav>
            <div className='logo'>
                <Image className='logo-item' src='/logo1.png' width={120} height={80} alt='as' />
            </div>
            <Link href='/'><a>Home</a></Link>
            <Link href='/about'><a>About</a></Link>
        </nav>
    );
}

export default Navbar;