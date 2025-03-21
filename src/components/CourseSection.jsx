import { useEffect, useState } from "react";
import "../styles/courseSection.css";
import ChapterSection from "./ChapterSection";


const CourseSection = () => {
 
  const [courseData, setCourseData] = useState(null);


  useEffect(() => {
    fetch("/src/data/courseData.json")
      .then((res) => res.json())
      .then((data) => setCourseData(data[0]))
      .catch((err) => console.error("Failed to load course data:", err));
  }, []);


  if (!courseData) return <div>Loading...</div>;

  return (
    <>
      <div className="course-section">
        <div className="course-info">
          <div className="course-tag">
            {courseData.course}
            <div className="triangle-tip"></div>
          </div>
        </div>

        <button className="start-button">
          Start learning
        </button>
      </div>
      <ChapterSection/>
    </>
  );
};

export default CourseSection;
