// import  { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaChevronDown, FaChevronUp, FaInfoCircle } from "react-icons/fa";
// import "../styles/chapterSection.css";

// const ChapterSection = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeTopic, setActiveTopic] = useState(null);

//   const toggleChapter = () => setIsOpen(!isOpen);

//   const handleTopicClick = (index) => {
//     setActiveTopic(index === activeTopic ? null : index);
//   };

//   return (
//     <div className="chapter-section mt-3">
//       <div className="d-flex  gap-5">
//       <div className="cptn">Chapter No</div>
//       <div className="cptn-1">Chapter</div>
//       </div>
//       {/* Chapter Header */}
//       <div className="d-flex justify-content-start align-items-center">
//         <div
//           className="fw p-2 me-2 border rounded cursor-pointer d-flex align-items-center r chapter"
//           onClick={toggleChapter}
//           style={{ minWidth: "", justifyContent: "space-between " }}
//         >
//           <img src="./src/assets/courseSection/book.png" alt="book-logo" className="book-logo" />
//           <span className="cursor-pointer">Chapter - 1</span>
//           {isOpen ? <FaChevronUp /> : <FaChevronDown />}
//         </div>
//         <div className="d-flex align-items-center  rounded p-2 m-3 flex-grow-1 chapter">
//           <span className="me-2">Evaluate Mathematical Expressions in Python</span>
//           <FaInfoCircle color="blue" className="ms-auto" />
//         </div>
//       </div>

//       {isOpen && (
//         <div className="topic-section bg-warning bg-opacity-25  rounded">
//         {/* Header Row */}
//         <div className="d-flex gap-5">
//           <div className="topic-heading-left">Topic No</div>
//           <div className="topic-heading-right">Topic</div>
//         </div>
  
//         {/* Topic Row */}
//         <div className="d-flex topic-row">
//           <div
//             className=""
//             style={{ minWidth: "150px" }}
//           >
//             <button
//               className="topic-left"
//               onClick={() => handleTopicClick(1)}
//             >
//                <img src="./src/assets/courseSection/topic-logo.png" alt="book-logo" className="book-logo" />
//               Topic - 1
//               {activeTopic === 1 ? <FaChevronUp /> : <FaChevronDown />}
//             </button>
          
            
//           </div>
          
//           <div className="d-flex align-items-center flex-grow-1 rounded topic-right">
//             <span>Merge Two Lists Without Using Extend</span>
//             <FaInfoCircle color="orange" className="ms-auto" />
//           </div>
//         </div>
  
//         {/* Dropdown Content */}
//         {activeTopic === 1 && (
//           <div className="p-2 mb-2 bg-pink bg-opacity-50 rounded">



// <div className=" bg-warning bg-opacity-25  rounded subtopic-section">
//         {/* Header Row */}
//         <div className="d-flex gap-5">
//           <div className="topic-heading-left">Subtopic No</div>
//           <div className="topic-heading-right subtopic-right">Subtopic</div>
//         </div>
  
//         {/*Sub - Topic Row */}
//         <div className="d-flex topic-row">
//           <div
//             className=""
//             style={{ minWidth: "150px" }}
//           >
//             <button
//               className="topic-left"
//               onClick={() => handleTopicClick(1)}
//             >
//                <img src="./src/assets/courseSection/subtopic-logo.png" alt="book-logo" className="subtopic-logo book-logo" />
//               Subtopic - 1
             
//             </button>
          
            
//           </div>
          
//           <div className="d-flex align-items-center flex-grow-1 rounded topic-right">
//             <span>Merge Two Lists Without Using Extend</span>
//             <FaInfoCircle color="orange" className="ms-auto" />
//           </div>
//         </div>







//         <div className="d-flex topic-row">
//           <div
//             className=""
//             style={{ minWidth: "150px" }}
//           >
//             <button
//               className="topic-left"
//               onClick={() => handleTopicClick(1)}
//             >
//               <img src="./src/assets/courseSection/subtopic-logo.png" alt="book-logo" className="subtopic-logo book-logo" />
//               Subtopic - 2
             
//             </button>
          
            
//           </div>
          
//           <div className="d-flex align-items-center flex-grow-1 rounded topic-right">
//             <span>Merge Two Lists Without Using Extend</span>
//             <FaInfoCircle color="orange" className="ms-auto" />
//           </div>
//         </div>



