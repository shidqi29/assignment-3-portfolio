import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageLayout from "./components/layout/PageLayout";
function App() {
  return (
    <>
      <Router>
        <PageLayout>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </PageLayout>
      </Router>
    </>
  );
}

export default App;
