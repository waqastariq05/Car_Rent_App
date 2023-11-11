import { useState } from 'react'
import './App.css'
import AboutSection from './Components/AboutSection/AboutSection'
import Alert from './Components/Alert/Alert'
import Banner from './Components/Banner/Banner'
import BookingForm from './Components/BookingForm/BookingForm'
import ContactSection from './Components/ContactSection/ContactSection'
import Footer from './Components/Footer/Footer'
import ModelSection from './Components/ModelSection/ModelSection'
import Navbar from './Components/Navbar/Navbar'
import ServiceSection from './Components/ServiceSection/ServiceSection'

function App() {
  const [showAlert, setShowAlert] = useState(false)

  return (
    <>
      <Navbar />
      <Banner />
      {showAlert && (
        <Alert msg="Your Booking is Successfull" setShowAlert={setShowAlert} />
      )}
      <BookingForm setShowAlert={setShowAlert} />
      <ServiceSection />
      <ModelSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
