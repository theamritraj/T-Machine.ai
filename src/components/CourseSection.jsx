import { useEffect, useState } from "react";
import "../styles/courseSection.css";
import ChapterSection from "./ChapterSection";
import Modal from "./Modal";


const CourseSection = () => {
 
  const [courseData, setCourseData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

        <button className="start-button" onClick={() => setIsModalOpen(true)}>
          Start learning
        </button>
      </div>
      <ChapterSection/>


      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default CourseSection;
