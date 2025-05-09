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
      </div>
    </>
  )
}

export default App