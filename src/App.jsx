import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const slides = ["slide1", "slide2", "slide3", "slide4"]
  const [currentSlide, setCurrentSlide] = useState(0)

  const prevSlide = ()=>{
    setCurrentSlide((prevSlide)=>{prevSlide === 0 ? slides.length-1 : prevSlide-1})
  }

  const nextSlide = ()=>{
    setCurrentSlide((prevSlide) =>{prevSlide === slides.lengt - 1? 0 : prevSlide+1})
  }

  return (
    <>
      <div className='slider'>
        <div className='slides'>

          {slides.map((slide, index)=>{
          <div className='slide' key={index}>slide </div>
        })}
        </div>
        <div className='button'>
          <button className="prev" onClick={prevSlide}></button>
          <button className='next' onClick={nextSlide}></button>
        </div>

      </div>
    </>
  )
}

export default App
