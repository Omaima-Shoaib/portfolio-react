import './App.css'
import Header from './components/Header/Header'
import FloatingNav from './components/floatingNav/FloatingNav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Porfolio from './components/portfolio/Porfolio'
import Testimonial from './components/testimonials/Testimonial'
import Contact from './components/contatct/Contact'
import Footer from './components/footer/Footer'


function App() {
  return (
    <div className="App ">
      <Header></Header>
      <FloatingNav></FloatingNav>
      <About></About>
      <Experience></Experience>
      <Services></Services>
      <Porfolio></Porfolio>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
     
      
    </div>
  );
}

export default App;
