import "./App.scss";

import { Routes, Route } from "react-router-dom";

import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import Tienda from "./pages/Tienda";
import NuestraConsulta from "./pages/NuestraConsulta";
import NuestrosProductos from "./pages/NuestrosProductos";
// import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tienda" element={<Tienda />} />
        <Route path="consulta" element={<NuestraConsulta />} />
        <Route path="productos" element={<NuestrosProductos />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
