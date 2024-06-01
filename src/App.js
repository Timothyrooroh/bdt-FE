import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/admin/skpd/Home";
import TokoPage from "./pages/TokoPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transaksi" element={<TokoPage />} />
          <Route path="/gudang" element={<TokoPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
