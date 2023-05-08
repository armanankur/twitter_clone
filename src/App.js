
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import Registration from './pages/Registration/Registration';
import MainPage from './pages/MainPage/MainPage';
import Login from './pages/Login/Login';

function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="/*" element={"Error 404 Page not found"} />
      </Routes>

  

    </div>
  );
}

export default App;
