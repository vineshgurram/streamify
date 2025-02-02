import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import PageNotFound from "../pages/PageNotFound";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <div className="lyt-main">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
