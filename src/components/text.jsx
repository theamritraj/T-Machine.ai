import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronDown, FaChevronUp, FaInfoCircle } from "react-icons/fa";
import "../styles/chapterSection.css";

const chapters = [
  {
    number: 1,
    title: "Evaluate Mathematical Expressions in Python",
    topics: [
      {
        number: 1,
        title: "Merge Two Lists Without Using Extend",
        subtopics: [
          { number: 1, title: "Using List Comprehension" },
          { number: 2, title: "Using the `+` Operator" },
          { number: 3, title: "Using a Loop" },
        ],
      },
    ],
  },
  {
    number: 2,
    title: "Find the GCD and LCM of Two Numbers",
    topics: [
      {
        number: 1,
        title: "GCD Calculation Methods",
        subtopics: [
          { number: 1, title: "Using Euclidean Algorithm" },
          { number: 2, title: "Using Recursion" },
        ],
      },
    ],
  },
  {
    number: 3,
    title: "Convert Decimal to Binary and Hexadecimal",
    topics: [
      {
        number: 1,
        title: "Conversion Methods",
        subtopics: [
          { number: 1, title: "Using Built-in Functions" },
          { number: 2, title: "Using Custom Logic" },
        ],
      },
    ],
  },
];

const ChapterSection = () => {
  const [openChapter, setOpenChapter] = useState(null);
  const [openTopic, setOpenTopic] = useState(null);

  const toggleChapter = (chapterIndex) => {
    setOpenChapter(openChapter === chapterIndex ? null : chapterIndex);
  };

  const toggleTopic = (topicIndex) => {
    setOpenTopic(openTopic === topicIndex ? null : topicIndex);
  };

  return (
    <div className="chapter-section mt-3">
      <div className="d-flex gap-5">
        <div className="cptn">Chapter No</div>
        <div className="cptn-1">Chapter</div>
      </div>

      {chapters.map((chapter, chapterIndex) => (
        <div key={chapter.number}>
          {/* Chapter Header */}
          <div className="d-flex justify-content-start align-items-center">
            <div
              className="fw p-2 me-2 border rounded cursor-pointer d-flex align-items-center r chapter"
              onClick={() => toggleChapter(chapterIndex)}
              style={{ justifyContent: "space-between" }}
            >
              <span className="cursor-pointer">Chapter - {chapter.number}</span>
              {openChapter === chapterIndex ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <div className="d-flex align-items-center rounded p-2 m-3 flex-grow-1 chapter">
              <span className="me-2">{chapter.title}</span>
              <FaInfoCircle color="blue" className="ms-auto" />
            </div>
          </div>

          {/* Chapter Content */}
          {openChapter === chapterIndex && (
            <div className="topic-section bg-warning bg-opacity-25 rounded">
              <div className="d-flex gap-5">
                <div className="topic-heading-left">Topic No</div>
                <div className="topic-heading-right">Topic</div>
              </div>

              {chapter.topics.map((topic, topicIndex) => (
                <div key={topic.number}>
                  <div className="d-flex topic-row">
                    <div style={{ minWidth: "150px" }}>
                      <button
                        className="topic-left"
                        onClick={() => toggleTopic(topicIndex)}
                      >
                        Topic - {topic.number} {openTopic === topicIndex ? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                    </div>

                    <div className="d-flex align-items-center flex-grow-1 rounded topic-right">
                      <span>{topic.title}</span>
                      <FaInfoCircle color="orange" className="ms-auto" />
                    </div>
                  </div>

                  {/* Subtopics */}
                  {openTopic === topicIndex && (
                    <div className="p-2 mb-2 bg-pink bg-opacity-50 rounded">
                      <div className="bg-warning bg-opacity-25 rounded subtopic-section">
                        <div className="d-flex gap-5">
                          <div className="topic-heading-left">Subtopic No</div>
                          <div className="topic-heading-right subtopic-right">Subtopic</div>
                        </div>

                        {topic.subtopics.map((subtopic) => (
                          <div key={subtopic.number} className="d-flex topic-row">
                            <div style={{ minWidth: "150px" }}>
                              <button className="topic-left">Subtopic - {subtopic.number}</button>
                            </div>
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
  );
};

export default ChapterSection;
