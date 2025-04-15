import './Home.css'
import Title from '../Title'
import MainContent from '../MainContent/MainContent'
import Hero from './Hero/Hero'
import AboutMe from './AboutMe/AboutMe'
import Services from './Services/Services'

export default function Home() {

  return (
    <>
      <Title title="Home"/>
      
      <Hero/>
      
      <MainContent>
        <AboutMe/>

        <Services/>
        
        {/* <h2>Recent Projects</h2>
        <hr /> */}
      </MainContent>
    </>
  )

}