//         <div className="d-flex topic-row">
//           <div
//             className=""
//             style={{ minWidth: "150px" }}
//           >
//             <button
//               className="topic-left"
//               onClick={() => handleTopicClick(1)}
//             >
//               <img src="./src/assets/courseSection/subtopic-logo.png" alt="book-logo" className="subtopic-logo book-logo" />
//               Subtopic - 3
             
//             </button>
          
            
//           </div>
          
//           <div className="d-flex align-items-center flex-grow-1 rounded topic-right">
//             <span>Merge Two Lists Without Using Extend</span>
//             <FaInfoCircle color="orange" className="ms-auto" />
//           </div>
//         </div>
//       </div>      
//       </div>
//         )}
        
//       </div>
//       )}

//       {/* Other chapters */}


      


//       <div className="d-flex justify-content-start align-items-center">
//         <div
//           className="fw p-2 me-2 border rounded cursor-pointer d-flex align-items-center r chapter"
//           onClick={toggleChapter}
//           style={{ minWidth: "", justifyContent: "space-between " }}
//         >
//            <img src="./src/assets/courseSection/book.png" alt="book-logo" className="book-logo" />
//           <span className="cursor-pointer">Chapter - 2</span>
//           {isOpen ? <FaChevronUp /> : <FaChevronDown />}
//         </div>
//         <div className="d-flex align-items-center  rounded p-2 m-3 flex-grow-1 chapter">
//           <span className="me-2">Find the GCD and LCM of Two Numbers</span>
//           <FaInfoCircle color="blue" className="ms-auto" />
//         </div>
//       </div>

//       {isOpen && (
//         <div className="topic-section bg-warning bg-opacity-25  rounded">
//         {/* Header Row */}
//         <div className="d-flex gap-5">
//           <div className="topic-heading-left">Topic No</div>
//           <div className="topic-heading-right">Topic</div>
//         </div>
  
//         {/* Topic Row */}
//         <div className="d-flex topic-row">
//           <div
//             className=""
//             style={{ minWidth: "150px" }}
//           >
//             <button
//               className="topic-left"
//               onClick={() => handleTopicClick(1)}
//             >
//                <img src="./src/assets/courseSection/topic-logo.png" alt="book-logo" className="book-logo" />
//               Topic - 1
//               {activeTopic === 1 ? <FaChevronUp /> : <FaChevronDown />}
//             </button>
          
            
//           </div>
          
//           <div className="d-flex align-items-center flex-grow-1 rounded topic-right">
//             <span>Merge Two Lists Without Using Extend</span>
//             <FaInfoCircle color="orange" className="ms-auto" />
//           </div>
//         </div>
  
//         {/* Dropdown Content */}
//         {activeTopic === 1 && (
//           <div className="p-2 mb-2 bg-pink bg-opacity-50 rounded">



// <div className=" bg-warning bg-opacity-25  rounded subtopic-section">
//         {/* Header Row */}
//         <div className="d-flex gap-5">
//           <div className="topic-heading-left">Subtopic No</div>
//           <div className="topic-heading-right subtopic-right">Subtopic</div>
//         </div>
  
//         {/*Sub - Topic Row */}
//         <div className="d-flex topic-row">
//           <div
//             className=""
//             style={{ minWidth: "150px" }}
//           >
//             <button
//               className="topic-left"
//               onClick={() => handleTopicClick(1)}
//             >
//               <img src="./src/assets/courseSection/subtopic-logo.png" alt="book-logo" className="subtopic-logo book-logo" />
//               Subtopic - 1
             
//             </button>
          
            
//           </div>
          
//           <div className="d-flex align-items-center flex-grow-1 rounded topic-right">
//             <span>Merge Two Lists Without Using Extend</span>
//             <FaInfoCircle color="orange" className="ms-auto" />
//           </div>
//         </div>







//         <div className="d-flex topic-row">
//           <div
//             className=""
//             style={{ minWidth: "150px" }}
//           >
//             <button
//               className="topic-left"
//               onClick={() => handleTopicClick(1)}
//             >
//               <img src="./src/assets/courseSection/subtopic-logo.png" alt="book-logo" className="subtopic-logo book-logo" />
//               Subtopic - 2
             
