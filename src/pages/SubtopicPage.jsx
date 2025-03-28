import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';

const SubtopicPage = ({ chapters }) => {
  const { chapterIndex, topicIndex, subtopicIndex } = useParams();

  const chapter = chapters[chapterIndex];
  const topic = chapter?.topics[topicIndex];
  const subtopic = topic?.subtopics[subtopicIndex];

  if (!subtopic) return <div>Loading...</div>;

  return (
    <>
    <div>
      <h1>{subtopic.title}</h1>
      <p>{subtopic.content || "Content not available."}</p>
    </div>
    </>
  );
};
SubtopicPage.propTypes = {
  chapters: PropTypes.arrayOf(
    PropTypes.shape({
      topics: PropTypes.array.isRequired,
    })
  ).isRequired,
};

export default SubtopicPage;

