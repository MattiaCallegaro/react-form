import { use, useState } from 'react'

const initialAvengers = ['IronMan', 'Spiderman', 'Capitan America', 'Hulk', 'Thor', 'Black Widow']


function App() {
  // funzione per aggiungere un nuovo elemento nell'array
  const [newAvenger, setNewAvenger] = useState("")
  const [avengers, setAvengers] = useState(initialAvengers)
  const addAvenger = (e) => {
    e.preventDefault();
    //con trim andiamo a spalmare nell'array
    const avenger = newAvenger.trim()
    setAvengers([...avengers, avenger])
    setNewAvenger("")
  }

  const handleRemoveAvenger = (index) => {
    // funzione per eliminare l'elemento dall'array
    const updatedAvengers = [...avengers];
    updatedAvengers.splice(index, 1);
    setAvengers(updatedAvengers)
  }

  return (
    <>
      <div className="container">
        <h1 className="my-3">Avengers</h1>
        <ul className="list-group mb-4">
          {avengers.map((avenger, index) => (
            <li key={index}
              className='list-group-item'>
              {avenger}
              <button className="btn btn-danger  p-1 mx-5"
                onClick={() => {
                  handleRemoveAvenger(index);
                }}
              >Elimina</button></li>
          ))}
        </ul>
        <form onSubmit={addAvenger} >
          <div className="input-group mb-3">
            <input type="text"
              className='form-control'
              placeholder='Inserisci il tuo Avengers'
              value={newAvenger}
              onChange={(e) => setNewAvenger(e.target.value)} />
            <div className="btn-input">
              <button className="btn btn-primary mx-3">Aggiungi</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App