
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import MoviesShowsPage from "./pages/MoviesShowsPage"
import SupportPage from "./pages/SupportPage"
import MoviesPageOpen from "./pages/MoviesPageOpen"
import SubscriptionPage from "./pages/SubscriptionPage"
export default function App() {
  return (
    <div className="">
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/moviesandshows" element={<MoviesShowsPage/>}/>
        <Route path="/support" element={<SupportPage/>}/>
         <Route path="/subscription" element={<SubscriptionPage/>}/>
        <Route path="/MoviesPageOpen" element={<MoviesPageOpen/>}/>
      </Routes>
    </Router>
    </div>
  )
}