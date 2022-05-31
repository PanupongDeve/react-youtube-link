import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import PlayButton from './components/PlayButton'
import YotubeLink from './components/YotubeLink'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col justify-center items-center">
        <YotubeLink className='p-[25px]' width='560px' heigth='315px' yt_code='e3RRU25dpPg' />
        <YotubeLink className='p-[25px]' width='560px' heigth='315px' yt_code='s7jXASBWwwI' />  
    </div>
  )
}

export default App
