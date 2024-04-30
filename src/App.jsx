import { useState, useEffect } from 'react'
import ImageCard from './components/ImageCard'
import Buscador from './components/Buscador'
import './App.css'

function App () {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => {
        return response.json()
      }).then((results) => {
        setCharacters(results.results)
      }).catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <h1>Aplicación</h1>
      <Buscador />
      <div className='grid-cards'>
        {characters.map((character) => (
          <ImageCard key={character.id} url={character.image} name={character.name} />
        ))}
      </div>

    </>
  )
}

export default App
