import './App.css';
import { Routes, Route } from 'react-router-dom';
import Explore from './pages/Explore';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Info from './pages/Info';
import Login from './components/Login/index';
import Register from './components/Register/index';
import ProtectedRoute from './components/ProtectedRoute/index';

const App: React.FC = () => {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/explore"
          element={
            <ProtectedRoute>
              <Explore />
            </ProtectedRoute>
          }
        />
        <Route
          path="/info/:id"
          element={
            <ProtectedRoute>
              <Info/>
            </ProtectedRoute>
          }
        />
        <Route index element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
