import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './experience.scss'

const Experience = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

 


  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'o', 'r', 't', 'a', 'f', 'o', 'l', 'i', 'o']}
              idx={15}
            />
          </h1>
          
 
          
        </div>             
      </div>
      <Loader type="pacman" />
    </>
  )
  
}
export default Experience
