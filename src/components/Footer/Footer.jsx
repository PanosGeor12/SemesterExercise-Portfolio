import './Footer.css';

export default function Footer() {
    let currentYear = new Date();
    
    return (
        <>
            <footer>
                <div className='copyright'>Made by <a href="https://github.com/PanosGeor12">PanosG</a> - &copy; {currentYear.getFullYear()}</div>
            </footer>
        </>
    );
}