//             </button>
          
            
//           </div>
          
//           <div className="d-flex align-items-center flex-grow-1 rounded topic-right">
//             <span>Merge Two Lists Without Using Extend</span>
//             <FaInfoCircle color="orange" className="ms-auto" />
//           </div>
//         </div>



//         <div className="d-flex topic-row">
//           <div
//             className=""
//             style={{ minWidth: "150px" }}
//           >
//             <button
//               className="topic-left"
//               onClick={() => handleTopicClick(1)}
//             >
//               <img src="./src/assets/courseSection/subtopic-logo.png" alt="book-logo" className="subtopic-logo book-logo" />
//               Subtopic - 3
             
//             </button>
          
            
//           </div>
          
//           <div className="d-flex align-items-center flex-grow-1 rounded topic-right">
//             <span>Merge Two Lists Without Using Extend</span>
//             <FaInfoCircle color="orange" className="ms-auto" />
//           </div>
//         </div>
//       </div>      
//       </div>
//         )}
        
//       </div>
//       )}






// <div className="d-flex justify-content-start align-items-center">
//         <div
//           className="fw p-2 me-2 border rounded cursor-pointer d-flex align-items-center r chapter"
//           onClick={toggleChapter}
//           style={{ minWidth: "", justifyContent: "space-between " }}
//         >
//            <img src="./src/assets/courseSection/book.png" alt="book-logo" className="book-logo" />
//           <span className="cursor-pointer">Chapter - 3</span>
//           {isOpen ? <FaChevronUp /> : <FaChevronDown />}
//         </div>
//         <div className="d-flex align-items-center  rounded p-2 m-3 flex-grow-1 chapter">
//           <span className="me-2">Convert Decimal to Binary and Hexadecimal</span>
//           <FaInfoCircle color="blue" className="ms-auto" />
//         </div>
//       </div>

//       {isOpen && (
//         <div className="topic-section bg-warning bg-opacity-25  rounded">
//         {/* Header Row */}
//         <div className="d-flex gap-5">
//           <div className="topic-heading-left">Topic No</div>
//           <div className="topic-heading-right">Topic</div>
//         </div>
  
//         {/* Topic Row */}
//         <div className="d-flex topic-row">
//           <div
//             className=""
//             style={{ minWidth: "150px" }}
//           >
//             <button
//               className="topic-left"
//               onClick={() => handleTopicClick(1)}
//             >
//                <img src="./src/assets/courseSection/topic-logo.png" alt="book-logo" className="book-logo" />
//               Topic - 1
//               {activeTopic === 1 ? <FaChevronUp /> : <FaChevronDown />}
//             </button>
          
            
//           </div>
          
//           <div className="d-flex align-items-center flex-grow-1 rounded topic-right">
//             <span>Merge Two Lists Without Using Extend</span>
//             <FaInfoCircle color="orange" className="ms-auto" />
//           </div>
//         </div>
  
//         {/* Dropdown Content */}
//         {activeTopic === 1 && (
//           <div className="p-2 mb-2 bg-pink bg-opacity-50 rounded">



// <div className=" bg-warning bg-opacity-25  rounded subtopic-section">
//         {/* Header Row */}
//         <div className="d-flex gap-5">
//           <div className="topic-heading-left">Subtopic No</div>
//           <div className="topic-heading-right subtopic-right">Subtopic</div>
//         </div>
  
//         {/*Sub - Topic Row */}
//         <div className="d-flex topic-row">
//           <div
//             className=""
//             style={{ minWidth: "150px" }}
//           >
//             <button
//               className="topic-left"
//               onClick={() => handleTopicClick(1)}
//             >
//               <img src="./src/assets/courseSection/subtopic-logo.png" alt="book-logo" className="subtopic-logo book-logo" />
//               Subtopic - 1
             
//             </button>
          
            
//           </div>
          
//           <div className="d-flex align-items-center flex-grow-1 rounded topic-right">
//             <span>Merge Two Lists Without Using Extend</span>
//             <FaInfoCircle color="orange" className="ms-auto" />
//           </div>
//         </div>







