import  { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronDown, FaChevronUp, FaInfoCircle } from "react-icons/fa";
import "../styles/chapterSection.css";

const ChapterSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTopic, setActiveTopic] = useState(null);

  const toggleChapter = () => setIsOpen(!isOpen);

  const handleTopicClick = (index) => {
    setActiveTopic(index === activeTopic ? null : index);
  };

  return (
    <div className="chapter-section mt-3">
      <div className="d-flex  gap-5">
      <div className="cptn">Chapter No</div>
      <div className="cptn-1">Chapter</div>
      </div>
      {/* Chapter Header */}
      <div className="d-flex justify-content-start align-items-center">
        <div
          className="fw p-2 me-2 border rounded cursor-pointer d-flex align-items-center r chapter"
          onClick={toggleChapter}
          style={{ minWidth: "", justifyContent: "space-between " }}
        >
          <span className="cursor-pointer">Chapter - 1</span>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        <div className="d-flex align-items-center  rounded p-2 m-3 flex-grow-1 chapter">
          <span className="me-2">Evaluate Mathematical Expressions in Python</span>
          <FaInfoCircle color="blue" className="ms-auto" />
        </div>
      </div>

      {isOpen && (
        <div className="topic-section bg-warning bg-opacity-25  rounded">
        {/* Header Row */}
        <div className="d-flex gap-5">
          <div className="topic-heading-left">Topic No</div>
          <div className="topic-heading-right">Topic</div>
        </div>
  
        {/* Topic Row */}
        <div className="d-flex topic-row">
          <div
            className=""
            style={{ minWidth: "150px" }}
          >
            <button
              className="topic-left"
              onClick={() => handleTopicClick(1)}
            >Topic - 1
              {activeTopic === 1 ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          
            
          </div>
          
          <div className="d-flex align-items-center flex-grow-1 rounded topic-right">
            <span>Merge Two Lists Without Using Extend</span>
            <FaInfoCircle color="orange" className="ms-auto" />
          </div>
        </div>
  
        {/* Dropdown Content */}
        {activeTopic === 1 && (
          <div className="p-2 mb-2 bg-pink bg-opacity-50 rounded">
            
          </div>
        )}
        {activeTopic === 1 && (
          <div className="p-2 bg-danger bg-opacity-25 rounded">
          
          </div>
        )}
      </div>
      )}

      {/* Other chapters */}


      
      
    </div>
  );
};

export default ChapterSection;
