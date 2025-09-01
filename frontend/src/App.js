import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FreeTips from "./pages/FreeTips";
import VIPTips from "./pages/VIPTips";
import LiveScores from "./pages/LiveScores";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/free-tips" element={<FreeTips />} />
            <Route path="/vip-tips" element={<VIPTips />} />
            <Route path="/livescores" element={<LiveScores />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