//         <div className="d-flex topic-row">
//           <div
//             className=""
//             style={{ minWidth: "150px" }}
//           >
//             <button
//               className="topic-left"
//               onClick={() => handleTopicClick(1)}
//             >
//               <img src="./src/assets/courseSection/subtopic-logo.png" alt="book-logo" className="subtopic-logo book-logo" />
//               Subtopic - 2
             
//             </button>
          
            
//           </div>
          
//           <div className="d-flex align-items-center flex-grow-1 rounded topic-right">
//             <span>Merge Two Lists Without Using Extend</span>
//             <FaInfoCircle color="orange" className="ms-auto" />
//           </div>
//         </div>



//         <div className="d-flex topic-row">
//           <div
//             className=""
//             style={{ minWidth: "150px" }}
//           >
//             <button
//               className="topic-left"
//               onClick={() => handleTopicClick(1)}
//             >
//               <img src="./src/assets/courseSection/subtopic-logo.png" alt="book-logo" className="subtopic-logo book-logo" />
//               Subtopic - 3
             
//             </button>
          
            
//           </div>
          
//           <div className="d-flex align-items-center flex-grow-1 rounded topic-right">
//             <span>Merge Two Lists Without Using Extend</span>
//             <FaInfoCircle color="orange" className="ms-auto" />
//           </div>
//         </div>
//       </div>      
//       </div>
//         )}
        
//       </div>
//       )}




      
// <div className="d-flex justify-content-start align-items-center">
//         <div
//           className="fw p-2 me-2 border rounded cursor-pointer d-flex align-items-center r chapter"
//           onClick={toggleChapter}
//           style={{ minWidth: "", justifyContent: "space-between " }}
//         >
//            <img src="./src/assets/courseSection/book.png" alt="book-logo" className="book-logo" />
//           <span className="cursor-pointer">Chapter - 4</span>
//           {isOpen ? <FaChevronUp /> : <FaChevronDown />}
//         </div>
//         <div className="d-flex align-items-center  rounded p-2 m-3 flex-grow-1 chapter">
//           <span className="me-2">Swap Two Variables Without Temp Variable</span>
//           <FaInfoCircle color="blue" className="ms-auto" />
//         </div>
//       </div>

//       {isOpen && (
//         <div className="topic-section bg-warning bg-opacity-25  rounded">
//         {/* Header Row */}
//         <div className="d-flex gap-5">
//           <div className="topic-heading-left">Topic No</div>
//           <div className="topic-heading-right">Topic</div>
//         </div>
  
//         {/* Topic Row */}
//         <div className="d-flex topic-row">
//           <div
//             className=""
//             style={{ minWidth: "150px" }}
//           >
//             <button
//               className="topic-left"
//               onClick={() => handleTopicClick(1)}
//             >
//                <img src="./src/assets/courseSection/topic-logo.png" alt="book-logo" className="book-logo" />
//               Topic - 1
//               {activeTopic === 1 ? <FaChevronUp /> : <FaChevronDown />}
//             </button>
          
            
//           </div>
          
//           <div className="d-flex align-items-center flex-grow-1 rounded topic-right">
//             <span>Merge Two Lists Without Using Extend</span>
//             <FaInfoCircle color="orange" className="ms-auto" />
//           </div>
//         </div>
  
//         {/* Dropdown Content */}
//         {activeTopic === 1 && (
//           <div className="p-2 mb-2 bg-pink bg-opacity-50 rounded">



// <div className=" bg-warning bg-opacity-25  rounded subtopic-section">
//         {/* Header Row */}
//         <div className="d-flex gap-5">
//           <div className="topic-heading-left">Subtopic No</div>
//           <div className="topic-heading-right subtopic-right">Subtopic</div>
//         </div>
  
//         {/*Sub - Topic Row */}
//         <div className="d-flex topic-row">
//           <div
//             className=""
//             style={{ minWidth: "150px" }}
//           >
//             <button
//               className="topic-left"
//               onClick={() => handleTopicClick(1)}
//             >
//               <img src="./src/assets/courseSection/subtopic-logo.png" alt="book-logo" className="subtopic-logo book-logo" />
//               Subtopic - 1
             
//             </button>
          
            
//           </div>
          
//           <div className="d-flex align-items-center flex-grow-1 rounded topic-right">
//             <span>Merge Two Lists Without Using Extend</span>
//             <FaInfoCircle color="orange" className="ms-auto" />
//           </div>
//         </div>







