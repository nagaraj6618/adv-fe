
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GetQuestionComponent from './GetQuestionComponent';
import CreateQuestion from "./CreateQuestion"
import { useEffect, useState } from 'react';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    password: ""
  });
  const formChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  function checkLogginStatus() {
    const userName = sessionStorage.getItem("userName") === "Sec2025";
    const password = sessionStorage.getItem("password") === "2025";
    if (userName && password) {
      setIsLoggedIn(true);
      console.log(true);
    }
  }
  const loginFormHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    sessionStorage.setItem("userName",formData.userName);
    sessionStorage.setItem("password",formData.password);
    // window.location.reload();
    checkLogginStatus();
  }
  const logOutHandler = () => {
    sessionStorage.clear();
  }
  useEffect(() => {
    checkLogginStatus();
  }, [0])
  return (
    <Router>
      {isLoggedIn && <div className="app-container">
        <nav className="nav-bar">
          <Link to="/" className="nav-link">Add Question</Link>
          <Link to="/all" className="nav-link">Display Questions</Link>
          <a className='nav-link' href='https://adv-be.vercel.app/api/v1/question' target='__blank'>Get Json Data</a>
          <button onClick={logOutHandler} className='nav-link button'>Logout</button>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<CreateQuestion />} />
            <Route path="/all" element={<GetQuestionComponent />} />
          </Routes>
        </div>
      </div>}
      {!isLoggedIn && (
        <div className="login-form-container">
          <h2>Login</h2>
          <form onSubmit={loginFormHandler}>
            <div>
              <label htmlFor="userName">User Name</label>
              <input
                type="text"
                id="userName"
                name="userName"
                value={formData.userName}
                onChange={formChangeHandler}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={formChangeHandler}
              />
            </div>
            <button type="submit" className='button'>Login</button>
          </form>
        </div>
      )}

    </Router>
  );
}

export default App;
