import { useEffect, useState } from "react";
import "../styles/courseSection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronDown, FaChevronUp, } from "react-icons/fa";
import Modal from "./Modal";
import Aside from "./Aside"

const CourseSection = () => {
  const [courseData, setCourseData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openChapter, setOpenChapter] = useState(null);
  // const [openTopic, setOpenTopic] = useState(null);

  useEffect(() => {
    fetch("/src/data/courseData.json")
      .then((res) => res.json())
      .then((data) => setCourseData(data[0])) 
      .catch((err) => console.error("Failed to load course data:", err));
  }, []);

  if (!courseData) return <div>Loading...</div>;

  const toggleChapter = (chapterIndex) => {
    setOpenChapter(openChapter === chapterIndex ? null : chapterIndex);
  };

  // const toggleTopic = (topicIndex) => {
  //   setOpenTopic(openTopic === topicIndex ? null : topicIndex);
  // };

  return (
    <>

      {/* Chapter Section */}
      <div className="chapter-sectmt-2">
        <div className="d-flex gap-5">
          <div className="cptn">Chapter No</div>
        </div>
        {courseData.chapters.map((chapter, chapterIndex) => (
          <div key={chapterIndex}>
            <div className="d-flex justify-content-start align-items-center">
              <div
                className="fw p-2 me-2 border rounded cursor-pointer d-flex align-items-center r chapter"
                onClick={() => toggleChapter(chapterIndex)}
                style={{ justifyContent: "space-between" }}
              >
                 <img src="/assets/courseSection/book.png" alt="book-logo" className="book-logo" />
                <span className="cursor-pointer">{chapter.number}</span>
                {openChapter === chapterIndex ? <FaChevronUp /> : <FaChevronDown />}
              </div>
             
            </div>
            
          </div>
        ))}
      </div>
      <Aside/>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        
    </>
  );
};

export default CourseSection;
