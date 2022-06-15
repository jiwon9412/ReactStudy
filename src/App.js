import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/pages/main';
import Login from './components/pages/login';
import Join from './components/pages/join';
import TableTest from './components/pages/table';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/table" element={<TableTest />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
