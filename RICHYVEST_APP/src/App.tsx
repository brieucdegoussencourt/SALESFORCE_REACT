// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Guess from './controllers/controller';
import Welcome from './view/components/Welcome';
import Login from './view/components/Login';
import Register from './view/components/Register';
import NavBar from './view/components/NavBar';
import ProtectedRoute from './view/components/ProtectedRoute';
import './view/css/App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Protected Route */}
        <Route path="/app" element={<ProtectedRoute component={Guess} />} />
      </Routes>
    </Router>
  );
}

export default App;