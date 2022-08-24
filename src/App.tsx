import { Route, Routes } from "react-router-dom"
import "./App.css"
import Dashboard from "./Pages/Dashboard"
import Login from "./Pages/Login"
import { AuthProvider } from "./Provider/Authenticator"


function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App