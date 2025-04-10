import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "../styles/breadcrumb.css";

const SubtopicPage = ({ chapters }) => {
  const { chapterIndex, topicIndex, subtopicIndex } = useParams();

  const chapterIdx = Number(chapterIndex);
  const topicIdx = Number(topicIndex);
  const subtopicIdx = Number(subtopicIndex);

  const chapter = chapters?.[chapterIdx];
  const topic = chapter?.topics?.[topicIdx];
  const subtopic = topic?.subtopics?.[subtopicIdx];

  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    fetch("/src/data/courseData.json")
      .then((res) => res.json())
      .then((data) => setCourseData(data[0])) // Assuming first course object is needed
      .catch((err) => console.error("Failed to load course data:", err));
  }, []);

  if (!subtopic) return <div>Loading...</div>;

  return (
    <div className="course-section py-2">
      {/* Course Title */}
      <div className="course-info">
        <div className="course-tag">
          {courseData?.course || "Loading course..."}
          <div className="triangle-tip"></div>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb-nav">
        <Link to="/" className="breadcrumb-item">🏠 Home</Link>
        <span>›</span>
        <Link to={`/chapter/${chapterIdx}`} className="breadcrumb-item">
          📖 Chapter - {chapterIdx + 1}: {chapter?.title}
        </Link>
        <span>›</span>
        <Link to={`/topic/${chapterIdx}/${topicIdx}`} className="breadcrumb-item">
          📂 Topic - {topicIdx + 1}: {topic?.title}
        </Link>
        <span>›</span>
        <span className="breadcrumb-item active">
          📝 Subtopic - {subtopicIdx + 1}: {subtopic?.title}
        </span>
      </nav>

      {/* Subtopic Content */}
      
    </div>
  );
};

SubtopicPage.propTypes = {
  chapters: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      topics: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          subtopics: PropTypes.arrayOf(
            PropTypes.shape({
              title: PropTypes.string.isRequired,
              content: PropTypes.string.isRequired,
            })
          ).isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default SubtopicPage;
