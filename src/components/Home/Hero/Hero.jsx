import './Hero.css';
import robotHero from '../../../assets/robotHero.png';

export default function Hero() {
    return (
        <>
            <section className='hero'>
                <div className='introduction-texts'>
                    <p>Hello, im <span>PanosG</span></p>
                    <p>A passionate Web Developer.</p>
                </div>
                <div className='hero-image'>
                    <img src={robotHero} alt="" />
                </div>
            </section>
        </>
    );
}