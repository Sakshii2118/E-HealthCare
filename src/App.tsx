import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ChatBot from "@/components/ChatBot"
import Home from "@/pages/Home"
import Doctors from "@/pages/Doctors"
import "./index.css"

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route
              path="/consultations"
              element={<div className="p-8 text-center">Consultations page coming soon!</div>}
            />
            <Route path="/payments" element={<div className="p-8 text-center">Payments page coming soon!</div>} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  )
}

export default App
