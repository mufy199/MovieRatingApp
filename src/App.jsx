import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import './App.css'
import Auth from './pages/auth/Auth'
import Home from './pages/home/Home'
import Movie from './pages/movie/Movie'
import TvShow from './pages/tvshow/TvShow'

function App() {

  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/auth' element={<Auth></Auth>}></Route>
          <Route path='/rated' element={<h1>Rated Page</h1>}></Route>
          <Route path='/movie/:id' element={<Movie></Movie>}></Route>
          <Route path='/tvshow/:id' element={<TvShow></TvShow>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
