import { useEffect, useState } from "react";
import "../styles/courseSection.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronDown, FaChevronUp, FaInfoCircle } from "react-icons/fa";
import Modal from "./Modal";
import Aside from "./Aside"

const CourseSection = () => {
  const [courseData, setCourseData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openChapter, setOpenChapter] = useState(null);
  const [openTopic, setOpenTopic] = useState(null);

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

  const toggleTopic = (topicIndex) => {
    setOpenTopic(openTopic === topicIndex ? null : topicIndex);
  };

  return (
    <>
      <div className="course-section">
        <div className="course-info">
          <div className="course-tag">
            {courseData.course}
            <div className="triangle-tip"></div>
          </div>
        </div>
        <div>
        <button className="start-button" onClick={() => setIsModalOpen(true)}>
          Start learning
        </button>
        </div>
      </div>





      {/* Chapter Section */}
      <div className="chapter-section mt-2">
        <div className="d-flex gap-5">
          <div className="cptn">Chapter No</div>
          <div className="cptn-1">Chapter</div>
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
                <span className="cursor-pointer">Chapter - {chapter.number}</span>
                {openChapter === chapterIndex ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              <div className="d-flex align-items-center rounded p-2 m-3 flex-grow-1 chapter">
                <span className="me-2">{chapter.title}</span>
                <FaInfoCircle color="blue" className="ms-auto" />
              </div>
            </div>
            {openChapter === chapterIndex && (
              <div className="topic-section bg-warning bg-opacity-25 rounded">
                <div className="d-flex gap-5">
                  <div className="topic-heading-left">Topic No</div>
                  <div className="topic-heading-right">Topic</div>
                </div>
                {chapter.topics.map((topic, topicIndex) => (
                  <div key={topicIndex}>
                    <div className="d-flex topic-row">
                      
                      <button className="topic-left" onClick={() => toggleTopic(topicIndex)}>
                      <img src="/assets/courseSection/topic-logo.png" alt="topic-logo" className="book-logo" />
                        Topic - {topic.number} {openTopic === topicIndex ? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                      <div className="d-flex align-items-center flex-grow-1 rounded topic-right">
                        <span>{topic.title}</span>
                        <FaInfoCircle color="orange" className="ms-auto" />
                      </div>
                    </div>
                    {openTopic === topicIndex && (
                      <div className="p-2 mb-3 bg-pink bg-opacity-50 rounded">
                        <div className="bg-warning bg-opacity-25 rounded subtopic-section">
                        <div className="d-flex gap-5 mb-3">
                            <div className="topic-heading-left">Subtopic No</div>
                            <div className="topic-heading-right mx-4">Subtopic</div>
                        </div>
                          {topic.subtopics.map((subtopic, subtopicIndex) => (
                            <div key={subtopicIndex} className="d-flex topic-row">
                              <Link to={`/subtopic/${chapterIndex}/${topicIndex}/${subtopicIndex}`} className="topic-left">
                              <img src="/assets/courseSection/book.png" alt="book-logo" className="book-logo" />
                               <div className="topiclbl"> Subtopic - {subtopic.number}</div>
                              </Link>
                              <div className="d-flex align-items-center flex-grow-1 rounded topic-right">
                                <span>{subtopic.title}</span>
                                <FaInfoCircle color="orange" className="ms-auto" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <Aside/>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        
    </>
  );
};

export default CourseSection;
