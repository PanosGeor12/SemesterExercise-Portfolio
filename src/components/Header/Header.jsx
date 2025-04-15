import './Header.css';
import { Link } from 'react-router';

export default function Header() {
    return (
        <>
            <header>
                <Link to="/"><h1>Panos G</h1></Link>
                <nav>
                    <ul>
                        <li className='nav-link'><Link to="/">Projects</Link></li>
                        <li className='nav-link'><Link to="/contact">Contact</Link></li>
                        <li className='nav-link'><Link to="/blog">Blog</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}