//         <div className="d-flex topic-row">
//           <div
//             className=""
//             style={{ minWidth: "150px" }}
//           >
//             <button
//               className="topic-left"
//               onClick={() => handleTopicClick(1)}
//             >
//               <img src="./src/assets/courseSection/subtopic-logo.png" alt="book-logo" className="subtopic-logo book-logo" />
//               Subtopic - 2
             
//             </button>
          
            
//           </div>
          
//           <div className="d-flex align-items-center flex-grow-1 rounded topic-right">
//             <span>Merge Two Lists Without Using Extend</span>
//             <FaInfoCircle color="orange" className="ms-auto" />
//           </div>
//         </div>



//         <div className="d-flex topic-row">
//           <div
//             className=""
//             style={{ minWidth: "150px" }}
//           >
//             <button
//               className="topic-left"
//               onClick={() => handleTopicClick(1)}
//             >
//               <img src="./src/assets/courseSection/subtopic-logo.png" alt="book-logo" className="subtopic-logo book-logo" />
//               Subtopic - 3
             
//             </button>
          
            
//           </div>
          
//           <div className="d-flex align-items-center flex-grow-1 rounded topic-right">
//             <span>Merge Two Lists Without Using Extend</span>
//             <FaInfoCircle color="orange" className="ms-auto" />
//           </div>
//         </div>
//       </div>      
//       </div>
//         )}
        
//       </div>
//       )}






      
// <div className="d-flex justify-content-start align-items-center">
//         <div
//           className="fw p-2 me-2 border rounded cursor-pointer d-flex align-items-center r chapter"
//           onClick={toggleChapter}
//           style={{ minWidth: "", justifyContent: "space-between " }}
//         >
//            <img src="./src/assets/courseSection/book.png" alt="book-logo" className="book-logo" />
//           <span className="cursor-pointer">Chapter - 5</span>
//           {isOpen ? <FaChevronUp /> : <FaChevronDown />}
//         </div>
//         <div className="d-flex align-items-center  rounded p-2 m-3 flex-grow-1 chapter">
//           <span className="me-2">Generate Random Numbers Using Python</span>
//           <FaInfoCircle color="blue" className="ms-auto" />
//         </div>
//       </div>

//       {isOpen && (
//         <div className="topic-section bg-warning bg-opacity-25  rounded">
//         {/* Header Row */}
//         <div className="d-flex gap-5">
//           <div className="topic-heading-left">Topic No</div>
//           <div className="topic-heading-right">Topic</div>
//         </div>
  
//         {/* Topic Row */}
//         <div className="d-flex topic-row">
//           <div
//             className=""
//             style={{ minWidth: "150px" }}
//           >
//             <button
//               className="topic-left"
//               onClick={() => handleTopicClick(1)}
//             >
//                <img src="./src/assets/courseSection/topic-logo.png" alt="book-logo" className="book-logo" />
//               Topic - 1
//               {activeTopic === 1 ? <FaChevronUp /> : <FaChevronDown />}
//             </button>
          
            
//           </div>
          
//           <div className="d-flex align-items-center flex-grow-1 rounded topic-right">
//             <span>Merge Two Lists Without Using Extend</span>
//             <FaInfoCircle color="orange" className="ms-auto" />
//           </div>
//         </div>
  
//         {/* Dropdown Content */}
//         {activeTopic === 1 && (
//           <div className="p-2 mb-2 bg-pink bg-opacity-50 rounded">



// <div className=" bg-warning bg-opacity-25  rounded subtopic-section">
//         {/* Header Row */}
//         <div className="d-flex gap-5">
//           <div className="topic-heading-left">Subtopic No</div>
//           <div className="topic-heading-right subtopic-right">Subtopic</div>
//         </div>
  
//         {/*Sub - Topic Row */}
//         <div className="d-flex topic-row">
//           <div
//             className=""
//             style={{ minWidth: "150px" }}
//           >
//             <button
//               className="topic-left"
//               onClick={() => handleTopicClick(1)}
//             >
//               <img src="./src/assets/courseSection/subtopic-logo.png" alt="book-logo" className="subtopic-logo book-logo" />
//               Subtopic - 1
             
//             </button>
          
            
//           </div>
          
