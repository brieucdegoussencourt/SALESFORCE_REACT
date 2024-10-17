// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import NavBar from "./view/components/NavBar";
import Guess from "./controllers/controller";
import Welcome from "./view/Welcome";
import Login from "./view/Login";
import Register from "./view/Register";
import Footer from "./view/components/Footer";
import ProtectedRoute from "./view/components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-grow">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/* Protected Route */}
              <Route
                path="/app"
                element={
                  <ProtectedRoute>
                    <Guess />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
