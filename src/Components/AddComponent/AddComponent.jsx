import React, { useState } from 'react';
import './Addcomponent.css'; // Import the CSS file
import axios from 'axios';
import { BE_URL } from '../../config';
const Addcomponent = () => {
   const [formData, setFormData] = useState({
      question: "",
      answer: ""
   });
   const [isLoading,setIsLoading] = useState(false);


   const formChangeHandler = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   const submitHandler = async (e) => {
      setIsLoading(true);
      e.preventDefault();
      try {
         const postData = await axios.post(`${BE_URL}/question`, formData);
         console.log(postData)
         alert(postData.data.message || "Added successful.");
      } catch (error) {
         console.log(error)
         if(error.response){
            alert(error.response.data.message);
         }
         else{
            alert(error.message);
         }
         
      }
      finally{
         setIsLoading(false);
      }


   };

   return (
      <div className="form-container">
         {!isLoading && <form onSubmit={submitHandler}>
            <div className="form-group">
               <label htmlFor="question">Question</label>
               <textarea
                  id="question"
                  name="question"
                  className="textarea"
                  value={formData.question}
                  onChange={formChangeHandler}
               />
            </div>
            <div className="form-group">
               <label htmlFor="answer">Answer</label>
               <input
                  id="answer"
                  name="answer"
                  className="input"
                  value={formData.answer}
                  onChange={formChangeHandler}
               />
            </div>
            <div>
               <button type='submit' className='submit-btn'>Submit</button>
            </div>
         </form>}
         {
            isLoading && <div>
               Loading....
            </div>
         }
      </div>
   );
};

export default Addcomponent;
