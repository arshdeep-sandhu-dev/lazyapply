import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import ErrorContainer from './containers/ErrorContainer';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import UpcomingPage from './containers/UpcomingPage.js';
import RegisterContainer from './containers/RegisterContainer.js';
import LoginContainer from './containers/LoginContainer.js';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="*" element={<ErrorContainer />} />
          <Route path="/register" element={<RegisterContainer />} />
          <Route path="/login" element={<LoginContainer />} />
          
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
