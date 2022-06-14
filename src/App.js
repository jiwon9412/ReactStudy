import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/pages/main';
import Login from './components/pages/login';
import Join from './components/pages/join';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
