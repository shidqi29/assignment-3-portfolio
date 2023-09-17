import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageLayout from "./components/layout/PageLayout";
import About from "./pages/About";
function App() {
  return (
    <>
      <Router>
        <PageLayout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </PageLayout>
      </Router>
    </>
  );
}

export default App;
