import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Row, Col } from 'antd';

import Main from './components/pages/main';
import Login from './components/pages/login';
import Join from './components/pages/join';
import TableTest from './components/pages/table';
import Hooks from './components/pages/hooks';
import Board from './components/pages/board';

import Header from './components/templates/Header';
import Footer from './components/templates/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Row>
          <Col span={24}>
            <Row>
              <Col span={24}>
                <Header />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Routes>
                  <Route path="/main" element={<Main />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/join" element={<Join />} />
                  <Route path="/table" element={<TableTest />} />
                  <Route path="/hooks" element={<Hooks />} />
                  <Route path="/board" element={<Board />} />
                </Routes>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Footer />
              </Col>
            </Row>
          </Col>
        </Row>
      </BrowserRouter>
    </div>
  );
}

export default App;
