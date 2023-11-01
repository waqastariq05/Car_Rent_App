import './App.css'
import AboutSection from './Components/AboutSection/AboutSection'
import Banner from './Components/Banner/Banner'
import BookingForm from './Components/BookingForm/BookingForm'
import ContactSection from './Components/ContactSection/ContactSection'
import Footer from './Components/Footer/Footer'
import ModelSection from './Components/ModelSection/ModelSection'
import Navbar from './Components/Navbar/Navbar'
import ServiceSection from './Components/ServiceSection/ServiceSection'

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <BookingForm />
      <ServiceSection />
      <ModelSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