//           <div className="d-flex align-items-center flex-grow-1 rounded topic-right">
//             <span>Merge Two Lists Without Using Extend</span>
//             <FaInfoCircle color="orange" className="ms-auto" />
//           </div>
//         </div>







//         <div className="d-flex topic-row">
//           <div
//             className=""
//             style={{ minWidth: "150px" }}
//           >
//             <button
//               className="topic-left"
//               onClick={() => handleTopicClick(1)}
//             >
//               <img src="./src/assets/courseSection/subtopic-logo.png" alt="book-logo" className="subtopic-logo book-logo" />
//               Subtopic - 2
             
//             </button>
          
            
//           </div>
          
//           <div className="d-flex align-items-center flex-grow-1 rounded topic-right">
//             <span>Merge Two Lists Without Using Extend</span>
//             <FaInfoCircle color="orange" className="ms-auto" />
//           </div>
//         </div>



//         <div className="d-flex topic-row">
//           <div
//             className=""
//             style={{ minWidth: "150px" }}
//           >
//             <button
//               className="topic-left"
//               onClick={() => handleTopicClick(1)}
//             >
//               <img src="./src/assets/courseSection/subtopic-logo.png" alt="book-logo" className="subtopic-logo book-logo" />
//               Subtopic - 3
             
//             </button>
          
            
//           </div>
          
//           <div className="d-flex align-items-center flex-grow-1 rounded topic-right">
//             <span>Merge Two Lists Without Using Extend</span>
//             <FaInfoCircle color="orange" className="ms-auto" />
//           </div>
//         </div>
//       </div>      
//       </div>
//         )}
        
//       </div>
//       )}
      
//     </div>
//   );
// };

// export default ChapterSection;













import { useState } from "react";
import { Link } from "react-router-dom";
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
          { number: 1, title: "Combine two lists using loops, the + operator, or the ... " },
          { number: 2, title: "Combine two lists using loops, the + operator, or the ...  " },
         
          { number: 3, title: "Combine two lists using loops, the + operator, or the ... " },
        ],
      },
      {
        number: 2,
        title: "Merge Two Lists Without Using Extend",
        subtopics: [
          { number: 1, title: "Merge Two Lists Without Using Extend " },
          { number: 2, title: "Merge Two lists Without Using Extend " },
         
          { number: 4, title: "Merge Two lists Without Using Extend " },
        ],
      },
      {
        number: 3,
        title: "Merge Two Lists Without Using Extend",
        subtopics: [
          { number: 1, title: "Merge Two Lists Without Using Extend " },
          { number: 2, title: "Merge Two lists Without Using Extend " },
         
          { number: 4, title: "Merge Two lists Without Using Extend " },
        ],
      },
      {
        number: 4,
        title: "Merge Two Lists Without Using Extend",
        subtopics: [
          { number: 1, title: "Merge Two Lists Without Using Extend " },
          { number: 2, title: "Merge Two lists Without Using Extend " },
         
          { number: 4, title: "Merge Two lists Without Using Extend " },
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
        title: "Merge Two Lists Without Using Extend ",
        subtopics: [
          { number: 1, title: "Combine two lists using loops, the + operator, or the ... " },
          { number: 2, title: "Combine two lists using loops, the + operator, or the ... " },
          { number: 3, title: "Combine two lists using loops, the + operator, or the ... " },
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
  {
    number: 4,
    title: "Swap Two Variables Without Temp Variable ",
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
  {
    number: 5,
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
    <div className="chapter-section mt-2">
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
               <img src="./public/assets/courseSection/book.png" alt="book-logo" className=" book-logo" />
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
                         <img src="./public/assets/courseSection/topic-logo.png" alt="book-logo" className=" book-logo" />
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

                        {topic.subtopics.map((subtopic, subtopicIndex) => (
                          <div key={subtopic.number} className="d-flex topic-row">
                            <div style={{ minWidth: "150px" }}>

                               {/* ✅ Subtopic pe click karne se naye page pe jayega */}
                              <Link to={`/subtopic/${chapterIndex}/${topicIndex}/${subtopicIndex}`} className="topic-left">
                                <img src="/public/assets/courseSection/subtopic-logo.png" alt="subtopic-logo" className="subtopic-logo book-logo" />
                                Subtopic - {subtopic.number}
                              </Link>
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