import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/basic/Header";
import Footer from "./components/basic/Footer";
import Home from "./pages/Home";
import Join from "./pages/Join";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<Join />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
