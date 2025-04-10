import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CourseSection from "./components/CourseSection";
import SubtopicPage from "./pages/SubtopicPage";
import { chapters } from "./data/chapters";  // ✅ Move chapters data to a separate file
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <div className="course-container">
          <Routes>
            <Route path="/" element={<CourseSection />} />
            <Route path="/subtopic/:chapterIndex/:topicIndex/:subtopicIndex" element={<SubtopicPage chapters={chapters} />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
