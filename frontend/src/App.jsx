import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Nav from "./components/Nav";
import FreePatterns from "./pages/FreePatterns";
import UploadFile from "./pages/UploadItem";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/free-patterns' element={<FreePatterns />} />
          <Route path='/upload-file' element={<UploadFile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
