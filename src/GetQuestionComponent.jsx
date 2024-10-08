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

  const deleteHandler = async(id) => {
    try{
      const deleteResponse = await axios.delete(`${BE_URL}/question/${id}`);
      console.log(deleteResponse.data);
      getAllData();
    }
    catch (error) {
      console.log(error)
      if(error.response){
         alert(error.response.data.message);
      }
      else{
         alert(error.message);
      } 
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
            <strong>Id:</strong>{item.id}<br /><br />
            <strong>Question:</strong> {item.question} <br /><br />
            <strong>Answer:</strong> {item.answer}
            <button onClick={() => deleteHandler(item.id)} className='button btn'>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetQuestionComponent;
