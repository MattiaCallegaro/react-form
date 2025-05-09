import { useState } from 'react'

const avengers = ['IronMan', 'Spiderman', 'Capitan America', 'Hulk', 'Thor', 'Black Widow']


function App() {
  return (
    <>
      <div className="container">
        <h1 className="my-3">Avengers</h1>
        <ul className="list-group mb-4">
          {avengers.map((avenger, index) => (
            <li key={index} className='list-group-item'>{avenger}</li>
          ))}
        </ul>
        <form >
          <div className="input-group mb-3">
            <input type="text"
              className='form-control'
              placeholder='Inserisci il tuo Avengers' />
          </div>
        </form>
      </div>
    </>
  )
}

export default App