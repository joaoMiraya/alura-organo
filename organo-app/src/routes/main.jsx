import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from '../App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
    </Routes>
  </BrowserRouter>
)
