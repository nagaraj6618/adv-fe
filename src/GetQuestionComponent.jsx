import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './GetQuestionComponent.css'; // Import the CSS file
import { BE_URL } from './config';

const GetQuestionComponent = () => {
  const [data, setData] = useState([]);

  async function getAllData() {
    try {
      const { data } = await axios.get(`${BE_URL}/question`);
      setData(data.data);
    } catch (error) {
      alert("Error fetching data...");
    }
  }

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="question-container">
      <h2>Questions and Answers</h2>
      <ul className="question-list">
        {data.map((item, index) => (
          <li key={index} className="question-item">
            <strong>Question:</strong> {item.question} <br />
            <strong>Answer:</strong> {item.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetQuestionComponent;
