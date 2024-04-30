import React, { useState } from 'react'

const Buscador = () => {
  const [inputValue, setInputValue] = useState('')
  const Search = () => {
    console.log('Buscando...', inputValue)
  }

  return (
    <div>
      <input
        type='text'
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={Search}>Buscar</button>
    </div>
  )
}

export default Buscador
