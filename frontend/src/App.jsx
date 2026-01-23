import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting'
import TitleTextBox from './components/TitleTextBox.jsx'
import TextAreaContent from './components/TextAreaContent.jsx'
import PostForm from './components/PostForm.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greeting/>
      <PostForm />
      
    </>
  )
}

export default App
