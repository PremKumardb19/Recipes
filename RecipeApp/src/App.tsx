import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Explore from './pages/Explore';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Info from './pages/Info';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/explore"
          element={
            <ProtectedRoute>
              <Explore isLogged={isLogged} setIsLogged={setIsLogged} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/info/:id"
          element={
            <ProtectedRoute>
              <Info isLogged={isLogged} setIsLogged={setIsLogged} />
            </ProtectedRoute>
          }
        />
        <Route index element={<Home isLogged={isLogged} setIsLogged={setIsLogged} />} />
      </Routes>
    </>
  );
};

export default App;
