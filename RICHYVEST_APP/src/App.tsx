// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext'; // Import AuthProvider
import Guess from './controllers/controller';
import Welcome from './view/Welcome';
import Login from './view/Login';
import Register from './view/Register';
import NavBar from './view/components/NavBar';
import ProtectedRoute from './view/components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Protected Route */}
          <Route path="/app" element={
              <ProtectedRoute>
                <Guess />
              </ProtectedRoute>
            }/>        
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;