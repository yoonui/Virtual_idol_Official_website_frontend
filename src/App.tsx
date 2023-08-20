import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/basic/Header";
import Footer from "./components/basic/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
