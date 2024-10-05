
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GetQuestionComponent from './GetQuestionComponent';
import CreateQuestion from "./CreateQuestion"


function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="nav-bar">
          <Link to="/" className="nav-link">Add Question</Link>
          <Link to="/all" className="nav-link">Display Questions</Link>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<CreateQuestion/>} />
            <Route path="/all" element={<GetQuestionComponent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
