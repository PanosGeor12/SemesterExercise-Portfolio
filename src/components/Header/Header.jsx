import './Header.css';
import { Link } from 'react-router';

export default function Header() {
    return (
        <>
            <header>
                <a href="/"><h1>{import.meta.env.VITE_SITE_NAME}</h1></a>
                <nav>
                    <ul>
                        <li className='nav-link'><Link to="/">About Me</Link></li>
                        <li className='nav-link'><Link to="/">Projects</Link></li>
                        <li className='nav-link'><Link to="/">Services</Link></li>
                        <li className='nav-link'><Link to="/">Contact</Link></li>
                        <li className='nav-link'><Link to="/blog">Blog</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}