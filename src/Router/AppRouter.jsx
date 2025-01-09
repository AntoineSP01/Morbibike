import Home from '../pages/Home'
import Detail from '../pages/DetailBike'
import Error from '../pages/Error'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailbike/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
