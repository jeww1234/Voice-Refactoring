import './App.css'
import { Routes, Route } from 'react-router-dom';
import Main from './page/Main/Main';
import Intro from './page/Intro/Intro';


function App() {


  return (
    <Routes>
      <Route path='/' element={<Intro />} />
      <Route path='/home' element={<Main />}/>
    </Routes>
  )
}

export default App
