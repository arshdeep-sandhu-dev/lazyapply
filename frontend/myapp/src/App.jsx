import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import ErrorContainer from './containers/ErrorContainer';
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="*" element={<ErrorContainer />} />
          
        </Routes>
    </div>
  );
}

export default App;
