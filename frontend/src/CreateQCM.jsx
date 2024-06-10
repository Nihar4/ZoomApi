import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheet1.css';


const CreateQCM = () => {
  const { id } = useParams();
  console.log("the id", id);
  const [question, setQuestion] = useState('');
  const [numSegments, setNumSegments] = useState(2); // Default to 2 segments
  const [NSegection, setNSegection] = useState(''); // New state variable for number of selections
  const [segments, setSegments] = useState([{ seggection: '', note: '' }, { seggection: '', note: '' }]);
  const [questionId, setQuestionId] = useState(null);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleNSegectionChange = (e) => {
    setNSegection(e.target.value);
  };

  const handleNumSegmentsChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setNumSegments(count);
    // Adjust the segments array size based on the new count
    setSegments((prevSegments) => {
      if (count > prevSegments.length) {
        // Add new segment objects
        return [...prevSegments, ...Array(count - prevSegments.length).fill({ seggection: '', note: '' })];
      } else {
        // Slice the segments array to the new length
        return prevSegments.slice(0, count);
      }
    });
  };

  const handleSegmentChange = (index, field, value) => {
    setSegments((prevSegments) =>
      prevSegments.map((segment, i) =>
        i === index ? { ...segment, [field]: value } : segment
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const qcmData = { question, NSegection, segments };
    console.log("Form Data Submitted:", qcmData);

    // Send the data to the server and store the inserted question ID
    axios.post(`http://localhost:8081/QCMcreatQestion/${question}/${NSegection}/${id}`)
      .then(response => {
        console.log('QCM created successfully:', response.data);
        const questionId = response.data.ID_QCM_QUESTION;
        // Loop through segments array and create segments
        segments.forEach((segment, index) => {
          const { seggection, note } = segment;
          // Send Axios POST request for each segment
          axios.post(`http://localhost:8081/QCMcreatSeggection/${questionId}/${seggection}/${note}`)
            .then(response => {
              console.log('Segment created successfully:', response.data);
              // Handle success if needed
            })
            .catch(error => {
              console.error('Error creating segment:', error);
              // Handle error if needed
            });
        });
        // Handle success (e.g., display a success message, clear form)
      })
      .catch(error => {
        console.error('Error creating QCM:', error);
        // Handle error (e.g., display an error message)
      });
  };

  return (
    <div className="container mt-5 p-4 qcm-form">
      <h2 className="mb-4">Create New QCM</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="question">Question:</label>
          <input
            type="text"
            id="question"
            className="form-control"
            value={question}
            onChange={handleQuestionChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="NSegection">Number of selections user can make:</label>
          <input
            type="text"
            id="NSegection"
            className="form-control"
            value={NSegection}
            onChange={handleNSegectionChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="numSegments">Number of Segments:</label>
          <select
            id="numSegments"
            className="form-select"
            value={numSegments}
            onChange={handleNumSegmentsChange}
          >
            {[2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>
        {segments.map((segment, index) => (
          <div key={index} className="border p-3 mb-3 segment-container">
            <div className="form-group mb-3">
              <label htmlFor={`seggection-${index}`}>Seggection {index + 1}:</label>
              <input
                type="text"
                id={`seggection-${index}`}
                className="form-control"
                value={segment.seggection}
                onChange={(e) => handleSegmentChange(index, 'seggection', e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor={`note-${index}`}>Note {index + 1}:</label>
              <input
                type="text"
                id={`note-${index}`}
                className="form-control"
                value={segment.note}
                onChange={(e) => handleSegmentChange(index, 'note', e.target.value)}
                required
              />
            </div>
          </div>
        ))}
        <button type="submit" className="btn btn-primary">Create  qestion</button>
      </form>
    </div>
  );
};

export default CreateQCM;
