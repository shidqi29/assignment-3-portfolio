import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageLayout from "./components/layout/PageLayout";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Interests from "./pages/Interests";
function App() {
  return (
    <>
      <Router>
        <PageLayout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/interests" element={<Interests />} />
          </Routes>
        </PageLayout>
      </Router>
    </>
  );
}

export default App;
