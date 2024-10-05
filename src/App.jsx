import Addcomponent from './AddComponent';
import './App.css';
// import Addcomponent from './Components/AddComponent/Addcomponent';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GetQuestionComponent from './GetQuestionComponent';



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
            <Route path="/" element={<Addcomponent />} />
            <Route path="/all" element={<GetQuestionComponent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
