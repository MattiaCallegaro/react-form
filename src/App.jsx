import { use, useState } from 'react'

const avengers = ['IronMan', 'Spiderman', 'Capitan America', 'Hulk', 'Thor', 'Black Widow']


function App() {

  const [newAvenger, setNewAvenger] = useState("")
  const [avengers, setAvengers] = useState(initialAvengers)
  const addAvenger = (e) => {
    e.preventDefault();
    //con trim andiamo a spalmare nell'array
    const avenger = newAvenger.trim()
    setAvengers([...avengers, avenger])
    setNewAvenger("")
  }
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
            <button className="btn btn-primary">Aggiungi</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App