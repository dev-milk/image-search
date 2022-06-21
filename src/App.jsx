import { useState } from 'react'
import axios from 'axios'
import Title from './components/Title'
import Form from './components/Form'
import Results from './components/Results'
import './App.css'

function App() {
  const [word, setWord] = useState('')
  const [photo, setPhoto] = useState([]);

  const getPhotoData = (e) => {
    e.preventDefault();
    axios
    .get('https://api.unsplash.com/search/photos?query=cat&client_id=lwL8jY4C9Lt3e7Nguma3H7FYmoqN35SHejqGh-ROdus')
    .then(res => {
       setPhoto(res.data.results)
    } )
  }

  return (
    <div className="App">
      <Title />
      <Form setWord={setWord} getPhotoData={getPhotoData} />
      <Results photo={photo} />
    </div>
  )
}

export default App
