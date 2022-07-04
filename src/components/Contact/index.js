import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import './index.scss'


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_kml05la', 'template_yg2pobl', form.current, 'qRDRT4MGCOQoodjA6')
      .then(
        () => {
          alert('Mensaje enviado!')
          window.location.reload(false)
        },
        () => {
          alert('No se pudo enviar el mensaje, intente nuevamente')
        }
      )
      e.target.reset();
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
              </form>
            <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h3>Email</h3>
            <h3>dm757623@gmail.com</h3>
            <a href="mailto:dm757623@gmail.com" target='_blank'>enviar mensaje</a>
          </article>

          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
            <h3>Messenger</h3>
            <h3>daniel montoya</h3>
            <a href="https://m.me/montoyacarrasco" target='_blank' >enviar mensaje</a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h3>WhatsApp</h3>
            <h3>+56978464837</h3>
            <a href="https://wa.me/56978464837" target='_blank' >enviar mensaje</a>
          </article>
        </div>
       
          </div>
        </div>
        <div className="info-map">
          Valdivia,
          <br />
          Chile,
          <br />
          Eugenio Matte #52 <br />
          <br />
          <span>dm757623@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[-39.835062, -73.219138]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-39.835062, -73.219138]}>
              <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
  
}
export default Contact
