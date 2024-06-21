import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ViewCandidates from "./pages/ViewCandidates.jsx";
import ViewJobs from "./pages/ViewJobs.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/view-candidates" element={<ViewCandidates />} />
        <Route exact path="/view-jobs" element={<ViewJobs />} />
      </Routes>
    </Router>
  );
}

export default App;